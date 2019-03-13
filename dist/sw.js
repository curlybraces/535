importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1ef2c39273890ff4837c.js",
    "revision": "5c34438f06a31a8a4b6505f61a8bf054"
  },
  {
    "url": "/_nuxt/6ac89f32849509094017.js",
    "revision": "44a48d803d7d76586a226af1edf31c30"
  },
  {
    "url": "/_nuxt/7aef144e7a8a9dc51d32.js",
    "revision": "58c1f47c88f3516e1b4d246ebaf941c2"
  },
  {
    "url": "/_nuxt/7d1136e439eab004cb41.js",
    "revision": "4656e397388e7593483dd3433dc6c82c"
  },
  {
    "url": "/_nuxt/960b731f63516fc6362f.js",
    "revision": "3b5e8be92c5d80c24c584805415d0da8"
  },
  {
    "url": "/_nuxt/d7c4b4d4ed678b9c8a93.js",
    "revision": "b313e2b81c886670bbb4d7e4ee5d0662"
  },
  {
    "url": "/_nuxt/fdf8acc4a1ba72c30d09.js",
    "revision": "793fa31ba2547b44acdce82a4b43fefc"
  },
  {
    "url": "/_nuxt/ffe0e6ce7f1a8db07039.js",
    "revision": "218ba8f39fc9d025d41d6585c825463a"
  }
], {
  "cacheId": "ses-dev-mode",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
