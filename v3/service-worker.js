const CACHE_NAME = "rakah-counter-v31";
const ASSETS_TO_CACHE = [
  "./",
  "index.html",
  "style.css?v=31",
  "app.js?v=31",
  "manifest.json"
];

// Install Event - Caching Assets
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching app shell assets...");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Cleaning old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Offline First Strategy
self.addEventListener("fetch", (e) => {
  // Only handle GET requests and local/font assets
  if (e.request.method !== "GET") return;

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch fresh in background to update cache (stale-while-revalidate)
        fetch(e.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, networkResponse));
          }
        }).catch(() => { /* ignore offline fetch failures */ });
        
        return cachedResponse;
      }
      
      // Fallback to network
      return fetch(e.request).then((networkResponse) => {
        // Cache external fonts on the fly
        if (e.request.url.includes("fonts.googleapis.com") || e.request.url.includes("fonts.gstatic.com")) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        }
        return networkResponse;
      });
    })
  );
});
