importScripts('/mattaio-website/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mattaio-website/_nuxt/30f337892183dc421c9e.js",
    "revision": "d57daf58f375d5c24bb26bc581b5be51"
  },
  {
    "url": "/mattaio-website/_nuxt/56b19ed25f33e1cddcf4.js",
    "revision": "536a1a6fe3616ba81aa61e5df0527d8c"
  },
  {
    "url": "/mattaio-website/_nuxt/7c4dc42fdcdf3390d456.js",
    "revision": "577b11b8210cb25edf0175095877c144"
  },
  {
    "url": "/mattaio-website/_nuxt/7d62b1eb674eb3feae1e.js",
    "revision": "a9f43a20d61c8cc6e72ef8e1fa7a4193"
  },
  {
    "url": "/mattaio-website/_nuxt/8e4afcf3423814fd3db7.js",
    "revision": "24d2caddd7cd367bbdefd9d89a632c5b"
  },
  {
    "url": "/mattaio-website/_nuxt/b6a9953b0951c2699e1a.js",
    "revision": "8ffae850b2a82e62dc9f7bc45067af8a"
  },
  {
    "url": "/mattaio-website/_nuxt/ccd5b0fb821a375c0ee6.js",
    "revision": "8c631d2fe4d3590cc3cfac480fb34438"
  },
  {
    "url": "/mattaio-website/_nuxt/d978ff3fe80826028bc1.js",
    "revision": "f60cdc297836e858ac4686277cafa16d"
  },
  {
    "url": "/mattaio-website/_nuxt/dea49cd0ce363c216eb1.js",
    "revision": "e5f4651414073fc239ecf45430b7249a"
  },
  {
    "url": "/mattaio-website/_nuxt/fb8347e16762594f30b9.js",
    "revision": "3b659c708406f8c2a268678936ed2d00"
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
