importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09e3c8ef9fa0c4264e26.js",
    "revision": "5af9e2ac2320e5554862e54fbf028b5a"
  },
  {
    "url": "/_nuxt/2916ce84ae2bcf0befcd.js",
    "revision": "4cff3d91348dff3db7709732de3188ac"
  },
  {
    "url": "/_nuxt/2e934d1bcfb77e394248.js",
    "revision": "9443002c5ba73522f1f2615af17b4a23"
  },
  {
    "url": "/_nuxt/35aaec3c13dc855317da.js",
    "revision": "a0fef6219d02ccbce7c5b190daca5746"
  },
  {
    "url": "/_nuxt/438e14af5f339d9789cd.js",
    "revision": "aecaf7f9f1dae5be9523da77e2bd0358"
  },
  {
    "url": "/_nuxt/44a589f9d4f8fba803d7.js",
    "revision": "c4504cbc57d8f6f4b0a793f47adc6362"
  },
  {
    "url": "/_nuxt/52ce493f690f396785b6.js",
    "revision": "464263369837d349fe6993f5ac8f5b6c"
  },
  {
    "url": "/_nuxt/5a3e226d3cb5c9499934.js",
    "revision": "4bc8292352fad77b7eecc317dd4c6d04"
  },
  {
    "url": "/_nuxt/61d83b7c367f319e0e5e.js",
    "revision": "9281b00049eb0ece26f2fd3591ecb45a"
  },
  {
    "url": "/_nuxt/6fd1b2ccc51c2c9912ed.js",
    "revision": "8f120306a0a118f9d2b3cfd3823609d4"
  },
  {
    "url": "/_nuxt/71fdc3f802bf5d0b4eaa.js",
    "revision": "f5a4d99cf6bd358d1ce2c9bc539e24fe"
  },
  {
    "url": "/_nuxt/745f2bea808324c551d6.js",
    "revision": "69e3d35983a1303ccd20874e0e009dc6"
  },
  {
    "url": "/_nuxt/7734b8e3684a907de591.js",
    "revision": "42ba812fb21eec5d9e36232da8f79218"
  },
  {
    "url": "/_nuxt/866bf74df9d07bd34967.js",
    "revision": "c35097d2331107625339a4f22e150f0e"
  },
  {
    "url": "/_nuxt/917b4aaa51f79c6b7c6c.js",
    "revision": "9e732351f1be5b6b64deacf0dc8b3dc5"
  },
  {
    "url": "/_nuxt/a454f4a103324624b9cb.js",
    "revision": "577a17c1a9bad55999ac67e356b1d49a"
  },
  {
    "url": "/_nuxt/a6f9b2f3b157c4fb4d98.js",
    "revision": "0655de020c1bae65a4520e63af684c89"
  },
  {
    "url": "/_nuxt/c22e3875cf54588a1f7c.js",
    "revision": "0e46273489750c0263ea66b76b10568b"
  },
  {
    "url": "/_nuxt/fc45c32411f07af721a9.js",
    "revision": "d345e5431a34ad98419c928a2f16b7b8"
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
