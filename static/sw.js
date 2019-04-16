importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0864cad39018138f0c00.js",
    "revision": "034c411bc04aaea1dd1283201a347e6b"
  },
  {
    "url": "/_nuxt/2bf6e7270ca2318266aa.js",
    "revision": "8cbb92de8bffb3af756cc34ddd072f0e"
  },
  {
    "url": "/_nuxt/385a312edbd86268ca12.js",
    "revision": "266a1d44c556c9bc22e2680b5482d75a"
  },
  {
    "url": "/_nuxt/47c4f6698b03100ce0ad.js",
    "revision": "a16fb95b2fc1ab5a4438799f0b813c90"
  },
  {
    "url": "/_nuxt/4dc0b2cf586077c57920.js",
    "revision": "c96560034e732af1a97f3f72cdeff4e2"
  },
  {
    "url": "/_nuxt/6f4e4982c31ce8819505.js",
    "revision": "6d0ef6dbb5759c32bf0ba1e9887758ba"
  },
  {
    "url": "/_nuxt/7fdc64cbd277832e89c0.js",
    "revision": "6f49d4fc1dd1eb19c7e0db1621ae3f4f"
  },
  {
    "url": "/_nuxt/af9779e97feedae6e9ff.js",
    "revision": "1e94b7d481c15207f1f3af00e5341aba"
  },
  {
    "url": "/_nuxt/beb068611692523bb7da.js",
    "revision": "5464abf29c5cf015876840d94676c04a"
  },
  {
    "url": "/_nuxt/cf72a6d02d892a105cc1.js",
    "revision": "c898d1f5d8826693ebb0c09d356a0621"
  },
  {
    "url": "/_nuxt/f8c13064c38a35a9bb64.js",
    "revision": "9453475c9d8b67b00942d60ee8d81299"
  },
  {
    "url": "/_nuxt/ffb67ee87896f3bbd1e9.js",
    "revision": "3c9dc42a39f1075adc98259aaaa99322"
  }
], {
  "cacheId": "synergy-efficiency-solutions",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
