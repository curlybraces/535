importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/007b41eb0c9a70bc4803.js",
    "revision": "1e7f382cecc8b051f417bc8968b53f62"
  },
  {
    "url": "/_nuxt/072c0d048a99cc7b22bb.js",
    "revision": "bd088db0337d9b28b82ddbd43f6d6497"
  },
  {
    "url": "/_nuxt/08d5d16186a8fa734a50.js",
    "revision": "6153aa2faa81876ffa3ff648841a5a23"
  },
  {
    "url": "/_nuxt/18ff5a08f32d90b2ea35.js",
    "revision": "2023feeafd880de1de80930a418fe71f"
  },
  {
    "url": "/_nuxt/36ef511cdd2895f7fda0.js",
    "revision": "cff1352504d758d8d6bd1d48976f42a7"
  },
  {
    "url": "/_nuxt/50a0882c340a57e7772a.js",
    "revision": "b6c34ab14d6eb0ca2a89ef22162b26f9"
  },
  {
    "url": "/_nuxt/6b8db8018f1a14cec671.js",
    "revision": "b92650804ec25ec8994be406994431dc"
  },
  {
    "url": "/_nuxt/6bccb349da4b94a5bc98.js",
    "revision": "dbf8b4d1fbc1d78f0572fd72c16bb31b"
  },
  {
    "url": "/_nuxt/77f3ba590344aa96115a.js",
    "revision": "089532ab36721f04b7d14ab59d8c88aa"
  },
  {
    "url": "/_nuxt/7fc8f2f90145d65b4c17.js",
    "revision": "ec0c9bee17bc08692f957e1a82f7e752"
  },
  {
    "url": "/_nuxt/85eab3a8c350e4c6c37c.js",
    "revision": "c3ab4834658ea9ac77b262c4c14c03ee"
  },
  {
    "url": "/_nuxt/a54aff0369a8df92272f.js",
    "revision": "de4725aff9e165c82f9666d2130ea134"
  },
  {
    "url": "/_nuxt/b55001ea59e95dd4a88c.js",
    "revision": "50e54571d026e638b9ee07faa59fdc5f"
  },
  {
    "url": "/_nuxt/ce7dc0839cac4a47e227.js",
    "revision": "884b6e68fc6152d2e8f21a016e872b1e"
  },
  {
    "url": "/_nuxt/d30a9c0fef5e4c606861.js",
    "revision": "0028ebe8faaf82e0c79c50e06bd843cd"
  },
  {
    "url": "/_nuxt/d8683dc8d4d0cf399e24.js",
    "revision": "aebf3fa733eb4b48f5c80bc92741f73d"
  },
  {
    "url": "/_nuxt/d910eb6c6bd517a2a2a0.js",
    "revision": "6d8913e521beb82b581d660a595176ee"
  },
  {
    "url": "/_nuxt/f27966b7c278232ac0fd.js",
    "revision": "ed5973bd7cc80a1efeec585008633a58"
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
