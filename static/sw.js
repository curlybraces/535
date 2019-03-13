importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1125da5be1c0be7d09ef.js",
    "revision": "88420afec5f407cb14b09b1939be8197"
  },
  {
    "url": "/_nuxt/114035593092671ec8db.js",
    "revision": "1fd95714e9c00294ceaf500ae3af228c"
  },
  {
    "url": "/_nuxt/3a70ea3b0f3e7da296fa.js",
    "revision": "1f6fa5373240444d53d4cb8f0ce9f48a"
  },
  {
    "url": "/_nuxt/3e270b3f7bb7f0d5e37b.js",
    "revision": "83b5ad9dca993763f70b4d4b5dda3113"
  },
  {
    "url": "/_nuxt/6660eb904f053e546cd3.js",
    "revision": "9271fdabb7b92f300dc15026671043ab"
  },
  {
    "url": "/_nuxt/871a7662ec7cccaf2e32.js",
    "revision": "2a36017fb6daadd9148317f48c9f2be5"
  },
  {
    "url": "/_nuxt/af4fc7aeb33228d61971.js",
    "revision": "41fc811a7228506eda5348ba773f6b70"
  },
  {
    "url": "/_nuxt/c9b0cf9efb1bc2a92ea1.js",
    "revision": "a6e9afe8d402765a2fafe5a1ecbfecdc"
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
