const CACHE_NAME = 'med-tracker-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2921/2921822.png'
];

// Install Event - Caching Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean Up Old Caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Cache First or Network
self.addEventListener('fetch', (e) => {
  // Only handle GET requests and exclude Chrome extensions or external scripts with non-HTTP/S schemes
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache);
        });
        return networkResponse;
      });
    }).catch(() => {
      // Fallback if both cache and network fail (e.g. offline and not cached)
      if (e.request.destination === 'document') {
        return caches.match('./index.html');
      }
    })
  );
});

// Handle Notifications in the background
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, options } = event.data;
    self.registration.showNotification(title, {
      ...options,
      icon: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
      vibrate: [200, 100, 200],
      actions: [
        { action: 'taken', title: 'تم التناول ✅' },
        { action: 'snooze', title: 'تأجيل 5 دقائق ⏳' }
      ]
    });
  }
});

// Handle Notification Actions
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const action = event.action;
  const medId = event.notification.data?.medId;
  const alarmTime = event.notification.data?.alarmTime;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Send message back to all active client windows to update UI/Database
      for (const client of clientList) {
        client.postMessage({
          type: 'NOTIFICATION_ACTION',
          action: action,
          medId: medId,
          alarmTime: alarmTime
        });
      }
      
      // Focus on the client if it's open, or open a new window
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return self.clients.openWindow('./index.html');
    })
  );
});
