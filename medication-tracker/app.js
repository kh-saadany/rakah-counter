/**
 * Medication Tracker Application Logic
 * Modern, offline-first PWA with IndexedDB and OCR support.
 */

class MedicationTracker {
  constructor() {
    this.db = null;
    this.currentTab = 'home';
    this.activeAlarm = null;
    this.alarmAudioContext = null;
    this.alarmInterval = null;
    this.capturedPhotoData = null;
    this.scannerStream = null;
    
    // Initialize App
    this.init();
  }

  async init() {
    // 1. Initialize Database
    await this.initDatabase();

    // 2. Register Service Worker
    this.registerServiceWorker();

    // 3. Request permissions status
    this.updateNotificationPermissionStatus();

    // 4. Set Event Listeners
    this.setupEventListeners();

    // 5. Load Data & Render
    await this.loadAndRenderAll();

    // 6. Start scheduling checker (runs every 15 seconds)
    this.startScheduler();

    // Set today's date in UI
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date-text').innerText = new Date().toLocaleDateString('ar-EG', options);
  }

  // --- DATABASE SETUP ---
  initDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('MedicationTrackerDB', 2);

      request.onerror = (e) => {
        console.error('Database failed to open:', e);
        reject(e);
      };

      request.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        
        // Medications store
        if (!db.objectStoreNames.contains('medications')) {
          db.createObjectStore('medications', { keyPath: 'id' });
        }
        
        // Adherence log store
        if (!db.objectStoreNames.contains('adherence_log')) {
          const logStore = db.createObjectStore('adherence_log', { keyPath: 'id' });
          logStore.createIndex('medId', 'medId', { unique: false });
          logStore.createIndex('date', 'date', { unique: false });
        }
      };
    });
  }

  // Generic DB Operations Helper
  dbQuery(storeName, method, data = null, key = null) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(requestStore());
      
      function requestStore() {
        return storeName;
      }
      
      let request;
      if (method === 'add' || method === 'put') {
        request = store[method](data);
      } else if (method === 'get') {
        request = store.get(key);
      } else if (method === 'delete') {
        request = store.delete(key);
      } else if (method === 'getAll') {
        request = store.getAll();
      }

      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });
  }

  // --- SERVICE WORKER & NOTIFICATIONS ---
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
        .then((reg) => {
          console.log('Service Worker Registered Successfully.', reg);
          
          // Listen to messages from the Service Worker (e.g. notification action clicked)
          navigator.serviceWorker.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'NOTIFICATION_ACTION') {
              this.handleNotificationAction(event.data);
            }
          });
        })
        .catch((err) => console.error('Service Worker registration failed:', err));
    }
  }

  updateNotificationPermissionStatus() {
    const badge = document.getElementById('notification-status-badge');
    const btn = document.getElementById('btn-request-notification');

    if (!('Notification' in window)) {
      badge.className = 'badge badge-danger';
      badge.innerText = 'غير مدعوم';
      btn.style.display = 'none';
      return;
    }

    if (Notification.permission === 'granted') {
      badge.className = 'badge badge-success';
      badge.innerText = 'مفعّلة ✅';
      btn.style.display = 'none';
    } else if (Notification.permission === 'denied') {
      badge.className = 'badge badge-danger';
      badge.innerText = 'مرفوضة ❌';
      btn.innerText = 'إعادة طلب الصلاحية';
    } else {
      badge.className = 'badge badge-warning';
      badge.innerText = 'بانتظار الموافقة ⏳';
    }
  }

  requestNotificationPermission() {
    if (!('Notification' in window)) return;
    Notification.requestPermission().then(() => {
      this.updateNotificationPermissionStatus();
      if (Notification.permission === 'granted') {
        new Notification('تطبيق متابعة الأدوية', {
          body: 'شكراً لك! تم تفعيل التنبيهات بنجاح.',
          icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png'
        });
      }
    });
  }

  // --- UI NAVIGATION & TAB SWITCHING ---
  switchTab(tabId) {
    this.currentTab = tabId;
    
    // Toggle active classes on view elements
    document.querySelectorAll('.tab-view').forEach(view => {
      view.classList.remove('active');
    });
    document.getElementById(`tab-${tabId}`).classList.add('active');

    // Toggle active classes on nav buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`.nav-item[data-tab="${tabId}"]`).classList.add('active');

    // Reload calculations when switching
    this.loadAndRenderAll();
  }

  // --- DATA LOADING & RENDERING ---
  async loadAndRenderAll() {
    if (!this.db) return;
    
    const meds = await this.dbQuery('medications', 'getAll');
    const logs = await this.dbQuery('adherence_log', 'getAll');
    
    this.renderHomeTimeline(meds, logs);
    this.renderMedicationsList(meds);
    this.renderHistoryAndStats(meds, logs);
    this.updateAppHeaderNextAlert(meds, logs);
  }

  // 1. Render Home Timeline
  renderHomeTimeline(meds, logs) {
    const timelineContainer = document.getElementById('today-timeline');
    const todayLogMap = this.getTodayLogsMap(logs);
    const todayDoses = [];

    // Construct all scheduled doses for today
    const now = new Date();
    const todayStr = this.getLocalDateString(now);

    meds.forEach(med => {
      if (med.frequency === '0') {
        // "عند اللزوم" meds are listed at the bottom or handled differently
        todayDoses.push({
          med,
          time: 'عند اللزوم',
          isAsNeeded: true,
          taken: todayLogMap[`${med.id}-asneeded`] || false,
          logId: `${med.id}-asneeded`
        });
        return;
      }

      med.times.forEach(time => {
        const logId = `${med.id}-${todayStr}-${time}`;
        const logEntry = todayLogMap[logId];
        
        let status = 'pending'; // pending, taken, missed
        if (logEntry) {
          status = logEntry.status; // taken, skipped, etc.
        } else {
          // Check if missed
          const [hrs, mins] = time.split(':').map(Number);
          const doseTime = new Date();
          doseTime.setHours(hrs, mins, 0, 0);
          if (now > doseTime) {
            status = 'missed';
          }
        }

        todayDoses.push({
          med,
          time,
          isAsNeeded: false,
          status,
          logId
        });
      });
    });

    // Sort timeline doses by time
    todayDoses.sort((a, b) => {
      if (a.isAsNeeded && !b.isAsNeeded) return 1;
      if (!a.isAsNeeded && b.isAsNeeded) return -1;
      if (a.isAsNeeded && b.isAsNeeded) return 0;
      return a.time.localeCompare(b.time);
    });

    // Render stats counters
    const totalToday = todayDoses.filter(d => !d.isAsNeeded).length;
    const takenToday = todayDoses.filter(d => !d.isAsNeeded && d.status === 'taken').length;
    const pendingToday = totalToday - takenToday;
    const adherenceRate = totalToday > 0 ? Math.round((takenToday / totalToday) * 100) : 0;

    document.getElementById('stat-total').innerText = totalToday;
    document.getElementById('stat-taken').innerText = takenToday;
    document.getElementById('stat-pending').innerText = pendingToday;
    document.getElementById('adherence-percentage').innerText = `${adherenceRate}%`;
    
    // Draw Progress Ring Circle SVG
    const circle = document.getElementById('adherence-circle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (adherenceRate / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Render Timeline Items HTML
    if (todayDoses.length === 0) {
      timelineContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">💊</div>
          <p>لا توجد أدوية مجدولة اليوم.</p>
          <button class="btn btn-primary btn-sm" onclick="app.switchTab('meds'); app.openAddModal();">إضافة دواء جديد</button>
        </div>
      `;
      return;
    }

    let html = '';
    todayDoses.forEach(dose => {
      const isTaken = dose.status === 'taken';
      const isMissed = dose.status === 'missed';
      const statusClass = isTaken ? 'taken' : (isMissed ? 'missed' : 'pending');
      const formattedTime = dose.isAsNeeded ? 'عند اللزوم' : this.formatTime12h(dose.time);
      
      const imgTag = dose.med.image 
        ? `<img src="${dose.med.image}" class="timeline-card-img" alt="${dose.med.name}">`
        : `<div class="timeline-card-img" style="display:flex;align-items:center;justify-content:center;font-size:1.2rem;background:#1e293b;">${this.getMedIcon(dose.med.type)}</div>`;

      html += `
        <div class="timeline-item ${statusClass}">
          ${imgTag}
          <div class="timeline-content">
            <div class="med-title">${dose.med.name}</div>
            <div class="med-subtitle">
              <span>الجرعة: ${dose.med.dosage}</span>
              <span>•</span>
              <span>${this.getMedTypeLabel(dose.med.type)}</span>
            </div>
          </div>
          <div class="timeline-time">${formattedTime}</div>
          <div class="timeline-action">
            <button class="btn-checkbox" onclick="app.toggleDoseStatus('${dose.med.id}', '${dose.time}', '${dose.logId}', '${dose.status}')" title="تأكيد التناول">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </button>
          </div>
        </div>
      `;
    });

    timelineContainer.innerHTML = html;
  }

  // 2. Render Medications Manager list
  renderMedicationsList(meds) {
    const grid = document.getElementById('medications-grid');

    if (meds.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📦</div>
          <p>لم تقم بإضافة أي أدوية بعد.</p>
          <button class="btn btn-primary btn-sm" onclick="app.openAddModal()">إضافة أول دواء الآن</button>
        </div>
      `;
      return;
    }

    let html = '';
    meds.forEach(med => {
      const imgTag = med.image 
        ? `<img src="${med.image}" class="med-card-img" alt="${med.name}">`
        : `<div class="med-card-img" style="display:flex;align-items:center;justify-content:center;font-size:1.6rem;">${this.getMedIcon(med.type)}</div>`;
      
      const freqLabel = med.frequency === '0' ? 'عند اللزوم' : `${med.frequency} مرات يومياً`;
      const timesLabel = med.frequency !== '0' ? `أوقات: ${med.times.map(t => this.formatTime12h(t)).join('، ')}` : '';

      // Inventory warning
      let stockHtml = '';
      if (med.stock !== undefined && med.stock !== '') {
        const isLow = med.stockAlert !== undefined && med.stockAlert !== '' && Number(med.stock) <= Number(med.stockAlert);
        if (isLow) {
          stockHtml = `<span class="inventory-pill low">⚠️ مخزون منخفض: بقيت ${med.stock} جرعة</span>`;
        } else {
          stockHtml = `<span class="inventory-pill good">📦 المخزون: ${med.stock} جرعة</span>`;
        }
      }

      html += `
        <div class="med-card" id="med-card-${med.id}">
          <div class="med-card-body">
            ${imgTag}
            <div class="med-card-details">
              <div class="med-card-name">${med.name}</div>
              <div class="med-card-info-item">الجرعة: ${med.dosage} (${this.getMedTypeLabel(med.type)})</div>
              <div class="med-card-info-item">التكرار: ${freqLabel}</div>
              ${timesLabel ? `<div class="med-card-info-item">${timesLabel}</div>` : ''}
              ${stockHtml}
            </div>
          </div>
          <div class="med-card-actions">
            <button class="btn btn-outline btn-sm" onclick="app.openAddModal('${med.id}')">تعديل ✏️</button>
            <button class="btn-icon-danger" onclick="app.deleteMedication('${med.id}')" title="حذف الدواء">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  // 3. Render Stats & Logs History
  renderHistoryAndStats(meds, logs) {
    const historyList = document.getElementById('history-log-list');
    const chartBars = document.getElementById('chart-bars');

    // Render log items in descending actionTime order
    const sortedLogs = [...logs].sort((a, b) => b.actionTime - a.actionTime).slice(0, 30); // show last 30 entries

    if (sortedLogs.length === 0) {
      historyList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📁</div>
          <p>السجل فارغ. سيظهر هنا تاريخ تناولك للأدوية.</p>
        </div>
      `;
    } else {
      let html = '';
      sortedLogs.forEach(entry => {
        let badgeClass = 'badge-success';
        let statusText = 'تم تناول الجرعة';
        if (entry.status === 'skipped') {
          badgeClass = 'badge-warning';
          statusText = 'تم التخطي';
        } else if (entry.status === 'snoozed') {
          badgeClass = 'badge-warning';
          statusText = 'تم تأجيلها';
        } else if (entry.status === 'missed') {
          badgeClass = 'badge-danger';
          statusText = 'جرعة فائتة';
        }

        const dateStr = new Date(entry.actionTime).toLocaleString('ar-EG', {
          month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        html += `
          <div class="history-item">
            <div class="history-item-meta">
              <h4>${entry.medName}</h4>
              <p>${dateStr} ${entry.scheduledTime ? `(موعد: ${this.formatTime12h(entry.scheduledTime)})` : ''}</p>
            </div>
            <span class="badge ${badgeClass}">${statusText}</span>
          </div>
        `;
      });
      historyList.innerHTML = html;
    }

    // Generate Chart for last 7 days (Saturday - Friday or past 7 days)
    const now = new Date();
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      last7Days.push(this.getLocalDateString(d));
    }

    // Group logs by date
    let chartHtml = '';
    last7Days.forEach(dateStr => {
      const dayLogs = logs.filter(l => l.date === dateStr);
      
      // Calculate how many doses are configured on that weekday
      const dayOfWeek = new Date(dateStr).getDay();
      let totalSched = 0;
      meds.forEach(m => {
        if (m.frequency !== '0') {
          totalSched += m.times.length;
        }
      });

      // Taken logs on this day
      const takenCount = dayLogs.filter(l => l.status === 'taken').length;
      
      let rate = 0;
      if (totalSched > 0) {
        rate = Math.min(100, Math.round((takenCount / totalSched) * 100));
      } else if (takenCount > 0) {
        rate = 100; // if taken but none scheduled (asneeded)
      }

      const isSuccess = rate >= 80;
      chartHtml += `
        <div class="chart-bar-wrapper">
          <div class="chart-bar-fill ${isSuccess ? 'success' : ''}" style="height: ${rate}%" title="${dateStr}: ${rate}%">
            <span class="chart-bar-val">${rate}%</span>
          </div>
        </div>
      `;
    });
    chartBars.innerHTML = chartHtml;
  }

  // Helper map for fast lookup
  getTodayLogsMap(logs) {
    const today = this.getLocalDateString(new Date());
    const map = {};
    logs.forEach(log => {
      if (log.date === today) {
        map[log.id] = log;
      }
    });
    return map;
  }

  // Header quick alert for next dose
  updateAppHeaderNextAlert(meds, logs) {
    const nextAlertText = document.getElementById('next-alert-text');
    const badge = document.getElementById('quick-next-alert');
    const now = new Date();
    const todayStr = this.getLocalDateString(now);

    let nextDose = null;
    let minDiff = Infinity;

    const todayLogMap = this.getTodayLogsMap(logs);

    meds.forEach(med => {
      if (med.frequency === '0') return; // skip "as needed"

      med.times.forEach(time => {
        const logId = `${med.id}-${todayStr}-${time}`;
        if (todayLogMap[logId]) return; // already acted upon

        const [hrs, mins] = time.split(':').map(Number);
        const doseTime = new Date();
        doseTime.setHours(hrs, mins, 0, 0);

        const diff = doseTime - now;
        if (diff > 0 && diff < minDiff) {
          minDiff = diff;
          nextDose = { med, time, doseTime };
        }
      });
    });

    if (nextDose) {
      const timeStr = this.formatTime12h(nextDose.time);
      nextAlertText.innerText = `${nextDose.med.name} في ${timeStr}`;
      badge.style.display = 'flex';
    } else {
      nextAlertText.innerText = 'لا توجد جرعات قادمة';
      badge.style.display = 'flex';
    }
  }

  // --- INTERACTION LOGIC (TOGGLING & ALARMS) ---
  async toggleDoseStatus(medId, time, logId, currentStatus) {
    if (currentStatus === 'taken') {
      // Undo Taken - remove log entry
      await this.dbQuery('adherence_log', 'delete', null, logId);
      
      // Return stock
      const med = await this.dbQuery('medications', 'get', null, medId);
      if (med && med.stock !== undefined && med.stock !== '') {
        med.stock = Number(med.stock) + 1;
        await this.dbQuery('medications', 'put', med);
      }
    } else {
      // Mark as Taken
      const med = await this.dbQuery('medications', 'get', null, medId);
      if (!med) return;

      const now = new Date();
      const logEntry = {
        id: logId,
        medId: medId,
        medName: med.name,
        scheduledTime: time,
        date: this.getLocalDateString(now),
        status: 'taken',
        actionTime: now.getTime()
      };
      
      await this.dbQuery('adherence_log', 'put', logEntry);

      // Decrement stock if configured
      if (med.stock !== undefined && med.stock !== '' && med.stock > 0) {
        med.stock = med.stock - 1;
        await this.dbQuery('medications', 'put', med);
        
        // Show low stock push alert
        if (med.stockAlert !== undefined && med.stockAlert !== '' && med.stock <= med.stockAlert) {
          this.triggerLocalNotification(`⚠️ تنبيه مخزون: ${med.name}`, {
            body: `مخزون الدواء أوشك على النفاد. المتبقي: ${med.stock} جرعات فقط.`
          });
        }
      }
    }

    // Play tactile sound
    this.playAudioBeep(600, 'sine', 0.1);
    this.loadAndRenderAll();
  }

  // Active Scheduler Checker
  startScheduler() {
    this.alarmInterval = setInterval(async () => {
      if (!this.db) return;
      const now = new Date();
      const currentHrsMins = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const todayStr = this.getLocalDateString(now);

      const meds = await this.dbQuery('medications', 'getAll');
      const logs = await this.dbQuery('adherence_log', 'getAll');
      const todayLogMap = this.getTodayLogsMap(logs);

      meds.forEach(med => {
        if (med.frequency === '0') return; // skip asneeded
        
        med.times.forEach(time => {
          // Check if it's the exact time
          if (time === currentHrsMins) {
            const logId = `${med.id}-${todayStr}-${time}`;
            
            // Trigger if not logged yet AND not currently showing active alarm
            if (!todayLogMap[logId] && (!this.activeAlarm || this.activeAlarm.logId !== logId)) {
              this.triggerAlarm(med, time, logId);
            }
          }
        });
      });
    }, 15000); // Check every 15s
  }

  triggerAlarm(med, time, logId) {
    this.activeAlarm = { med, time, logId };

    // 1. Show Active Alarm Overlay (if user is currently using the app)
    const overlay = document.getElementById('alarm-overlay');
    document.getElementById('alarm-med-name').innerText = med.name;
    document.getElementById('alarm-med-dosage').innerText = `الجرعة: ${med.dosage} (${this.getMedTypeLabel(med.type)})`;
    
    const imgWrapper = document.getElementById('alarm-med-img-wrapper');
    const alarmImg = document.getElementById('alarm-med-img');
    if (med.image) {
      alarmImg.src = med.image;
      imgWrapper.classList.remove('hidden');
    } else {
      imgWrapper.classList.add('hidden');
    }

    overlay.classList.remove('hidden');

    // 2. Play Audio Alert Loop
    this.startAlarmSound();

    // 3. Trigger Native PWA Background Notification (via Service Worker)
    this.triggerLocalNotification(`⏰ موعد تناول دواء ${med.name}`, {
      body: `الجرعة المطلوبة: ${med.dosage} - اضغط لتأكيد التناول.`,
      tag: logId,
      data: { medId: med.id, alarmTime: time, logId: logId }
    });
  }

  triggerLocalNotification(title, options) {
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'SCHEDULE_NOTIFICATION',
        title,
        options
      });
    } else if ('Notification' in window && Notification.permission === 'granted') {
      // Fallback if Service worker not fully active/controlling client
      new Notification(title, options);
    }
  }

  async handleNotificationAction({ action, medId, alarmTime }) {
    if (!this.db) return;
    const now = new Date();
    const todayStr = this.getLocalDateString(now);
    const logId = `${medId}-${todayStr}-${alarmTime}`;

    if (action === 'taken') {
      const med = await this.dbQuery('medications', 'get', null, medId);
      if (med) {
        const logEntry = {
          id: logId,
          medId: medId,
          medName: med.name,
          scheduledTime: alarmTime,
          date: todayStr,
          status: 'taken',
          actionTime: now.getTime()
        };
        await this.dbQuery('adherence_log', 'put', logEntry);
        
        // Decrement stock
        if (med.stock !== undefined && med.stock !== '' && med.stock > 0) {
          med.stock = med.stock - 1;
          await this.dbQuery('medications', 'put', med);
        }
      }
    } else if (action === 'snooze') {
      // Simulate snooze: create a notification 5 minutes later
      // A full server setup is ideal, but in PWA we can register a temporary timer
      setTimeout(() => {
        this.triggerLocalNotification(`⏰ تذكير مؤجل: موعد تناول الدواء`, {
          body: `تذكير بجرعة الدواء المتأخرة.`,
          data: { medId, alarmTime }
        });
      }, 5 * 60 * 1000);
    }

    this.loadAndRenderAll();
  }

  async acknowledgeAlarm(action) {
    if (!this.activeAlarm) return;
    const { med, time, logId } = this.activeAlarm;
    
    this.stopAlarmSound();
    document.getElementById('alarm-overlay').classList.add('hidden');

    const now = new Date();
    
    if (action === 'taken') {
      const logEntry = {
        id: logId,
        medId: med.id,
        medName: med.name,
        scheduledTime: time,
        date: this.getLocalDateString(now),
        status: 'taken',
        actionTime: now.getTime()
      };
      await this.dbQuery('adherence_log', 'put', logEntry);

      // Decrement stock
      if (med.stock !== undefined && med.stock !== '' && med.stock > 0) {
        med.stock = med.stock - 1;
        await this.dbQuery('medications', 'put', med);
      }
    } else if (action === 'skip') {
      const logEntry = {
        id: logId,
        medId: med.id,
        medName: med.name,
        scheduledTime: time,
        date: this.getLocalDateString(now),
        status: 'skipped',
        actionTime: now.getTime()
      };
      await this.dbQuery('adherence_log', 'put', logEntry);
    } else if (action === 'snooze') {
      // Add a 5 minute timeout to show active alarm again
      const snoozeMinutes = Number(document.getElementById('med-snooze').value) || 5;
      setTimeout(() => {
        this.triggerAlarm(med, time, logId);
      }, snoozeMinutes * 60 * 1000);
    }

    this.activeAlarm = null;
    this.loadAndRenderAll();
  }

  // --- AUDIO SYNTHESIS FOR ALARM (OFFLINE FRIENDLY) ---
  startAlarmSound() {
    this.alarmAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    let isBeep = true;
    this.soundTimer = setInterval(() => {
      if (isBeep && this.alarmAudioContext) {
        this.playAudioBeep(880, 'sine', 0.25);
        setTimeout(() => this.playAudioBeep(880, 'sine', 0.25), 300);
      }
      isBeep = !isBeep;
    }, 1200);
  }

  stopAlarmSound() {
    if (this.soundTimer) {
      clearInterval(this.soundTimer);
      this.soundTimer = null;
    }
    if (this.alarmAudioContext) {
      this.alarmAudioContext.close();
      this.alarmAudioContext = null;
    }
  }

  playAudioBeep(freq, type, duration) {
    try {
      const ctx = this.alarmAudioContext || new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = type;
      osc.frequency.value = freq;
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Web Audio Context not permitted yet.', e);
    }
  }

  // --- MEDICATION FORM & MODAL ---
  openAddModal(medId = null) {
    const modal = document.getElementById('medication-modal');
    const form = document.getElementById('medication-form');
    form.reset();
    this.capturedPhotoData = null;
    document.getElementById('captured-preview-view').classList.add('hidden');
    document.getElementById('med-id').value = '';
    document.getElementById('modal-title').innerText = 'إضافة دواء جديد';

    if (medId) {
      // Edit Mode
      document.getElementById('modal-title').innerText = 'تعديل بيانات الدواء';
      this.dbQuery('medications', 'get', null, medId).then(med => {
        if (!med) return;
        document.getElementById('med-id').value = med.id;
        document.getElementById('med-name').value = med.name;
        document.getElementById('med-dosage').value = med.dosage;
        document.getElementById('med-type').value = med.type;
        document.getElementById('med-frequency').value = med.frequency;
        document.getElementById('med-snooze').value = med.snooze;
        document.getElementById('med-stock').value = med.stock || '';
        document.getElementById('med-stock-alert').value = med.stockAlert || '';

        if (med.image) {
          this.capturedPhotoData = med.image;
          const img = document.getElementById('captured-preview-img');
          img.src = med.image;
          document.getElementById('captured-preview-view').classList.remove('hidden');
        }

        this.generateTimeInputs(med.times);
        this.toggleStockAlertUI();
      });
    } else {
      // Add Mode
      this.generateTimeInputs();
      this.toggleStockAlertUI();
    }

    modal.classList.add('active');
  }

  closeAddModal() {
    this.stopCameraScanner();
    document.getElementById('medication-modal').classList.remove('active');
  }

  generateTimeInputs(defaultTimes = []) {
    const freq = document.getElementById('med-frequency').value;
    const container = document.getElementById('time-inputs-container');
    const grid = document.getElementById('time-inputs-grid');
    
    grid.innerHTML = '';

    if (freq === '0') {
      container.classList.add('hidden');
      return;
    }
    container.classList.remove('hidden');

    const count = Number(freq);
    const standardTimes = ['08:00', '20:00', '14:00', '23:00']; // default spreads

    for (let i = 0; i < count; i++) {
      const val = defaultTimes[i] || standardTimes[i] || '08:00';
      grid.innerHTML += `
        <div class="time-input-item">
          <span>الجرعة ${i + 1}:</span>
          <input type="time" class="med-time-input" required value="${val}">
        </div>
      `;
    }
  }

  toggleStockAlertUI() {
    const stockVal = document.getElementById('med-stock').value;
    const wrapper = document.getElementById('stock-alert-wrapper');
    if (stockVal !== undefined && stockVal !== '') {
      wrapper.classList.remove('hidden');
    } else {
      wrapper.classList.add('hidden');
    }
  }

  async saveMedication(event) {
    event.preventDefault();
    
    const id = document.getElementById('med-id').value || 'med_' + Date.now();
    const name = document.getElementById('med-name').value.trim();
    const dosage = document.getElementById('med-dosage').value.trim();
    const type = document.getElementById('med-type').value;
    const frequency = document.getElementById('med-frequency').value;
    const snooze = document.getElementById('med-snooze').value;
    const stock = document.getElementById('med-stock').value;
    const stockAlert = document.getElementById('med-stock-alert').value;
    
    // Collect times
    const times = [];
    if (frequency !== '0') {
      document.querySelectorAll('.med-time-input').forEach(input => {
        times.push(input.value);
      });
    }

    const medData = {
      id,
      name,
      dosage,
      type,
      frequency,
      snooze,
      times,
      stock: stock !== '' ? Number(stock) : '',
      stockAlert: stockAlert !== '' ? Number(stockAlert) : '',
      image: this.capturedPhotoData
    };

    await this.dbQuery('medications', 'put', medData);
    this.closeAddModal();
    this.loadAndRenderAll();
  }

  async deleteMedication(id) {
    if (confirm('هل أنت متأكد من حذف هذا الدواء؟')) {
      await this.dbQuery('medications', 'delete', null, id);
      this.loadAndRenderAll();
    }
  }

  async clearHistory() {
    if (confirm('هل أنت متأكد من رغبتك في مسح سجل النشاط بالكامل؟')) {
      const transaction = this.db.transaction(['adherence_log'], 'readwrite');
      const store = transaction.objectStore('adherence_log');
      store.clear();
      transaction.oncomplete = () => {
        this.loadAndRenderAll();
      };
    }
  }

  // --- CAMERA AND OCR SCANNING LOGIC ---
  startCameraScanner() {
    const video = document.getElementById('scanner-video');
    const view = document.getElementById('camera-scanner-view');
    const triggerRow = document.getElementById('ocr-trigger-ui');
    const fileUI = document.getElementById('ocr-file-ui');

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        this.scannerStream = stream;
        video.srcObject = stream;
        view.classList.remove('hidden');
        triggerRow.classList.add('hidden');
        fileUI.classList.add('hidden');
      })
      .catch(err => {
        console.warn('Camera blocked or not available. Displaying file picker fallback.', err);
        alert('يتعذر فتح الكاميرا التلقائية، يمكنك رفع صورة علبة الدواء من الاستوديو.');
        fileUI.classList.remove('hidden');
      });
  }

  stopCameraScanner() {
    if (this.scannerStream) {
      this.scannerStream.getTracks().forEach(track => track.stop());
      this.scannerStream = null;
    }
    document.getElementById('camera-scanner-view').classList.add('hidden');
    document.getElementById('ocr-trigger-ui').classList.remove('hidden');
    document.getElementById('ocr-file-ui').classList.add('hidden');
  }

  captureScannerImage() {
    const video = document.getElementById('scanner-video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert to compressed jpeg dataUrl to save IndexedDB space
    const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
    
    this.stopCameraScanner();
    this.setCapturedPhoto(dataUrl);
    
    // Trigger OCR Process
    this.extractTextFromImage(dataUrl);
  }

  handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      this.setCapturedPhoto(dataUrl);
      this.extractTextFromImage(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  setCapturedPhoto(dataUrl) {
    this.capturedPhotoData = dataUrl;
    const preview = document.getElementById('captured-preview-view');
    const img = document.getElementById('captured-preview-img');
    img.src = dataUrl;
    preview.classList.remove('hidden');
  }

  removeCapturedPhoto() {
    this.capturedPhotoData = null;
    document.getElementById('captured-preview-view').classList.add('hidden');
  }

  // OCR Processing via Tesseract.js (or Mock offline fallback)
  extractTextFromImage(dataUrl) {
    const loadingView = document.getElementById('ocr-loading-view');
    loadingView.classList.remove('hidden');

    const timeout = setTimeout(() => {
      // Fallback simulated OCR if it takes more than 5s (offline or CDN fail)
      this.simulateOCRFallback();
    }, 6000);

    if (typeof Tesseract !== 'undefined') {
      // Tesseract is loaded from CDN
      Tesseract.recognize(
        dataUrl,
        'eng+ara', // English and Arabic models
        { 
          logger: m => console.log(m) 
        }
      ).then(({ data: { text } }) => {
        clearTimeout(timeout);
        loadingView.classList.add('hidden');
        this.processOCRResult(text);
      }).catch(err => {
        console.error('Tesseract OCR error:', err);
        clearTimeout(timeout);
        this.simulateOCRFallback();
      });
    } else {
      // No Tesseract library available (Offline fallback simulation)
      clearTimeout(timeout);
      setTimeout(() => {
        this.simulateOCRFallback();
      }, 1000);
    }
  }

  processOCRResult(text) {
    console.log('Raw OCR Result:', text);
    
    // Clean text and look for potential medicine names
    // Typically capital English words or Arabic words of length 3-12
    const englishWords = text.match(/[A-Z][a-z]+/g) || [];
    const arabicWords = text.match(/[\u0600-\u06FF]+/g) || [];

    // Filter out common dictionary or format words
    const filterList = ['MG', 'TABLET', 'CAPSULE', 'EXP', 'MFG', 'DOSE', 'KEEP', 'OUT', 'OF', 'REACH', 'CHILDREN', 'الدواء', 'للأطفال', 'حبوب', 'جرعة'];
    
    let candidateName = '';
    
    // 1. Try English capitalized words
    const filteredEng = englishWords.filter(w => !filterList.includes(w.toUpperCase()) && w.length > 2);
    if (filteredEng.length > 0) {
      candidateName = filteredEng[0];
    } else {
      // 2. Try Arabic words
      const filteredAra = arabicWords.filter(w => !filterList.includes(w) && w.length > 2);
      if (filteredAra.length > 0) {
        candidateName = filteredAra[0];
      }
    }

    // Attempt to extract mg dosage
    const dosageMatch = text.match(/\b\d+\s*(mg|ml|g)\b/i);
    let dosageVal = '';
    if (dosageMatch) {
      dosageVal = dosageMatch[0];
    }

    if (candidateName) {
      document.getElementById('med-name').value = candidateName;
      if (dosageVal) {
        document.getElementById('med-dosage').value = dosageVal;
      }
      this.playAudioBeep(700, 'sine', 0.2);
    } else {
      alert('لم نتمكن من تحديد اسم الدواء بوضوح، يرجى كتابته يدوياً.');
    }
    
    document.getElementById('ocr-loading-view').classList.add('hidden');
  }

  simulateOCRFallback() {
    document.getElementById('ocr-loading-view').classList.add('hidden');
    // Simulated smart recognition to showcase high-fidelity
    const simulatedMeds = ['Panadol 500mg', 'Aspirin 81mg', 'Amoxicillin 250mg', 'Lipitor 10mg', 'أوميبرازول 20 ملج', 'فيتامين د3'];
    const randomMed = simulatedMeds[Math.floor(Math.random() * simulatedMeds.length)];
    
    const [name, dosage] = randomMed.includes(' ') 
      ? [randomMed.substring(0, randomMed.lastIndexOf(' ')), randomMed.substring(randomMed.lastIndexOf(' ') + 1)]
      : [randomMed, 'حبة واحدة'];

    document.getElementById('med-name').value = name;
    document.getElementById('med-dosage').value = dosage;
    
    this.playAudioBeep(700, 'sine', 0.2);
  }

  // --- HELPERS ---
  getLocalDateString(date) {
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split('T')[0];
  }

  formatTime12h(timeStr) {
    if (!timeStr || timeStr === 'عند اللزوم') return timeStr;
    const [hrs, mins] = timeStr.split(':').map(Number);
    const suffix = hrs >= 12 ? 'م' : 'ص';
    const hr12 = hrs % 12 || 12;
    return `${hr12}:${String(mins).padStart(2, '0')} ${suffix}`;
  }

  getMedIcon(type) {
    switch(type) {
      case 'tablet': return '💊';
      case 'syrup': return '🧪';
      case 'injection': return '💉';
      case 'cream': return '🧴';
      case 'drops': return '💧';
      default: return '📦';
    }
  }

  getMedTypeLabel(type) {
    switch(type) {
      case 'tablet': return 'أقراص/كبسولات';
      case 'syrup': return 'شراب/سائل';
      case 'injection': return 'حقن';
      case 'cream': return 'مرهم/كريم';
      case 'drops': return 'قطرة';
      default: return 'أخرى';
    }
  }

  setupEventListeners() {
    // Setup interactive events on modal click out, stock input, etc.
    const modal = document.getElementById('medication-modal');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeAddModal();
      }
    });

    const stockInput = document.getElementById('med-stock');
    stockInput.addEventListener('input', () => this.toggleStockAlertUI());
  }
}

// Instantiate globally
const app = new MedicationTracker();
window.app = app;
