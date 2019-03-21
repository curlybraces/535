importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08a3c1c6b33b0edf78ec.js",
    "revision": "1fbb816c2f2c599b819e839102c04e19"
  },
  {
    "url": "/_nuxt/15a1428cf9f81a2df469.js",
    "revision": "017458204c13a7b6785e175a701593c2"
  },
  {
    "url": "/_nuxt/213a55061f7a914d3a45.js",
    "revision": "7508f100c91ed8f9b1a7454bd706b34b"
  },
  {
    "url": "/_nuxt/2d9c056e8bdf92fe210b.js",
    "revision": "9ae44cb0fada041de342eb5bbc6bde9b"
  },
  {
    "url": "/_nuxt/32e1cfbeb03b12698ad6.js",
    "revision": "dd756845496889e4fbb3f43e6aeb55a6"
  },
  {
    "url": "/_nuxt/347178168ddf959e38c9.js",
    "revision": "7824eb0d565e2f47ca30430e9c03ae11"
  },
  {
    "url": "/_nuxt/3d740d89003683493d33.js",
    "revision": "f12a4d8c91b2a9cce317a7af105ce701"
  },
  {
    "url": "/_nuxt/41b5719a6e43a36dfd83.js",
    "revision": "a32a2d674bde1fe12200989c2a1e16f3"
  },
  {
    "url": "/_nuxt/50120f897c978b4455d0.js",
    "revision": "2e3eb37d41dc3310b4cc0d9a30d72ec4"
  },
  {
    "url": "/_nuxt/70eb985bba8d52c75326.js",
    "revision": "94be55574a84b0f560edee968cd1796a"
  },
  {
    "url": "/_nuxt/7ee6fbdad0d2453f7536.js",
    "revision": "d2c72bee0f32bb9dcf6e45989c97a3eb"
  },
  {
    "url": "/_nuxt/99ccf848f268f8e2cae0.js",
    "revision": "6cee9b92b85d015d525f1057cc8a141d"
  },
  {
    "url": "/_nuxt/a2298ea606817fdd8b97.js",
    "revision": "ce6ac4a64cfac45356bea3983f18a5e1"
  },
  {
    "url": "/_nuxt/b0f0db833cdf7db562bd.js",
    "revision": "276c10e4c898d6da07bfa7908be5ec16"
  },
  {
    "url": "/_nuxt/b9e64b1fc45c29c01ac4.js",
    "revision": "a86f1d262b340831320744c7a709e6f2"
  },
  {
    "url": "/_nuxt/c36a5e10e47233fa0d83.js",
    "revision": "7612e4360a6d181576074de85cba422f"
  },
  {
    "url": "/_nuxt/cd2991f14de5766d5a8d.js",
    "revision": "f459e8b467bf52c727950e1504c197d2"
  },
  {
    "url": "/_nuxt/d619d0c562bf093fab6f.js",
    "revision": "07359db63dc8cdfafbaaefff031273de"
  },
  {
    "url": "/_nuxt/e397bcc2de01c24b2a6c.js",
    "revision": "ee8008e5af40350b3291ef2d91df0f9e"
  },
  {
    "url": "/_nuxt/e9328db2edcd3b8d1d38.js",
    "revision": "50a141939bc84d4f45a36898b675b012"
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
