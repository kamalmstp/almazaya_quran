importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "/logo1.png",
  "/icon.png",
  "/read-quran.svg",
  "/icon_allah.svg",
  "/icon_clock.svg",
  "/icon_mosque.svg",
  "/icon_prayer.svg",
  "/icon_quran.svg",
  "/icon_ramadhan.svg",
  "/icon_rosary.svg",
  "/illustration.jpg",
  "/meta-image.png",
  "/fonts/lpmq.otf",
  "/fonts/lpmq.woff"
], {
  "cacheId": "quran-offline-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('http://quran.almazayaislamicschool.sch.id/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
