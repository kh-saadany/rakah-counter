// Bilingual Dictionary for Localization
const translations = {
  ar: {
    logoText: "عداد الركعات",
    appTitle: "عداد الركعات 4",
    appDesc: "ضع الهاتف على سجادة الصلاة وسيقوم التطبيق بعدّ الركعات تلقائياً باستخدام الكاميرا الأمامية كمستشعر للتقارب والظل.",
    selectPrayer: "اختر عدد الركعات",
    twoRakahs: "ركعتان",
    threeRakahs: "3 ركعات",
    fourRakahs: "4 ركعات",
    step1: "ضع الهاتف أمامك أثناء الصلاة بحيث يكون أسفل صدرك عندما تسجد، وتأكد من عدم وجود ما يعيق الكاميرا الأمامية.",
    step2: "التطبيق سيعمل بشكل أفضل في ظروف الإضاءة الجيدة، وبشكل مقبول في ظروف الإضاءة المنخفضة، ولكنه لن يعمل في ظروف الإضاءة شديدة الانخفاض أو الإظلام.",
    startSetup: "بدء إعداد الكاميرا",
    back: "رجوع",
    calibrating: "إعداد الكاميرا والمعايرة",
    calibratingDesc: "يرجى السماح بالوصول للكاميرا. سنقيس مستوى الإضاءة المحيطة لمعايرة كاشف السجود.",
    measuring: "جارٍ قياس الضوء المحيط...",
    lightLevel: "مستوى الضوء المحيط:",
    darker: "مظلم",
    lighter: "مضيء",
    recalibrate: "إعادة المعايرة",
    startPrayer: "ابدأ الصلاة الآن",
    currentRakah: "الركعة الحالية",
    sajdah1: "السجدة الأولى",
    sajdah2: "السجدة الثانية",
    standClose: "اسجد فوق موضع الهاتف ليتم الاستشعار",
    holdToExit: "اضغط مطولاً للإنهاء",
    accept: "تقبل الله",
    acceptDesc: "الحمد لله الذي بنعمته تتم الصالحات.",
    totalRakahs: "عدد الركعات",
    duration: "مدة الصلاة",
    tasbeehTitle: "الأذكار والتسبيح",
    reset: "إعادة ضبط",
    subhanallah: "سُبْحَانَ اللَّه",
    alhamdulillah: "الْحَمْدُ لِلَّه",
    allahuakbar: "اللَّهُ أَكْبَر",
    lailahaillallah: "لَا إِلٰهَ إِلَّا اللَّهُ",
    tapToCount: "اضغط هنا للتسبيح",
    backHome: "العودة للرئيسية",
    rakahNames: {
      1: "الركعة الأولى",
      2: "الركعة الثانية",
      3: "الركعة الثالثة",
      4: "الركعة الرابعة",
      default: "الركعة "
    },
    toastPermissionDenied: "تم رفض صلاحية الكاميرا. يرجى تفعيلها من إعدادات المتصفح.",
    toastDarkRoom: "الإضاءة خافتة جداً! يرجى إضاءة المكان ليعمل كاشف الظل بكفاءة.",
    toastCalibrated: "تمت المعايرة بنجاح! التطبيق جاهز لبدء الصلاة.",
    toastExitCancelled: "تم إلغاء الخروج.",
    btnPrev: "السابق",
    btnSkip: "تخطي",
    directAthkar: "📿 أذكار ما بعد الصلاة",
    btnShowAthkar: "📿 أذكار ما بعد الصلاة",
    middleTashahhud: "التشهد الأوسط",
    tashahhudDesc: "جلسة التشهد الأوسط بعد الركعة الثانية.",
    seconds: "ثانية",
    logTitle: "📊 سجل حركة الصلاة (بيانات الاستشعار)",
    logTime: "الوقت (ث)",
    logMovement: "الحركة",
    logBrightness: "السطوع",
    logBaseline: "المعيار",
    btnCopyCSV: "📋 نسخ CSV",
    btnShare: "📤 مشاركة",
    sensorLightMode: "💡 مستشعر الضوء الفيزيائي",
    sensorProximityMode: "📶 مستشعر التقارب الفيزيائي",
    finalTashahhud: "التشهد الأخير",
    finalTashahhudDesc: "جلسة التشهد الأخير في نهاية الصلاة.",
    startAthkar: "البدء في الأذكار",
    telemetryTitle: "سجل بيانات الاستضاءة والحساسات",
    viewTelemetry: "سجل قياسات الاستضاءة",
    copyCSV: "📋 نسخ CSV",
    copyText: "📝 نسخ تقرير نصي",
    clearLogs: "🗑️ مسح السجل",
    clearLogsConfirm: "هل أنت متأكد من مسح جميع بيانات الصلوات المسجلة؟ لن يمكن استرجاعها.",
    close: "إغلاق",
    settingsTitle: "الإعدادات",
    proxThresholdLabel: "عتبة التحويل لمستشعر القرب:",
    proxThresholdHint: "إذا كان معيار الإضاءة أقل من هذه القيمة في بداية الركعة، يعتمد التطبيق على مستشعر التقارب الفيزيائي.",
    exitAppConfirm: "هل تود الخروج من التطبيق تماماً؟",
    toastProxThresholdUpdated: "تم تحديث عتبة مستشعر القرب إلى:"
  },
  en: {
    logoText: "Rakah Counter",
    appTitle: "Rakah Counter 4",
    appDesc: "Place your phone on the prayer mat. The app will automatically count your Rakahs using the front camera to detect shadows and proximity.",
    selectPrayer: "Select Rakah Count",
    twoRakahs: "2 Rakahs",
    threeRakahs: "3 Rakahs",
    fourRakahs: "4 Rakahs",
    step1: "Place the phone in front of you during prayer so that it is under your chest when you prostrate, and make sure there is nothing blocking the front camera.",
    step2: "The app works best in good light, acceptably in low light, but it won't work in very low light or darkness.",
    startSetup: "Start Camera Setup",
    back: "Back",
    calibrating: "Camera Setup & Calibration",
    calibratingDesc: "Please grant camera access. We will measure ambient light levels to calibrate the Sujud detector.",
    measuring: "Measuring ambient light...",
    lightLevel: "Ambient Light Level:",
    darker: "Dark",
    lighter: "Bright",
    recalibrate: "Recalibrate",
    startPrayer: "Begin Prayer",
    currentRakah: "Current Rakah",
    sajdah1: "First Sajdah",
    sajdah2: "Second Sajdah",
    standClose: "Bow over the phone to trigger the sensor",
    holdToExit: "Hold to Exit",
    accept: "May Allah Accept",
    acceptDesc: "Praise be to Allah, by Whose Grace good deeds are completed.",
    totalRakahs: "Completed Rakahs",
    duration: "Prayer Duration",
    tasbeehTitle: "Athkar & Tasbeeh",
    reset: "Reset",
    subhanallah: "Subhan Allah",
    alhamdulillah: "Alhamdulillah",
    allahuakbar: "Allahu Akbar",
    lailahaillallah: "La ilaha illa Allah",
    tapToCount: "Tap here to count",
    backHome: "Back to Home",
    rakahNames: {
      1: "First Rakah",
      2: "Second Rakah",
      3: "Third Rakah",
      4: "Fourth Rakah",
      default: "Rakah "
    },
    toastPermissionDenied: "Camera permission denied. Please enable it in browser settings.",
    toastDarkRoom: "Ambient light is too low! Please turn on a light for better accuracy.",
    toastCalibrated: "Calibration completed! Ready to start.",
    toastExitCancelled: "Exit cancelled.",
    btnPrev: "Previous",
    btnSkip: "Skip",
    directAthkar: "📿 Post-Prayer Athkar",
    btnShowAthkar: "📿 Post-Prayer Athkar",
    middleTashahhud: "Middle Tashahhud",
    tashahhudDesc: "Sitting for Tashahhud after the second Rakah.",
    seconds: "seconds",
    logTitle: "📊 Prayer Movement Log (Sensor Data)",
    logTime: "Time (s)",
    logMovement: "Movement",
    logBrightness: "Brightness",
    logBaseline: "Baseline",
    btnCopyCSV: "📋 Copy CSV",
    btnShare: "📤 Share",
    sensorLightMode: "💡 Physical Light Sensor",
    sensorProximityMode: "📶 Physical Proximity Sensor",
    finalTashahhud: "Final Tashahhud",
    finalTashahhudDesc: "Sitting for the Final Tashahhud.",
    startAthkar: "Start Athkar",
    telemetryTitle: "Sensor & Light Telemetry Log",
    viewTelemetry: "View Prayer Telemetry",
    copyCSV: "📋 Copy CSV",
    copyText: "📝 Copy Text Report",
    clearLogs: "🗑️ Clear Logs",
    clearLogsConfirm: "Are you sure you want to clear all recorded telemetry? This cannot be undone.",
    close: "Close",
    settingsTitle: "Settings",
    proxThresholdLabel: "Proximity Switch Threshold:",
    proxThresholdHint: "If baseline ambient light is lower than this value, proximity sensor is used.",
    exitAppConfirm: "Do you want to exit the app completely?",
    toastProxThresholdUpdated: "Proximity switch threshold updated to:"
  }
};

// Global App State
let currentLang = localStorage.getItem("rakah_lang") || "ar";
let selectedPrayer = "rakah-2";
let targetRakahs = 2;
let latestBridgeValue = null; // Sensor reading from AndroidBridge (lux)
let latestProximityValue = null; // Proximity reading (cm)
let proximityMaxRange = 5.0; // Max range of proximity sensor
let isUsingProximitySensor = false; // Mode set dynamically after calibration
let proximitySwitchLuxThreshold = parseFloat(localStorage.getItem("rakah_prox_lux_threshold")) || 3.0;

window.onSensorData = function(lux) {
  latestBridgeValue = lux;
};

window.onProximityData = function(distance, maxRange) {
  latestProximityValue = distance;
  if (maxRange) {
    proximityMaxRange = maxRange;
  }
};

// Detection Parameters
let videoStream = null;
let brightnessInterval = null;
let currentBrightness = { center: 0, periphery: 0, average: 0 };
let ambientBrightness = { center: 0, periphery: 0, average: 0 }; // Baseline calibrated brightness
let shadowThreshold = 0; // Value below which Sujud is confirmed (35% of ambient average)
let recoveryThreshold = 0; // Value above which rise is confirmed (80% of ambient average)
let contrastThreshold = 0; // Minimum difference between periphery and center to confirm approach/exit
let isLowLightMode = false; // Mode set dynamically based on baseline ambient light (<= 25%)
let detectionState = "IDLE"; // IDLE, DOWN_PENDING, IN_SUDJUD, UP_PENDING
let stateStartTime = 0; // For debounce timers

// Debounce & Cooldown Constants (ms)
const CONFIRM_DOWN_TIME = 700; // Time brightness must stay dark to confirm Sujud (increased for low-light filtering)
const CONFIRM_UP_TIME = 700; // Time brightness must stay light to confirm Stand/Sit
const SUJUD_COOLDOWN = 3500; // Cooldown after a Sajdah is counted before detecting next
let lastSajdahTime = 0;

// Active Prayer State
let currentRakah = 1;
let currentSajdahCount = 0; // 0, 1, or 2 in current Rakah
let prayerTimer = null;
let prayerDurationSeconds = 0;
let wakeLock = null;
// Cumulative Telemetry State (Persisted across sessions & reboots via LocalStorage)
const TELEMETRY_STORAGE_KEY = "rakah_telemetry_logs_v2";
let cumulativeTelemetry = [];
let activeSession = null;
let currentSujudDownTimestamp = 0;
let currentSujudDownLight = 0;
let minLightDuringCurrentSujud = null;
let currentSujudProximityDown = null;

// Tasbeeh State
const tasbeehPhrases = ["subhanallah", "alhamdulillah", "allahuakbar", "lailahaillallah"];
let currentTasbeehIndex = 0;
let tasbeehCount = 0;

// Athkar Sequence State
let currentThikrIndex = 0;
let thikrCount = 0;
let isDirectAthkarMode = false; // True if the user goes straight to Athkar from home screen

const athkarList = [
  { text: "أَسْتَغْفِرُ اللَّه", enText: "Astaghfirullah (I seek Allah's forgiveness)", target: 3 },
  { text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ", enText: "Allahumma antas-salamu wa minkas-salamu, tabarakta thal-jalali wal-ikram", target: 1 },
  { text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ", enText: "Allahumma a'inni 'ala thikrika wa shukrika wa husni 'ibadatik", target: 1 },
  { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ، وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ، وَلهُ الثَّناءُ الْحَسَنُ، لَا إِلَهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", enText: "La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa huwa 'ala kulli shay'in qadir. La hawla wa la quwwata illa billah... O Allah, none can prevent what You have willed to give and none can give what You have willed to prevent, and no wealth or majesty can benefit anyone against Your Will.", target: 1 },
  { text: "سُبْحَانَ اللَّه", enText: "Subhan Allah (Glory be to Allah)", target: 33 },
  { text: "الْحَمْدُ لِلَّه", enText: "Alhamdulillah (Praise be to Allah)", target: 33 },
  { text: "اللَّهُ أَكْبَر", enText: "Allahu Akbar (Allah is the Greatest)", target: 33 },
  { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", enText: "La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa huwa 'ala kulli shay'in qadir", target: 1 },
  { text: "آية الكرسي: اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ", enText: "Ayat al-Kursi (The Throne Verse - Surah Al-Baqarah, 255)", target: 1 },
  { text: "سورة الإخلاص: قُلْ هُوَ اللَّهُ أَحَدٌ (1) اللَّهُ الصَّمَدُ (2) لَمْ يَلِدْ وَلَمْ يُولَدْ (3) وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ (4)", enText: "Surah Al-Ikhlas", target: 1 },
  { text: "سورة الفلق: قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِنْ شَرِّ مَا خَلَقَ (2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)", enText: "Surah Al-Falaq", target: 1 },
  { text: "سورة الناس: قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)", enText: "Surah Al-Nas", target: 1 }
];

// Hold to Exit Progress variables
let holdTimer = null;
let holdInterval = null;
let holdProgress = 0;
const HOLD_DURATION = 1500; // 1.5 seconds holding

// Middle Tashahhud Timer variables
let tashahhudTimer = null;
let tashahhudTimeLeft = 30;

// Final Tashahhud Timer variables
let finalTashahhudTimer = null;
let finalTashahhudTimeLeft = 30;

// Calibration and Prep States
let phaseTimer = null;
let isCalibrating = false;
let isPreparing = false;
let brightnessHistory = []; // Tracks historical samples for rate of change (Delta)
let isExposureLocked = false;
let aeStatusText = "Inactive"; // Inactive, Active, Unsupported, Failed, Error
let lockRequestTime = 0; // Tracks when locking was requested to enforce a timeout check

// DOM Elements
const elements = {
  btnLang: document.getElementById("btn-lang"),
  langText: document.getElementById("lang-text"),
  btnStart: document.getElementById("btn-start"),
  btnDirectAthkar: document.getElementById("btn-direct-athkar"),
  btnShowAthkar: document.getElementById("btn-show-athkar"),
  btnPrevThikr: document.getElementById("btn-prev-thikr"),
  btnSkipThikr: document.getElementById("btn-skip-thikr"),
  btnTapAthkar: document.getElementById("btn-tap-athkar"),
  btnBackHome: document.getElementById("btn-back-home"),
  btnPausePrayer: document.getElementById("btn-pause-prayer"),
  btnResetTasbeeh: document.getElementById("btn-reset-tasbeeh"),
  btnTapTasbeeh: document.getElementById("btn-tap-tasbeeh"),
  
  viewHome: document.getElementById("view-home"),
  viewPrayer: document.getElementById("view-prayer"),
  viewAthkar: document.getElementById("view-athkar"),
  viewCompleted: document.getElementById("view-completed"),
  
  videoPreview: document.getElementById("video-preview"),
  canvasProcessing: document.getElementById("canvas-processing"),
  
  activePrayerName: document.getElementById("active-prayer-name"),
  sensorBadge: document.getElementById("active-sensor-badge"),
  prayerTimer: document.getElementById("prayer-timer"),
  rakahNumber: document.getElementById("rakah-number"),
  rakahName: document.getElementById("rakah-name"),
  sujudStep1: document.getElementById("sujud-step-1"),
  sujudStep2: document.getElementById("sujud-step-2"),
  sujudOverlay: document.getElementById("sujud-overlay"),
  
  summaryRakahs: document.getElementById("summary-rakahs"),
  summaryDuration: document.getElementById("summary-duration"),
  statsCardCompleted: document.querySelector(".stats-card-completed"),
  tasbeehText: document.getElementById("tasbeeh-text"),
  tasbeehCountDisp: document.getElementById("tasbeeh-count"),
  
  holdProgress: document.getElementById("hold-progress"),
  toastContainer: document.getElementById("toast-container"),
  tashahhudOverlay: document.getElementById("tashahhud-overlay"),
  tashahhudCountdown: document.getElementById("tashahhud-countdown"),
  btnSkipTashahhud: document.getElementById("btn-skip-tashahhud"),
  finalTashahhudOverlay: document.getElementById("final-tashahhud-overlay"),
  finalTashahhudCountdown: document.getElementById("final-tashahhud-countdown"),
  btnSkipFinalTashahhud: document.getElementById("btn-skip-final-tashahhud"),
  btnCompletedStartAthkar: document.getElementById("btn-completed-start-athkar"),
  btnAthkarBackHome: document.getElementById("btn-athkar-back-home"),

  // Settings & App Controls
  btnSettings: document.getElementById("btn-settings"),
  btnExitApp: document.getElementById("btn-exit-app"),
  settingsModal: document.getElementById("settings-modal"),
  btnCloseSettings: document.getElementById("btn-close-settings"),
  btnSettingsDone: document.getElementById("btn-settings-done"),
  proxSlider: document.getElementById("prox-slider"),
  proxValBadge: document.getElementById("prox-val-badge"),

  // Debug panel elements
  dbgCurrent: document.getElementById("dbg-current"),
  dbgThreshold: document.getElementById("dbg-threshold"),
  dbgState: document.getElementById("dbg-state"),
  dbgBar: document.getElementById("dbg-bar"),
  dbgAelock: document.getElementById("dbg-aelock")
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initializeDefaultRakahs();
  setLanguage(currentLang);
  setupEventHandlers();
});

// Set default Rakahs count based on the current prayer time of day, taking DST into account
function initializeDefaultRakahs() {
  const today = new Date();
  const hour = today.getHours();
  
  // Detect if Daylight Saving Time (DST) is active
  const jan = new Date(today.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(today.getFullYear(), 6, 1).getTimezoneOffset();
  const isDST = today.getTimezoneOffset() < Math.max(jan, jul);
  
  let defaultRakahs = 2;
  
  if (isDST) {
    // Summer DST: 2 Rakahs from 1:00 AM to 1:00 PM
    if (hour >= 1 && hour < 13) {
      defaultRakahs = 2;   // Fajr / Morning / Duha (2 Rakahs)
    } else if (hour >= 13 && hour < 18) {
      defaultRakahs = 4;   // Dhuhr / Asr (4 Rakahs)
    } else if (hour >= 18 && hour < 21) { // 6:00 PM to 8:59 PM (Sunset shifted)
      defaultRakahs = 3;   // Maghrib (3 Rakahs)
    } else {
      defaultRakahs = 4;   // Isha / Night (4 Rakahs)
    }
  } else {
    // Standard Time: 2 Rakahs from 12:00 AM (midnight) to 12:00 PM (noon)
    if (hour >= 0 && hour < 12) {
      defaultRakahs = 2;   // Fajr / Morning / Duha (2 Rakahs)
    } else if (hour >= 12 && hour < 17) {
      defaultRakahs = 4;   // Dhuhr / Asr (4 Rakahs)
    } else if (hour >= 17 && hour < 20) { // 5:00 PM to 7:59 PM
      defaultRakahs = 3;   // Maghrib (3 Rakahs)
    } else {
      defaultRakahs = 4;   // Isha / Night (4 Rakahs)
    }
  }
  
  document.querySelectorAll(".btn-prayer").forEach(btn => {
    const btnRakahs = parseInt(btn.getAttribute("data-rakahs"));
    if (btnRakahs === defaultRakahs) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  targetRakahs = defaultRakahs;
  selectedPrayer = `rakah-${defaultRakahs}`;
}

// --- Translation & Language Switcher ---
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("rakah_lang", lang);
  
  // Set HTML direction and lang attributes
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
  // Toggle button text
  elements.langText.textContent = lang === "ar" ? "EN" : "عربي";
  
  // Translate elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Keep state visual indicators (e.g. active prayer translation name)
  updatePrayerSelectionUI();
  updateRakahDisplay();
  if (elements.telemetryModal && !elements.telemetryModal.classList.contains("hidden")) {
    renderTelemetryList();
  }
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type === "error" ? "toast-error" : ""}`;
  toast.textContent = message;
  elements.toastContainer.appendChild(toast);
  
  // Remove toast after animation completes
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// --- Event Handlers Setup ---
function setupEventHandlers() {
  // Lang Toggle
  elements.btnLang.addEventListener("click", () => {
    setLanguage(currentLang === "ar" ? "en" : "ar");
  });

  // Prayer Buttons selection
  document.querySelectorAll(".btn-prayer").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-prayer").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      selectedPrayer = btn.getAttribute("data-name");
      targetRakahs = parseInt(btn.getAttribute("data-rakahs"));
      
      // Trigger a light tactile vibration on select
      triggerVibration(40);
    });
  });

  // Home to Active Prayer directly
  elements.btnStart.addEventListener("click", async () => {
    const success = await startCameraForPrayer();
    if (success) {
      switchView("view-prayer");
      startPrayer();
    }
  });

  // Completion to Home
  elements.btnBackHome.addEventListener("click", () => {
    switchView("view-home");
  });

  // Tasbeeh Buttons
  elements.btnTapTasbeeh.addEventListener("click", () => {
    incrementTasbeeh();
  });
  elements.btnResetTasbeeh.addEventListener("click", (e) => {
    e.stopPropagation();
    resetTasbeeh();
  });

  // Long-press exit interactions (Touch and Mouse)
  const exitButton = elements.btnPausePrayer;
  
  const startHold = (e) => {
    e.preventDefault();
    holdProgress = 0;
    elements.holdProgress.style.width = "0%";
    
    // Tactile start signal
    triggerVibration(30);

    holdInterval = setInterval(() => {
      holdProgress += 50;
      const percent = Math.min((holdProgress / HOLD_DURATION) * 100, 100);
      elements.holdProgress.style.width = `${percent}%`;
    }, 50);

    holdTimer = setTimeout(() => {
      endHold();
      exitPrayer(true); // exit with pause/stop
    }, HOLD_DURATION);
  };

  const cancelHold = () => {
    if (holdTimer) {
      clearTimeout(holdTimer);
      clearInterval(holdInterval);
      holdTimer = null;
      holdInterval = null;
      elements.holdProgress.style.width = "0%";
      showToast(translations[currentLang].toastExitCancelled, "info");
      triggerVibration(40); // quick shake
    }
  };

  const endHold = () => {
    if (holdTimer) {
      clearTimeout(holdTimer);
      clearInterval(holdInterval);
      holdTimer = null;
      holdInterval = null;
      elements.holdProgress.style.width = "0%";
    }
  };

  // Direct Athkar Button from Home screen
  if (elements.btnDirectAthkar) {
    elements.btnDirectAthkar.addEventListener("click", () => {
      isDirectAthkarMode = true;
      startAthkarFlow();
    });
  }

  // Athkar Button from Prayer Completion screen (active prayer view show athkar)
  if (elements.btnShowAthkar) {
    elements.btnShowAthkar.addEventListener("click", () => {
      isDirectAthkarMode = false;
      startAthkarFlow();
    });
  }

  // Athkar Tap Area
  if (elements.btnTapAthkar) {
    elements.btnTapAthkar.addEventListener("click", () => {
      handleThikrTap();
    });
  }

  // Athkar Previous Button
  if (elements.btnPrevThikr) {
    elements.btnPrevThikr.addEventListener("click", () => {
      prevThikr();
    });
  }

  // Athkar Skip Button
  if (elements.btnSkipThikr) {
    elements.btnSkipThikr.addEventListener("click", () => {
      nextThikr();
    });
  }

  // Skip Tashahhud Button
  if (elements.btnSkipTashahhud) {
    elements.btnSkipTashahhud.addEventListener("click", () => {
      endTashahhud();
    });
  }

  // Skip Final Tashahhud Button
  if (elements.btnSkipFinalTashahhud) {
    elements.btnSkipFinalTashahhud.addEventListener("click", () => {
      endFinalTashahhud();
    });
  }

  // Completed Screen Start Athkar Button
  if (elements.btnCompletedStartAthkar) {
    elements.btnCompletedStartAthkar.addEventListener("click", () => {
      isDirectAthkarMode = false;
      startAthkarFlow();
    });
  }

  // Athkar Back to Home Button
  if (elements.btnAthkarBackHome) {
    elements.btnAthkarBackHome.addEventListener("click", () => {
      exitPrayer(true);
    });
  }

  // Telemetry Modal Triggers & Actions
  // Exit App button (exits process completely in Android, window.close in browser)
  if (elements.btnExitApp) {
    elements.btnExitApp.addEventListener("click", () => {
      exitEntireApp();
    });
  }

  // Settings Modal triggers and slider binding
  if (elements.btnSettings) {
    elements.btnSettings.addEventListener("click", () => {
      openSettingsModal();
    });
  }

  if (elements.btnCloseSettings) {
    elements.btnCloseSettings.addEventListener("click", () => {
      closeSettingsModal();
    });
  }

  if (elements.btnSettingsDone) {
    elements.btnSettingsDone.addEventListener("click", () => {
      closeSettingsModal();
    });
  }

  if (elements.proxSlider) {
    elements.proxSlider.value = proximitySwitchLuxThreshold;
    if (elements.proxValBadge) {
      elements.proxValBadge.textContent = `${proximitySwitchLuxThreshold.toFixed(1)} Lux`;
    }
    elements.proxSlider.addEventListener("input", (e) => {
      let val = parseFloat(e.target.value);
      if (isNaN(val) || val < 0) val = 3.0;
      proximitySwitchLuxThreshold = val;
      if (elements.proxValBadge) {
        elements.proxValBadge.textContent = `${val.toFixed(1)} Lux`;
      }
      localStorage.setItem("rakah_prox_lux_threshold", val.toString());
    });
  }

  exitButton.addEventListener("mousedown", startHold);
  exitButton.addEventListener("mouseup", cancelHold);
  exitButton.addEventListener("mouseleave", cancelHold);
  
  exitButton.addEventListener("touchstart", startHold, { passive: false });
  exitButton.addEventListener("touchend", cancelHold, { passive: false });
  exitButton.addEventListener("touchcancel", cancelHold, { passive: false });
}

// Helper to update active prayer selection
function updatePrayerSelectionUI() {
  const activeBtn = document.querySelector(".btn-prayer.active");
  if (activeBtn) {
    selectedPrayer = activeBtn.getAttribute("data-name");
    targetRakahs = parseInt(activeBtn.getAttribute("data-rakahs"));
  }
}

// Switch between full views
function switchView(viewId) {
  document.querySelectorAll(".app-view").forEach(v => v.classList.remove("active"));
  const viewEl = document.getElementById(viewId);
  if (viewEl) {
    viewEl.classList.add("active");
  }
  triggerVibration(50);
}

// Tactile Feedback wrapper
function triggerVibration(pattern) {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

// --- Screen Wake Lock Handler ---
async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Screen Wake Lock activated.");
    }
  } catch (err) {
    console.warn(`Wake Lock request failed: ${err.name}, ${err.message}`);
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release();
    wakeLock = null;
    console.log("Screen Wake Lock released.");
  }
}

// Listen to screen visibility changes to restore Wake Lock if phone goes to background
document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible") {
    await requestWakeLock();
  }
});

// --- Camera Access and Shadow Detection logic ---
async function startCameraForPrayer() {
  stopCamera();
  
  // If running inside Android WebView with the bridge active
  if (typeof AndroidBridge !== "undefined") {
    try {
      const result = AndroidBridge.startSensing();
      console.log("AndroidBridge startSensing result:", result);
      
      // Show and update the active sensor badge
      if (elements.sensorBadge) {
        elements.sensorBadge.textContent = translations[currentLang].sensorLightMode;
        elements.sensorBadge.style.display = "inline-flex";
      }
      
      startLuminanceMonitoring();
      return true;
    } catch (err) {
      console.error("AndroidBridge starting light sensor failed", err);
      return false;
    }
  }
  
  try {
    const constraints = {
      video: {
        facingMode: "user",
        width: { ideal: 160 },
        height: { ideal: 120 }
      },
      audio: false
    };
    
    videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    elements.videoPreview.srcObject = videoStream;
    
    // Start continuous stream monitoring
    startLuminanceMonitoring();
    return true;
  } catch (err) {
    console.error("Camera access failed", err);
    showToast(translations[currentLang].toastPermissionDenied, "error");
    return false;
  }
}

function stopCamera() {
  if (typeof AndroidBridge !== "undefined") {
    try {
      AndroidBridge.stopSensing();
    } catch (err) {
      console.error("AndroidBridge stopSensing failed", err);
    }
    if (elements.sensorBadge) {
      elements.sensorBadge.style.display = "none";
    }
  }
  
  if (brightnessInterval) {
    clearInterval(brightnessInterval);
    brightnessInterval = null;
  }
  if (phaseTimer) {
    clearInterval(phaseTimer);
    phaseTimer = null;
  }
  if (videoStream) {
    videoStream.getTracks().forEach(track => track.stop());
    videoStream = null;
    elements.videoPreview.srcObject = null;
  }
}

function getFrameLuminance() {
  if (typeof AndroidBridge !== "undefined") {
    const val = latestBridgeValue !== null ? latestBridgeValue : 100.0;
    return { center: val, periphery: val, average: val };
  }

  if (!videoStream || !elements.videoPreview.videoWidth) {
    return { center: 0, periphery: 0, average: 0 };
  }
  
  const width = elements.canvasProcessing.width; // 16
  const height = elements.canvasProcessing.height; // 12
  const ctx = elements.canvasProcessing.getContext("2d");
  
  // Draw current frame to hidden small canvas
  ctx.drawImage(elements.videoPreview, 0, 0, width, height);
  
  // Read pixel values
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  
  let centerSum = 0;
  let peripherySum = 0;
  let centerCount = 0;
  let peripheryCount = 0;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // Calculate luminance percentage (0 to 100)
      const luminance = ((0.299 * r + 0.587 * g + 0.114 * b) / 255) * 100;
      
      // Center zone for 16x12 grid: columns 4-11, rows 3-8
      if (x >= 4 && x <= 11 && y >= 3 && y <= 8) {
        centerSum += luminance;
        centerCount++;
      } else {
        peripherySum += luminance;
        peripheryCount++;
      }
    }
  }
  
  const centerAvg = centerCount > 0 ? centerSum / centerCount : 0;
  const peripheryAvg = peripheryCount > 0 ? peripherySum / peripheryCount : 0;
  const overallAvg = (centerSum + peripherySum) / (width * height);
  
  return {
    center: centerAvg,
    periphery: peripheryAvg,
    average: overallAvg
  };
}

async function lockCameraExposure() {
  if (typeof AndroidBridge !== "undefined") {
    aeStatusText = "N/A (Physical Sensor)";
    return;
  }
  if (!videoStream) {
    aeStatusText = "No Stream";
    return;
  }
  
  const tracks = videoStream.getVideoTracks();
  if (tracks.length === 0) {
    aeStatusText = "No Track";
    return;
  }
  
  const track = tracks[0];
  
  try {
    const capabilities = track.getCapabilities ? track.getCapabilities() : {};
    console.log("Camera capabilities:", capabilities);
    
    if (capabilities.exposureMode && capabilities.exposureMode.includes("manual")) {
      await track.applyConstraints({
        advanced: [{ exposureMode: "manual" }]
      });
      
      // We requested the lock; we will verify settings in the monitoring loop
      isExposureLocked = true;
      lockRequestTime = Date.now();
      aeStatusText = "Pending Lock";
      console.log("Auto-exposure lock requested...");
    } else {
      isExposureLocked = false;
      aeStatusText = "Unsupported";
      console.log("Manual exposure mode is not supported on this device/browser.");
    }
  } catch (err) {
    isExposureLocked = false;
    aeStatusText = "Error";
    console.error("Error attempting to lock camera exposure:", err);
  }
}

async function unlockCameraExposure() {
  if (typeof AndroidBridge !== "undefined") {
    isExposureLocked = false;
    aeStatusText = "Inactive";
    return;
  }
  if (!videoStream) return;
  const tracks = videoStream.getVideoTracks();
  if (tracks.length === 0) return;
  const track = tracks[0];
  
  try {
    const capabilities = track.getCapabilities ? track.getCapabilities() : {};
    if (capabilities.exposureMode && capabilities.exposureMode.includes("continuous")) {
      await track.applyConstraints({
        advanced: [{ exposureMode: "continuous" }]
      });
      isExposureLocked = false;
      aeStatusText = "Inactive";
      console.log("Auto-exposure unlocked (continuous).");
    }
  } catch (err) {
    console.warn("Error unlocking exposure:", err);
  }
}

function runRakahCalibration(rakah) {
  if (phaseTimer) clearInterval(phaseTimer);
  
  // Reset proximity mode during calibration phase (returns to default white color)
  isUsingProximitySensor = false;
  if (elements.rakahNumber) {
    elements.rakahNumber.classList.remove("proximity-mode");
  }
  if (elements.sensorBadge) {
    // Keep it as light sensor or hidden by default during calibration
    elements.sensorBadge.textContent = translations[currentLang].sensorLightMode;
  }
  
  isCalibrating = false;
  isPreparing = false;
  detectionState = "CALIBRATING";

  if (rakah === 1) {
    // Phase 1: Preparation (5 seconds)
    // Exposure is unlocked (continuous) to let the camera adapt to the room light
    unlockCameraExposure();
    isPreparing = true;
    let prepSecondsLeft = 5;
    
    updatePrepUI(prepSecondsLeft);
    
    phaseTimer = setInterval(async () => {
      prepSecondsLeft--;
      if (prepSecondsLeft > 0) {
        updatePrepUI(prepSecondsLeft);
      } else {
        clearInterval(phaseTimer);
        isPreparing = false;
        
        // Lock exposure right BEFORE calibration starts
        await lockCameraExposure();
        
        // Start 7-second calibration sensing with locked exposure
        startCalibrationSensing(rakah);
      }
    }, 1000);
  } else {
    // For Rakah > 1, the user just stood up.
    // We unlock the exposure and wait 1.5 seconds for the camera to adjust to the standing light level.
    unlockCameraExposure();
    isPreparing = true;
    
    updatePrepUI(2); // Show a brief prepare message
    
    setTimeout(async () => {
      isPreparing = false;
      
      // Lock exposure right BEFORE calibration starts
      await lockCameraExposure();
      
      // Start 7-second calibration sensing with locked exposure
      startCalibrationSensing(rakah);
    }, 1500);
  }
}

function updatePrepUI(seconds) {
  let stepLabel = document.getElementById("prayer-status-tip");
  if (!stepLabel) return;
  if (currentLang === "ar") {
    stepLabel.innerHTML = `استعد للصلاة... يرجى الوقوف بشكل مستقيم (المتبقي: <span style="color:#D4AF37;font-weight:bold;">${seconds}</span> ثانية)`;
  } else {
    stepLabel.innerHTML = `Get ready to pray... Please stand straight (Remaining: <span style="color:#D4AF37;font-weight:bold;">${seconds}</span>s)`;
  }
}

function startCalibrationSensing(rakah) {
  isCalibrating = true;
  let calibSecondsLeft = 7;
  let samples = [];
  
  // Sample every 200ms
  let sampleInterval = setInterval(() => {
    if (isCalibrating) {
      const current = getFrameLuminance();
      samples.push(current);
    }
  }, 200);
  
  updateCalibUI(rakah, calibSecondsLeft);
  
  phaseTimer = setInterval(() => {
    calibSecondsLeft--;
    if (calibSecondsLeft > 0) {
      updateCalibUI(rakah, calibSecondsLeft);
    } else {
      clearInterval(phaseTimer);
      clearInterval(sampleInterval);
      
      // Calculate calibration results using Trimmed Mean (dropping 10 lowest and 10 highest samples)
      if (samples.length === 0) {
        samples.push(getFrameLuminance() || { center: 50, periphery: 50, average: 50 });
      }
      
      // Sort copies of samples for each metric to compute their independent trimmed mean
      const sortedCenter = [...samples].sort((a, b) => a.center - b.center);
      const sortedPeriphery = [...samples].sort((a, b) => a.periphery - b.periphery);
      const sortedAverage = [...samples].sort((a, b) => a.average - b.average);
      
      const totalCount = samples.length;
      let trimCount = 10;
      if (totalCount < 21) {
        trimCount = Math.floor(totalCount * 0.28); // Drop roughly 28% from each side if sample size is small
      }
      
      const centerRemaining = sortedCenter.slice(trimCount, totalCount - trimCount);
      const peripheryRemaining = sortedPeriphery.slice(trimCount, totalCount - trimCount);
      const averageRemaining = sortedAverage.slice(trimCount, totalCount - trimCount);
      
      const centerAvg = centerRemaining.reduce((a, b) => a + b.center, 0) / centerRemaining.length;
      const peripheryAvg = peripheryRemaining.reduce((a, b) => a + b.periphery, 0) / peripheryRemaining.length;
      const overallAvg = averageRemaining.reduce((a, b) => a + b.average, 0) / averageRemaining.length;
      
      ambientBrightness = {
        center: centerAvg,
        periphery: peripheryAvg,
        average: overallAvg
      };
      
      shadowThreshold = ambientBrightness.average * 0.35;
      recoveryThreshold = ambientBrightness.average * 0.80;
      // Make contrast threshold much more lenient (e.g. 4% of ambient or absolute 3% difference, whichever is larger)
      contrastThreshold = Math.max(3.0, ambientBrightness.average * 0.04);
      
      // Determine mode based on ambient brightness (Low Light fallback if <= 25%)
      isLowLightMode = ambientBrightness.average <= 25.0;
      
      // Dynamic Proximity Mode Decision (only for Android physical sensor mode)
      if (typeof AndroidBridge !== "undefined") {
        if (ambientBrightness.average < proximitySwitchLuxThreshold) { // Ambient average is lux in AndroidBridge mode
          isUsingProximitySensor = true;
          console.log(`Low light detected (${ambientBrightness.average.toFixed(1)} lux < ${proximitySwitchLuxThreshold} lux). Using Proximity Sensor for Rakah ${rakah}.`);
        } else {
          isUsingProximitySensor = false;
          console.log(`Normal light detected (${ambientBrightness.average.toFixed(1)} lux >= ${proximitySwitchLuxThreshold} lux). Using Light Sensor for Rakah ${rakah}.`);
        }
        updateSensorModeUI();
      } else {
        isUsingProximitySensor = false;
        if (elements.rakahNumber) {
          elements.rakahNumber.classList.remove("proximity-mode");
        }
      }
      
      console.log(`Calibrated Rakah ${rakah}! Ambient Avg: ${ambientBrightness.average.toFixed(2)}%, LowLightMode: ${isLowLightMode}`);
      
      // Record calibration telemetry for this Rakah
      recordRakahCalibrationTelemetry(rakah);

      // Vibrate to signal active counting start
      triggerVibration(150);
      
      // Mark calibration done
      isCalibrating = false;
      detectionState = "IDLE";
      
      // Reset active sajdah count for the new Rakah
      currentSajdahCount = 0;
      updateSujudIndicators();
      
      // Set active tip
      let stepLabel = document.getElementById("prayer-status-tip");
      if (stepLabel) {
        stepLabel.textContent = translations[currentLang].standClose;
      }
    }
  }, 1000);
}

function updateCalibUI(rakah, seconds) {
  let stepLabel = document.getElementById("prayer-status-tip");
  if (!stepLabel) return;
  let rakahName = currentLang === "ar" ? translations.ar.rakahNames[rakah] || `الركعة ${rakah}` : translations.en.rakahNames[rakah] || `Rakah ${rakah}`;
  
  if (currentLang === "ar") {
    stepLabel.innerHTML = `جاري معايرة الكاميرا لـ <span style="color:#D4AF37;font-weight:bold;">${rakahName}</span>... لا تتحرك (المتبقي: <span style="color:#00FF88;font-weight:bold;">${seconds}</span> ثانية)`;
  } else {
    stepLabel.innerHTML = `Calibrating camera for <span style="color:#D4AF37;font-weight:bold;">${rakahName}</span>... Do not move (Remaining: <span style="color:#00FF88;font-weight:bold;">${seconds}</span>s)`;
  }
}

function startLuminanceMonitoring() {
  if (brightnessInterval) clearInterval(brightnessInterval);
  
  brightnessInterval = setInterval(() => {
    currentBrightness = getFrameLuminance();
    
    // Add to historical samples
    brightnessHistory.push(currentBrightness);
    if (brightnessHistory.length > 10) {
      brightnessHistory.shift(); // Keep last 1.0 second (10 samples of 100ms)
    }
    
    // Process detection logic if active prayer view is running
    if (elements.viewPrayer.classList.contains("active")) {
      // Calculate delta over 500ms (5 samples ago)
      let delta = 0;
      if (brightnessHistory.length >= 6) {
        const prev = brightnessHistory[brightnessHistory.length - 6];
        delta = currentBrightness.average - prev.average;
      }
      
      // Robust cross-device verification of AE Lock status in the loop
      if (isExposureLocked && videoStream) {
        const tracks = videoStream.getVideoTracks();
        if (tracks.length > 0) {
          const settings = tracks[0].getSettings ? tracks[0].getSettings() : {};
          if (settings.exposureMode === "manual") {
            aeStatusText = "Active";
          } else if (settings.exposureMode === undefined) {
            // Some browsers support manual constraints but do not return it in settings (undefined)
            aeStatusText = "Active (Unverified)";
          } else if (settings.exposureMode === "continuous" || settings.exposureMode === "single-shot") {
            // Check if 1.5 seconds have passed since the locking request
            if (Date.now() - lockRequestTime > 1500) {
              aeStatusText = "Failed";
              isExposureLocked = false; // Disable flag since it failed
            } else {
              aeStatusText = "Pending Lock";
            }
          }
        }
      }
      
      // Update debug panel
      if (elements.dbgCurrent) {
        elements.dbgCurrent.textContent = `${currentBrightness.average.toFixed(1)}%`;
        // Display Delta and Ambient in the threshold area for debugging
        elements.dbgThreshold.textContent = `C:${currentBrightness.center.toFixed(0)} P:${currentBrightness.periphery.toFixed(0)} (B:${ambientBrightness.average.toFixed(0)}%)`;
        elements.dbgState.textContent = `${detectionState}${isLowLightMode ? ' (LL)' : ''}`;
        elements.dbgBar.style.width = `${Math.min(currentBrightness.average, 100)}%`;
        
        // Update AE Lock status display
        if (elements.dbgAelock) {
          let aeDisplay = aeStatusText;
          if (currentLang === "ar") {
            if (aeStatusText === "Active") aeDisplay = "نشط";
            else if (aeStatusText === "Active (Unverified)") aeDisplay = "نشط (غير مؤكد)";
            else if (aeStatusText === "Pending Lock") aeDisplay = "جاري القفل...";
            else if (aeStatusText === "Inactive") aeDisplay = "غير نشط";
            else if (aeStatusText === "Unsupported") aeDisplay = "غير مدعوم";
            else if (aeStatusText === "Failed") aeDisplay = "فشل";
            else if (aeStatusText === "No Stream") aeDisplay = "لا يوجد بث";
            else if (aeStatusText === "No Track") aeDisplay = "لا يوجد مسار";
            else if (aeStatusText === "Error") aeDisplay = "خطأ";
          }
          elements.dbgAelock.textContent = aeDisplay;
          
          // Color based on status
          if (aeStatusText === "Active") {
            elements.dbgAelock.style.color = '#00FF88'; // Green
          } else if (aeStatusText === "Active (Unverified)") {
            elements.dbgAelock.style.color = '#00E5FF'; // Cyan (working, but browser doesn't report it)
          } else if (aeStatusText === "Pending Lock") {
            elements.dbgAelock.style.color = '#FFD700'; // Yellow
          } else if (aeStatusText === "Inactive") {
            elements.dbgAelock.style.color = '#FFA500'; // Orange
          } else if (aeStatusText === "Unsupported") {
            elements.dbgAelock.style.color = '#888888'; // Grey
          } else {
            elements.dbgAelock.style.color = '#FF4444'; // Red
          }
        }

        // Color current reading red during Sujud or yellow during calibration/pending
        if (detectionState === "IN_SUDJUD") {
          elements.dbgCurrent.style.color = '#FF4444';
        } else if (detectionState === "DOWN_PENDING" || detectionState === "UP_PENDING") {
          elements.dbgCurrent.style.color = '#FFD700';
        } else {
          elements.dbgCurrent.style.color = '#00FF88';
        }
      }
      processDetectionState();
    }
  }, 100);
}

// --- Core Shadow Proximity Detection State Machine (Rate of Change / Delta Method) ---
function processDetectionState() {
  const now = Date.now();

  // Track minimum light reached during Sujud for telemetry
  if (detectionState === "IN_SUDJUD" || detectionState === "UP_PENDING") {
    const curLight = (currentBrightness && typeof currentBrightness.average === "number") ? currentBrightness.average : null;
    if (curLight !== null) {
      if (minLightDuringCurrentSujud === null || curLight < minLightDuringCurrentSujud) {
        minLightDuringCurrentSujud = curLight;
      }
    }
  }
  
  if (isUsingProximitySensor) {
    const isNear = latestProximityValue !== null && latestProximityValue < Math.min(3.0, proximityMaxRange);
    
    switch (detectionState) {
      case "IDLE":
        if (isNear && (now - lastSajdahTime > SUJUD_COOLDOWN)) {
          detectionState = "DOWN_PENDING";
          stateStartTime = now;
          console.log(`Proximity NEAR detected: ${latestProximityValue}cm, moving to DOWN_PENDING`);
        }
        break;
        
      case "DOWN_PENDING":
        if (isNear) {
          if (now - stateStartTime >= CONFIRM_DOWN_TIME) {
            detectionState = "IN_SUDJUD";
            onSujudDown();
            console.log(`Confirmed Sujud (DOWN): Proximity stayed NEAR`);
          }
        } else {
          detectionState = "IDLE";
          console.log(`Proximity FAR in DOWN_PENDING, reverting to IDLE`);
        }
        break;
        
      case "IN_SUDJUD":
        if (!isNear) {
          detectionState = "UP_PENDING";
          stateStartTime = now;
          console.log(`Proximity FAR detected: ${latestProximityValue}cm, moving to UP_PENDING`);
        }
        break;
        
      case "UP_PENDING":
        if (!isNear) {
          if (now - stateStartTime >= CONFIRM_UP_TIME) {
            detectionState = "IDLE";
            onSujudUp();
            console.log(`Confirmed Rise (UP): Proximity stayed FAR`);
          }
        } else {
          detectionState = "IN_SUDJUD";
          console.log(`Proximity NEAR in UP_PENDING, reverting to IN_SUDJUD`);
        }
        break;
    }
    return;
  }

  // We need at least 6 samples to ensure history is populated
  if (brightnessHistory.length < 6) return;
  
  const current = brightnessHistory[brightnessHistory.length - 1];
  
  switch (detectionState) {
    case "IDLE":
      // Transition to DOWN_PENDING if current average light is below shadowThreshold (50% of ambient)
      if (current.average < shadowThreshold && (now - lastSajdahTime > SUJUD_COOLDOWN)) {
        detectionState = "DOWN_PENDING";
        stateStartTime = now;
        console.log(`Luminance drop detected: Current:${current.average.toFixed(1)}% < Threshold:${shadowThreshold.toFixed(1)}%, moving to DOWN_PENDING`);
      }
      break;
      
    case "DOWN_PENDING":
      // Verify the drop persists below the shadowThreshold
      if (current.average < shadowThreshold) {
        if (now - stateStartTime >= CONFIRM_DOWN_TIME) {
          detectionState = "IN_SUDJUD";
          onSujudDown();
          console.log(`Confirmed Sujud (DOWN): Average stayed below shadowThreshold`);
        }
      } else {
        // Revert to IDLE if light goes above the shadowThreshold
        detectionState = "IDLE";
        console.log(`Flicker detected in DOWN_PENDING: light went above shadowThreshold, reverting to IDLE`);
      }
      break;
      
    case "IN_SUDJUD":
      // Transition to UP_PENDING if current average light is above recoveryThreshold (75% of ambient)
      if (current.average > recoveryThreshold) {
        detectionState = "UP_PENDING";
        stateStartTime = now;
        console.log(`Luminance rise detected: Current:${current.average.toFixed(1)}% > Threshold:${recoveryThreshold.toFixed(1)}%, moving to UP_PENDING`);
      }
      break;
      
    case "UP_PENDING":
      // Verify the rise persists above the recoveryThreshold
      if (current.average > recoveryThreshold) {
        if (now - stateStartTime >= CONFIRM_UP_TIME) {
          detectionState = "IDLE";
          onSujudUp();
          console.log(`Confirmed Rise (UP): Average stayed above recoveryThreshold`);
        }
      } else {
        // Revert to IN_SUDJUD if light drops back below the recoveryThreshold
        detectionState = "IN_SUDJUD";
        console.log(`Flicker detected in UP_PENDING: light went below recoveryThreshold, reverting to IN_SUDJUD`);
      }
      break;
  }
}

// --- Detection Events ---
function onSujudDown() {
  // 1. Dim screen to avoid glares/glows on face during Sujud
  elements.sujudOverlay.classList.add("active");
  
  // 2. Light tactile click to reassure that phone entered Sujud state (optional, short)
  triggerVibration(60);

  // 3. Record Sujud Down Telemetry
  recordSujudDownTelemetry();
}

function onSujudUp() {
  // 1. Un-dim screen
  elements.sujudOverlay.classList.remove("active");
  
  // 2. Process Sujud completion
  lastSajdahTime = Date.now();
  currentSajdahCount++;
  
  // 3. Record Sujud Up Telemetry
  recordSujudUpTelemetry();

  if (currentSajdahCount === 1) {
    // Sajdah 1 completed: Single short vibration feedback
    triggerVibration(150);
    updateSujudIndicators();
  } else if (currentSajdahCount === 2) {
    // Sajdah 2 completed: Double vibration feedback
    triggerVibration([200, 100, 200]);
    updateSujudIndicators();
    
    // Check if target Rakah is completed
    if (targetRakahs > 0 && currentRakah >= targetRakahs) {
      // Completed all Rakahs! Start final Tashahhud overlay
      setTimeout(() => {
        startFinalTashahhud();
      }, 1500);
    } else {
      // Check for Middle Tashahhud (if finished Rakah 2 in a 3 or 4 Rakah prayer)
      if (currentRakah === 2 && targetRakahs > 2) {
        setTimeout(() => {
          startMiddleTashahhud();
        }, 1500);
      } else {
        // Increment Rakah!
        setTimeout(() => {
          currentRakah++;
          currentSajdahCount = 0;
          updateRakahDisplay();
          updateSujudIndicators();
          // Start auto-calibration for the new Rakah
          runRakahCalibration(currentRakah);
        }, 7000); // Delayed to 7 seconds as requested
      }
    }
  }
}

// --- Active Prayer UI State Updates ---
function updateRakahDisplay() {
  elements.rakahNumber.textContent = currentRakah;
  
  // Set Rakah name in selected language
  const names = translations[currentLang].rakahNames;
  if (names[currentRakah]) {
    elements.rakahName.textContent = names[currentRakah];
  } else {
    elements.rakahName.textContent = names.default + currentRakah;
  }
}

function updateSujudIndicators() {
  if (currentSajdahCount >= 1) {
    elements.sujudStep1.classList.add("active");
  } else {
    elements.sujudStep1.classList.remove("active");
  }
  
  if (currentSajdahCount >= 2) {
    elements.sujudStep2.classList.add("active");
  } else {
    elements.sujudStep2.classList.remove("active");
  }
}

function updateSensorModeUI() {
  if (isUsingProximitySensor) {
    if (elements.rakahNumber) {
      elements.rakahNumber.classList.add("proximity-mode");
    }
    if (elements.sensorBadge) {
      elements.sensorBadge.textContent = translations[currentLang].sensorProximityMode;
    }
  } else {
    if (elements.rakahNumber) {
      elements.rakahNumber.classList.remove("proximity-mode");
    }
    if (elements.sensorBadge) {
      elements.sensorBadge.textContent = translations[currentLang].sensorLightMode;
    }
  }
}

// --- Active Prayer Management ---
async function startPrayer() {
  isDirectAthkarMode = false;
  isUsingProximitySensor = false;
  if (elements.rakahNumber) {
    elements.rakahNumber.classList.remove("proximity-mode");
  }
  
  // Clear Tashahhud timers if any
  if (tashahhudTimer) {
    clearInterval(tashahhudTimer);
    tashahhudTimer = null;
  }
  if (finalTashahhudTimer) {
    clearInterval(finalTashahhudTimer);
    finalTashahhudTimer = null;
  }
  
  // Hide Tashahhud overlays
  if (elements.tashahhudOverlay) {
    elements.tashahhudOverlay.classList.add("hidden");
  }
  if (elements.finalTashahhudOverlay) {
    elements.finalTashahhudOverlay.classList.add("hidden");
  }
  
  // Reset values
  currentRakah = 1;
  currentSajdahCount = 0;
  detectionState = "CALIBRATING";
  lastSajdahTime = 0;
  
  // Record new prayer session telemetry
  recordSessionStartTelemetry();
  
  // UI Display setup
  elements.activePrayerName.textContent = document.querySelector(`.btn-prayer[data-name="${selectedPrayer}"] .prayer-name`).textContent;
  updateRakahDisplay();
  updateSujudIndicators();
  elements.sujudOverlay.classList.remove("active");
  
  // Reset buttons and tips visibility
  if (elements.btnPausePrayer) elements.btnPausePrayer.classList.remove("hidden");
  if (elements.btnShowAthkar) elements.btnShowAthkar.classList.add("hidden");
  const stepLabel = document.getElementById("prayer-status-tip");
  if (stepLabel) stepLabel.classList.remove("hidden");
  
  // Request wake lock to prevent sleep
  await requestWakeLock();
  
  // Timer Setup
  prayerDurationSeconds = 0;
  elements.prayerTimer.textContent = "00:00";
  prayerTimer = setInterval(() => {
    prayerDurationSeconds++;
    const min = String(Math.floor(prayerDurationSeconds / 60)).padStart(2, "0");
    const sec = String(prayerDurationSeconds % 60).padStart(2, "0");
    elements.prayerTimer.textContent = `${min}:${sec}`;
  }, 1000);
  
  // Start preparation and calibration for Rakah 1
  runRakahCalibration(1);
}

function exitPrayer(isAborted) {
  // Stop timer
  clearInterval(prayerTimer);
  prayerTimer = null;
  
  // Clear Tashahhud timers if any
  if (tashahhudTimer) {
    clearInterval(tashahhudTimer);
    tashahhudTimer = null;
  }
  if (finalTashahhudTimer) {
    clearInterval(finalTashahhudTimer);
    finalTashahhudTimer = null;
  }
  
  // Hide Tashahhud overlays
  if (elements.tashahhudOverlay) {
    elements.tashahhudOverlay.classList.add("hidden");
  }
  if (elements.finalTashahhudOverlay) {
    elements.finalTashahhudOverlay.classList.add("hidden");
  }
  
  // Reset proximity mode
  isUsingProximitySensor = false;
  if (elements.rakahNumber) {
    elements.rakahNumber.classList.remove("proximity-mode");
  }
  
  // Clear phase timer if any
  if (phaseTimer) {
    clearInterval(phaseTimer);
    phaseTimer = null;
  }
  isCalibrating = false;
  isPreparing = false;
  
  // Release screen wake lock
  releaseWakeLock();
  
  // Remove dark overlay
  elements.sujudOverlay.classList.remove("active");
  
  // Record session end telemetry
  recordSessionEndTelemetry(isAborted);
  
  if (isAborted) {
    // Stop camera and return home
    stopCamera();
    switchView("view-home");
  } else {
    // Stop camera and display completed view
    stopCamera();
    
    // Complete vibration: Triple long vibrations
    triggerVibration([300, 150, 300, 150, 300]);
    
    // Populate stats summary
    elements.summaryRakahs.textContent = currentRakah;
    
    const min = String(Math.floor(prayerDurationSeconds / 60)).padStart(2, "0");
    const sec = String(prayerDurationSeconds % 60).padStart(2, "0");
    elements.summaryDuration.textContent = `${min}:${sec}`;
    
    // Reset tasbeeh
    resetTasbeeh();
    
    switchView("view-completed");
  }
}

// --- Middle Tashahhud Flow ---
function startMiddleTashahhud() {
  detectionState = "TASHAHHUD";
  tashahhudTimeLeft = 30;
  
  if (elements.tashahhudCountdown) {
    elements.tashahhudCountdown.textContent = tashahhudTimeLeft;
  }
  
  if (elements.tashahhudOverlay) {
    elements.tashahhudOverlay.classList.remove("hidden");
  }
  
  // Vibration to signal start of Middle Tashahhud (3 quick vibrations)
  triggerVibration([100, 50, 100, 50, 100]);
  
  tashahhudTimer = setInterval(() => {
    tashahhudTimeLeft--;
    if (elements.tashahhudCountdown) {
      elements.tashahhudCountdown.textContent = tashahhudTimeLeft;
    }
    
    if (tashahhudTimeLeft <= 0) {
      endTashahhud();
    }
  }, 1000);
}

function endTashahhud() {
  if (tashahhudTimer) {
    clearInterval(tashahhudTimer);
    tashahhudTimer = null;
  }
  
  if (elements.tashahhudOverlay) {
    elements.tashahhudOverlay.classList.add("hidden");
  }
  
  // Vibration to signal end of Tashahhud (1 long vibration)
  triggerVibration(200);
  
  // Increment Rakah and run auto-calibration
  currentRakah = 3;
  currentSajdahCount = 0;
  updateRakahDisplay();
  updateSujudIndicators();
  runRakahCalibration(currentRakah);
}

// --- Final Tashahhud Flow ---
function startFinalTashahhud() {
  detectionState = "FINAL_TASHAHHUD";
  finalTashahhudTimeLeft = 30;
  
  if (elements.finalTashahhudCountdown) {
    elements.finalTashahhudCountdown.textContent = finalTashahhudTimeLeft;
  }
  
  if (elements.finalTashahhudOverlay) {
    elements.finalTashahhudOverlay.classList.remove("hidden");
  }
  
  // Vibration to signal start of Final Tashahhud (3 quick vibrations)
  triggerVibration([100, 50, 100, 50, 100]);
  
  finalTashahhudTimer = setInterval(() => {
    finalTashahhudTimeLeft--;
    if (elements.finalTashahhudCountdown) {
      elements.finalTashahhudCountdown.textContent = finalTashahhudTimeLeft;
    }
    
    if (finalTashahhudTimeLeft <= 0) {
      endFinalTashahhud();
    }
  }, 1000);
}

function endFinalTashahhud() {
  if (finalTashahhudTimer) {
    clearInterval(finalTashahhudTimer);
    finalTashahhudTimer = null;
  }
  
  if (elements.finalTashahhudOverlay) {
    elements.finalTashahhudOverlay.classList.add("hidden");
  }
  
  // Vibration to signal end of Final Tashahhud (1 long vibration)
  triggerVibration(200);
  
  // Complete the prayer successfully (stops cameras/timers, populates stats and transitions to view-completed)
  exitPrayer(false);
}

function onPrayerFinished() {
  // Stop camera
  stopCamera();
  
  // Stop timer
  if (prayerTimer) {
    clearInterval(prayerTimer);
    prayerTimer = null;
  }
  
  // Clear phase timer if any
  if (phaseTimer) {
    clearInterval(phaseTimer);
    phaseTimer = null;
  }
  isCalibrating = false;
  isPreparing = false;
  
  // Release screen wake lock
  releaseWakeLock();
  
  // Remove dark overlay
  elements.sujudOverlay.classList.remove("active");
  
  // Complete vibration: Triple long vibrations
  triggerVibration([300, 150, 300, 150, 300]);
  
  // Hide exit button and status tip
  elements.btnPausePrayer.classList.add("hidden");
  const stepLabel = document.getElementById("prayer-status-tip");
  if (stepLabel) {
    stepLabel.classList.add("hidden");
  }
  
  // Show "أذكار ما بعد الصلاة" button
  elements.btnShowAthkar.classList.remove("hidden");
}

// --- Sequential Athkar Flow ---
function startAthkarFlow() {
  currentThikrIndex = 0;
  thikrCount = 0;
  
  // Determine target for the last three Surahs (indexes 9, 10, 11)
  const isThreeTimes = (selectedPrayer === "rakah-2" || selectedPrayer === "rakah-3");
  const surahTarget = isThreeTimes ? 3 : 1;
  
  athkarList[9].target = surahTarget;
  athkarList[10].target = surahTarget;
  athkarList[11].target = surahTarget;
  
  switchView("view-athkar");
  updateAthkarUI();
}

function updateAthkarUI() {
  if (currentThikrIndex < 0 || currentThikrIndex >= athkarList.length) return;
  
  const thikr = athkarList[currentThikrIndex];
  
  // Set Thikr text
  const textEl = document.getElementById("athkar-text");
  if (textEl) {
    textEl.textContent = (currentLang === "en" && thikr.enText) ? thikr.enText : thikr.text;
  }
  
  // Update progress
  const progressEl = document.getElementById("athkar-progress");
  if (progressEl) {
    if (currentLang === "ar") {
      progressEl.textContent = `الذكر ${currentThikrIndex + 1} من ${athkarList.length}`;
    } else {
      progressEl.textContent = `Supplication ${currentThikrIndex + 1} of ${athkarList.length}`;
    }
  }
  
  // Update counter display
  const counterEl = document.getElementById("athkar-counter-disp");
  if (counterEl) {
    counterEl.textContent = thikrCount;
  }
  
  // Update target helper text
  const targetEl = document.getElementById("athkar-target");
  if (targetEl) {
    if (currentLang === "ar") {
      targetEl.textContent = `العدد المطلوب: ${thikr.target} (اضغط للتسبيح)`;
    } else {
      targetEl.textContent = `Target: ${thikr.target} (Tap to count)`;
    }
  }
  
  // Toggle visibility of the "Previous" button
  const prevBtn = elements.btnPrevThikr;
  if (prevBtn) {
    if (currentThikrIndex === 0) {
      prevBtn.style.visibility = "hidden";
    } else {
      prevBtn.style.visibility = "visible";
    }
  }
}

function handleThikrTap() {
  if (currentThikrIndex < 0 || currentThikrIndex >= athkarList.length) return;
  
  const thikr = athkarList[currentThikrIndex];
  thikrCount++;
  
  // Update UI counter
  const counterEl = document.getElementById("athkar-counter-disp");
  if (counterEl) {
    counterEl.textContent = thikrCount;
  }
  
  // Haptic feedback
  triggerVibration(45);
  
  // If we reach the target count
  if (thikrCount >= thikr.target) {
    // Milestone vibration
    triggerVibration([100, 50, 100]);
    
    // Move to next Thikr with a slight delay for visual transition
    setTimeout(() => {
      nextThikr();
    }, 150);
  }
}

function nextThikr() {
  if (currentThikrIndex < athkarList.length - 1) {
    currentThikrIndex++;
    thikrCount = 0;
    updateAthkarUI();
  } else {
    // Reached the end: complete flow!
    completeAthkarFlow();
  }
}

function prevThikr() {
  if (currentThikrIndex > 0) {
    currentThikrIndex--;
    thikrCount = 0;
    updateAthkarUI();
  }
}

function completeAthkarFlow() {
  // Triple vibration
  triggerVibration([300, 150, 300, 150, 300]);
  
  if (isDirectAthkarMode) {
    // Hide stats card
    if (elements.statsCardCompleted) {
      elements.statsCardCompleted.classList.add("hidden");
    }
  } else {
    // Show stats card and populate it
    if (elements.statsCardCompleted) {
      elements.statsCardCompleted.classList.remove("hidden");
    }
    
    // Populate stats summary
    elements.summaryRakahs.textContent = targetRakahs;
    
    const min = String(Math.floor(prayerDurationSeconds / 60)).padStart(2, "0");
    const sec = String(prayerDurationSeconds % 60).padStart(2, "0");
    elements.summaryDuration.textContent = `${min}:${sec}`;
  }
  
  // Reset tasbeeh count on the final screen
  resetTasbeeh();
  
  switchView("view-completed");
}

// --- Digital Tasbeeh Counter Logic ---
function incrementTasbeeh() {
  tasbeehCount++;
  elements.tasbeehCountDisp.textContent = tasbeehCount;
  
  // Tactile feedback: short vibration on each click
  triggerVibration(45);
  
  // Double-tap vibrations on milestones 33 and 100
  if (tasbeehCount === 33 || tasbeehCount === 99 || tasbeehCount === 100) {
    triggerVibration([100, 50, 100]);
    
    // Cycle the phrase if reached 33
    if (tasbeehCount === 33) {
      currentTasbeehIndex = (currentTasbeehIndex + 1) % tasbeehPhrases.length;
      elements.tasbeehText.textContent = translations[currentLang][tasbeehPhrases[currentTasbeehIndex]];
      tasbeehCount = 0;
      
      // Delay tasp text update smoothly
      setTimeout(() => {
        elements.tasbeehCountDisp.textContent = "0";
      }, 300);
    }
  }
}

function resetTasbeeh() {
  tasbeehCount = 0;
  currentTasbeehIndex = 0;
  elements.tasbeehCountDisp.textContent = "0";
  elements.tasbeehText.textContent = translations[currentLang][tasbeehPhrases[currentTasbeehIndex]];
  triggerVibration(80);
}

// ==========================================================================
// CUMULATIVE TELEMETRY & ILLUMINANCE LOGGING MODULE
// ==========================================================================

function formatDateTimeDisplay(date) {
  try {
    const d = date || new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  } catch (e) {
    return new Date().toISOString();
  }
}

function loadCumulativeTelemetry() {
  try {
    // Clear older telemetry version logs
    localStorage.removeItem("rakah_telemetry_logs_v1");

    const stored = localStorage.getItem(TELEMETRY_STORAGE_KEY);
    if (stored) {
      cumulativeTelemetry = JSON.parse(stored);
      if (!Array.isArray(cumulativeTelemetry)) {
        cumulativeTelemetry = [];
      }
    } else {
      cumulativeTelemetry = [];
    }
  } catch (err) {
    console.error("Failed to load telemetry from localStorage:", err);
    cumulativeTelemetry = [];
  }
  updateTelemetryBadge();
}

function saveCumulativeTelemetry() {
  try {
    localStorage.setItem(TELEMETRY_STORAGE_KEY, JSON.stringify(cumulativeTelemetry));
  } catch (err) {
    console.error("Failed to save telemetry to localStorage:", err);
  }
  updateTelemetryBadge();
}

function updateTelemetryBadge() {
  if (!elements.telemetryBadge) return;
  const count = cumulativeTelemetry.length;
  if (count > 0) {
    elements.telemetryBadge.textContent = count;
    elements.telemetryBadge.classList.remove("hidden");
  } else {
    elements.telemetryBadge.textContent = "0";
    elements.telemetryBadge.classList.add("hidden");
  }
}

function recordSessionStartTelemetry() {
  const now = new Date();
  activeSession = {
    id: "session_" + Date.now(),
    startTime: now.toISOString(),
    dateTimeDisplay: formatDateTimeDisplay(now),
    prayerKey: selectedPrayer,
    prayerName: document.querySelector(`.btn-prayer[data-name="${selectedPrayer}"] .prayer-name`)?.textContent || selectedPrayer,
    targetRakahs: targetRakahs,
    rakahs: {},
    completed: false,
    totalDurationSeconds: 0
  };
  saveCurrentSessionTelemetry();
}

function recordRakahCalibrationTelemetry(rakah) {
  if (!activeSession) return;
  
  const sensorModeText = isUsingProximitySensor
    ? "PROXIMITY"
    : (typeof AndroidBridge !== "undefined" ? "LIGHT_SENSOR" : "CAMERA");
    
  activeSession.rakahs[rakah] = {
    rakahNumber: rakah,
    baselineLight: Number(ambientBrightness.average.toFixed(2)),
    shadowThreshold: Number(shadowThreshold.toFixed(2)),
    recoveryThreshold: Number(recoveryThreshold.toFixed(2)),
    sensorMode: sensorModeText,
    events: []
  };
  saveCurrentSessionTelemetry();
}

function recordSujudDownTelemetry() {
  currentSujudDownTimestamp = Date.now();
  currentSujudDownLight = Number(currentBrightness.average.toFixed(2));
  minLightDuringCurrentSujud = currentSujudDownLight;
  currentSujudProximityDown = (latestProximityValue !== null) ? Number(latestProximityValue.toFixed(1)) : null;
}

function recordSujudUpTelemetry() {
  if (!activeSession) return;
  
  const sujudUpLight = Number(currentBrightness.average.toFixed(2));
  const durationSec = currentSujudDownTimestamp ? Number(((Date.now() - currentSujudDownTimestamp) / 1000).toFixed(1)) : 0;
  const rakahData = activeSession.rakahs[currentRakah];
  const baseline = (rakahData && rakahData.baselineLight > 0) ? rakahData.baselineLight : (ambientBrightness.average || 1);
  const minVal = (minLightDuringCurrentSujud !== null) ? Number(minLightDuringCurrentSujud.toFixed(2)) : currentSujudDownLight;
  
  const eventData = {
    sajdahNumber: currentSajdahCount,
    downTimeSeconds: prayerDurationSeconds,
    downLight: currentSujudDownLight,
    minLight: minVal,
    upLight: sujudUpLight,
    durationSeconds: durationSec,
    dropRatioPercent: Number(((currentSujudDownLight / baseline) * 100).toFixed(1)),
    minRatioPercent: Number(((minVal / baseline) * 100).toFixed(1)),
    riseRatioPercent: Number(((sujudUpLight / baseline) * 100).toFixed(1)),
    proximityDownCm: currentSujudProximityDown,
    proximityUpCm: (latestProximityValue !== null) ? Number(latestProximityValue.toFixed(1)) : null
  };
  
  if (!rakahData) {
    recordRakahCalibrationTelemetry(currentRakah);
  }
  if (activeSession.rakahs[currentRakah]) {
    activeSession.rakahs[currentRakah].events.push(eventData);
  }
  
  saveCurrentSessionTelemetry();
}

function recordSessionEndTelemetry(isAborted) {
  if (!activeSession) return;
  activeSession.completed = !isAborted;
  activeSession.totalDurationSeconds = prayerDurationSeconds;
  saveCurrentSessionTelemetry();
  activeSession = null;
  currentSujudDownTimestamp = 0;
  minLightDuringCurrentSujud = null;
}

function saveCurrentSessionTelemetry() {
  if (!activeSession) return;
  const idx = cumulativeTelemetry.findIndex(s => s.id === activeSession.id);
  if (idx >= 0) {
    cumulativeTelemetry[idx] = activeSession;
  } else {
    cumulativeTelemetry.push(activeSession);
  }
  saveCumulativeTelemetry();
}

function openSettingsModal() {
  if (elements.proxSlider) {
    elements.proxSlider.value = proximitySwitchLuxThreshold;
  }
  if (elements.proxValBadge) {
    elements.proxValBadge.textContent = `${proximitySwitchLuxThreshold.toFixed(1)} Lux`;
  }
  if (elements.settingsModal) {
    elements.settingsModal.classList.remove("hidden");
  }
}

function closeSettingsModal() {
  if (elements.settingsModal) {
    elements.settingsModal.classList.add("hidden");
  }
}

function exitEntireApp() {
  if (typeof AndroidBridge !== "undefined" && typeof AndroidBridge.exitApp === "function") {
    AndroidBridge.exitApp();
  } else {
    window.close();
  }
}

function renderTelemetryList() {
  if (!elements.telemetryContentList) return;
  
  let totalSajdahs = 0;
  cumulativeTelemetry.forEach(session => {
    Object.values(session.rakahs || {}).forEach(rakah => {
      totalSajdahs += (rakah.events || []).length;
    });
  });
  
  if (elements.telemetrySessionCount) {
    const isAr = currentLang === "ar";
    elements.telemetrySessionCount.textContent = isAr 
      ? `الصلوات المسجلة: ${cumulativeTelemetry.length}` 
      : `Recorded Prayers: ${cumulativeTelemetry.length}`;
  }
  if (elements.telemetrySajdahCount) {
    const isAr = currentLang === "ar";
    elements.telemetrySajdahCount.textContent = isAr
      ? `إجمالي السجدات: ${totalSajdahs}`
      : `Total Sujuds: ${totalSajdahs}`;
  }
  
  elements.telemetryContentList.innerHTML = "";
  
  if (cumulativeTelemetry.length === 0) {
    const empty = document.createElement("div");
    empty.className = "telemetry-empty-msg";
    empty.textContent = translations[currentLang].noTelemetryData;
    elements.telemetryContentList.appendChild(empty);
    return;
  }
  
  // Show most recent sessions first
  const reversedSessions = [...cumulativeTelemetry].reverse();
  
  reversedSessions.forEach((session, sessionIdx) => {
    const card = document.createElement("div");
    card.className = "telemetry-session-card";
    
    const min = String(Math.floor((session.totalDurationSeconds || 0) / 60)).padStart(2, "0");
    const sec = String((session.totalDurationSeconds || 0) % 60).padStart(2, "0");
    
    let rakahsHtml = "";
    const rakahsObj = session.rakahs || {};
    
    Object.values(rakahsObj).forEach(rakah => {
      let sajdahsHtml = "";
      (rakah.events || []).forEach(ev => {
        const dropRatio = ev.dropRatioPercent;
        const minRatio = ev.minRatioPercent;
        const riseRatio = ev.riseRatioPercent;
        const unit = rakah.sensorMode === "LIGHT_SENSOR" ? "lx" : "%";
        
        let proxInfo = "";
        if (ev.proximityDownCm !== null) {
          proxInfo = ` <span style="color:#a78bfa;">(قرب: ${ev.proximityDownCm}cm ➔ ${ev.proximityUpCm !== null ? ev.proximityUpCm + 'cm' : '?'})</span>`;
        }
        
        sajdahsHtml += `
          <div class="rakah-sajdah-row">
            <div style="font-weight:600; color:#e2e8f0;">
              ${currentLang === "ar" ? `السجدة ${ev.sajdahNumber}:` : `Sajdah ${ev.sajdahNumber}:`}
            </div>
            <div class="sajdah-values">
              <span style="color:#f87171;" title="إضاءة بداية السجود">⬇️ سجود: ${ev.downLight}${unit} (${dropRatio}%)</span>
              <span style="color:#ef4444; font-weight:700;" title="أدنى إضاءة أثناء السجود">📉 أدنى: ${ev.minLight}${unit} (${minRatio}%)</span>
              <span style="color:#34d399;" title="إضاءة عتبة الرفع">⬆️ رفع: ${ev.upLight}${unit} (${riseRatio}%)</span>
              <span style="color:var(--color-gold);" title="مدة السجدة">⏱️ ${ev.durationSeconds}s</span>
              ${proxInfo}
            </div>
          </div>
        `;
      });
      
      const unit = rakah.sensorMode === "LIGHT_SENSOR" ? "lx" : "%";
      rakahsHtml += `
        <div class="telemetry-rakah-block">
          <div class="rakah-baseline-info">
            <span style="font-weight:700; color:var(--color-gold);">
              ${currentLang === "ar" ? `الركعة ${rakah.rakahNumber}` : `Rakah ${rakah.rakahNumber}`}
            </span>
            <span>معيار (Baseline): <strong style="color:#fff;">${rakah.baselineLight}${unit}</strong></span>
            <span>عتبة سجود: <strong>${rakah.shadowThreshold}${unit}</strong></span>
            <span>عتبة رفع: <strong>${rakah.recoveryThreshold}${unit}</strong></span>
          </div>
          ${sajdahsHtml || '<div style="color:var(--text-muted); font-size:0.75rem;">لا توجد سجدات مسجلة</div>'}
        </div>
      `;
    });
    
    card.innerHTML = `
      <div class="session-card-header">
        <span class="session-date">${session.dateTimeDisplay || session.startTime}</span>
        <span class="session-prayer">${session.prayerName} (${session.targetRakahs} ركعات) - ${min}:${sec}</span>
      </div>
      ${rakahsHtml}
    `;
    
    elements.telemetryContentList.appendChild(card);
  });
}

function generateTelemetryCSV() {
  const isAr = currentLang === "ar";
  const headers = isAr
    ? "رقم الجلسة,التاريخ والوقت,نوع الصلاة,المدة (ثانية),رقم الركعة,نوع المستشعر,المعيار (Baseline),عتبة السجود,عتبة الرفع,رقم السجدة,إضاءة السجود (Trigger),نسبة السجود %,أدنى إضاءة بالسجود (Min),أدنى نسبة %,إضاءة الرفع (Trigger),نسبة الرفع %,مدة السجود (ثانية),قرب السجود (سم),قرب الرفع (سم)\n"
    : "Session_ID,Date_Time,Prayer,Duration_Sec,Rakah_Num,Sensor_Mode,Baseline_Light,Shadow_Threshold,Recovery_Threshold,Sajdah_Num,Sujud_Trigger_Light,Sujud_Drop_Ratio_Percent,Min_Sujud_Light,Min_Ratio_Percent,Rise_Trigger_Light,Rise_Ratio_Percent,Sujud_Duration_Sec,Proximity_Down_Cm,Proximity_Up_Cm\n";
    
  let rows = [];
  
  cumulativeTelemetry.forEach((session, sessionIdx) => {
    const sessionNum = sessionIdx + 1;
    const dateTime = session.dateTimeDisplay || session.startTime;
    const prayer = session.prayerName;
    const totalDuration = session.totalDurationSeconds || 0;
    
    const rakahsObj = session.rakahs || {};
    Object.values(rakahsObj).forEach(rakah => {
      const rakahNum = rakah.rakahNumber;
      const mode = rakah.sensorMode;
      const baseline = rakah.baselineLight;
      const shadowThresh = rakah.shadowThreshold;
      const recovThresh = rakah.recoveryThreshold;
      
      (rakah.events || []).forEach(ev => {
        rows.push([
          sessionNum,
          `"${dateTime}"`,
          `"${prayer}"`,
          totalDuration,
          rakahNum,
          mode,
          baseline,
          shadowThresh,
          recovThresh,
          ev.sajdahNumber,
          ev.downLight,
          ev.dropRatioPercent,
          ev.minLight,
          ev.minRatioPercent,
          ev.upLight,
          ev.riseRatioPercent,
          ev.durationSeconds,
          ev.proximityDownCm !== null ? ev.proximityDownCm : "",
          ev.proximityUpCm !== null ? ev.proximityUpCm : ""
        ].join(","));
      });
    });
  });
  
  return headers + rows.join("\n");
}

function generateTelemetryText() {
  const isAr = currentLang === "ar";
  let output = isAr 
    ? `📊 تقرير سجل بيانات الاستضاءة والحساسات (${cumulativeTelemetry.length} صلوات مسجلة)\n` 
    : `📊 Sensor & Light Telemetry Report (${cumulativeTelemetry.length} sessions recorded)\n`;
  output += `====================================================\n\n`;
  
  cumulativeTelemetry.forEach((session, sessionIdx) => {
    const min = String(Math.floor((session.totalDurationSeconds || 0) / 60)).padStart(2, "0");
    const sec = String((session.totalDurationSeconds || 0) % 60).padStart(2, "0");
    
    output += `[صلاة ${sessionIdx + 1}] ${session.dateTimeDisplay || session.startTime} | ${session.prayerName} (${session.targetRakahs} ركعات) | المدة: ${min}:${sec}\n`;
    
    const rakahsObj = session.rakahs || {};
    Object.values(rakahsObj).forEach(rakah => {
      const unit = rakah.sensorMode === "LIGHT_SENSOR" ? "lx" : "%";
      output += `  * الركعة ${rakah.rakahNumber} [حساس: ${rakah.sensorMode}]:\n`;
      output += `    - المعيار (Baseline): ${rakah.baselineLight}${unit} | عتبة السجود: ${rakah.shadowThreshold}${unit} | عتبة الرفع: ${rakah.recoveryThreshold}${unit}\n`;
      
      (rakah.events || []).forEach(ev => {
        output += `    - السجدة ${ev.sajdahNumber}: سجود عند ${ev.downLight}${unit} (${ev.dropRatioPercent}%) ➔ أدنى إضاءة: ${ev.minLight}${unit} (${ev.minRatioPercent}%) ➔ رفع عند ${ev.upLight}${unit} (${ev.riseRatioPercent}%) | مدة السجود: ${ev.durationSeconds} ث`;
        if (ev.proximityDownCm !== null) {
          output += ` | قرب: ${ev.proximityDownCm}cm`;
        }
        output += `\n`;
      });
    });
    output += `\n`;
  });
  
  return output;
}

function copyTelemetry(format) {
  if (cumulativeTelemetry.length === 0) {
    showToast(translations[currentLang].noTelemetryData, "info");
    return;
  }
  
  const content = (format === "csv") ? generateTelemetryCSV() : generateTelemetryText();
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(content)
      .then(() => {
        const msg = (format === "csv") 
          ? translations[currentLang].toastCopiedCSV 
          : translations[currentLang].toastCopiedText;
        showToast(msg, "success");
        triggerVibration(80);
      })
      .catch((err) => {
        console.warn("Clipboard API write failed, trying fallback:", err);
        fallbackCopyText(content, format);
      });
  } else {
    fallbackCopyText(content, format);
  }
}

function fallbackCopyText(text, format) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    const msg = (format === "csv") 
      ? translations[currentLang].toastCopiedCSV 
      : translations[currentLang].toastCopiedText;
    showToast(msg, "success");
    triggerVibration(80);
  } catch (err) {
    console.error("Fallback copy failed:", err);
    showToast("حدث خطأ أثناء النسخ للحافظة", "error");
  }
  document.body.removeChild(textArea);
}

async function shareTelemetry() {
  if (cumulativeTelemetry.length === 0) {
    showToast(translations[currentLang].noTelemetryData, "info");
    return;
  }
  
  const textContent = generateTelemetryText();
  if (navigator.share) {
    try {
      await navigator.share({
        title: "سجل قياسات عداد الركعات",
        text: textContent
      });
      triggerVibration(80);
    } catch (err) {
      console.warn("Share cancelled or failed:", err);
    }
  } else {
    copyTelemetry("text");
  }
}

function clearCumulativeTelemetry() {
  if (cumulativeTelemetry.length === 0) return;
  
  const confirmMsg = translations[currentLang].clearLogsConfirm;
  if (confirm(confirmMsg)) {
    cumulativeTelemetry = [];
    saveCumulativeTelemetry();
    renderTelemetryList();
    showToast(translations[currentLang].toastClearedLogs, "info");
    triggerVibration([100, 50, 100]);
  }
}

// Register Service Worker for PWA Offline support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then((reg) => console.log("Service Worker registered successfully.", reg.scope))
      .catch((err) => console.warn("Service Worker registration failed:", err));
  });
}
