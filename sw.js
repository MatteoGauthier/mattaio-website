importScripts('/mattaio-website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mattaio-website/_nuxt/3fab78cebace9cedd4a3.js",
    "revision": "7f324513c3a09e042e44d5439e1693c2"
  },
  {
    "url": "/mattaio-website/_nuxt/7d1ab5d7705a8992a6fb.js",
    "revision": "ec81a3a30d1158ed2b84ca9b69b686e2"
  },
  {
    "url": "/mattaio-website/_nuxt/99831cc402dd0c1e5c25.js",
    "revision": "cc5e449e6e643e9ce7cd0f84c08c15d4"
  },
  {
    "url": "/mattaio-website/_nuxt/c8f47aa8bb01f1dcbca1.js",
    "revision": "623e68c58986c249111e385349de4c21"
  },
  {
    "url": "/mattaio-website/_nuxt/caa8d0c71a4b8d05945e.js",
    "revision": "ff1cf6e3208ed417c88c48a98ea122c4"
  },
  {
    "url": "/mattaio-website/_nuxt/d009c2712d49bb8b593b.js",
    "revision": "e865be1ac903ab0b7b6eb0210d34911f"
  },
  {
    "url": "/mattaio-website/_nuxt/ea27efbb263726cd9387.js",
    "revision": "51fe1b1b0b36a50e55d6db42facc779a"
  },
  {
    "url": "/mattaio-website/_nuxt/f0e099eb171be6ee732a.js",
    "revision": "6ec29e98818a85f6b485824255336dd9"
  },
  {
    "url": "/mattaio-website/_nuxt/f1306593a6050f2e94af.js",
    "revision": "b924c2bb214842e08302229cdaf948ac"
  },
  {
    "url": "/mattaio-website/_nuxt/f7153874e40308ba359d.js",
    "revision": "c634ec3ebe64f2ebf2ce3a4786ebb678"
  }
], {
  "cacheId": "Mattaio-Website",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/mattaio-website/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/mattaio-website/.*'), workbox.strategies.networkFirst({}), 'GET')
