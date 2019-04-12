importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2dc2b0883df98c15a64e.js",
    "revision": "427a15d5b881080b75b3dc79fc31cd40"
  },
  {
    "url": "/_nuxt/3528b79b147828e50028.js",
    "revision": "01071b9989e4bcf26aacf9dcd92ab9bf"
  },
  {
    "url": "/_nuxt/3ba0ca6269222b5f3b6d.js",
    "revision": "82a4cebf465cd0f58c6e7e2040b2b953"
  },
  {
    "url": "/_nuxt/75f21ce058b449e43df4.js",
    "revision": "75e04b1af61d00526c177c80bcfc21b5"
  },
  {
    "url": "/_nuxt/7fb0ca891b7d2a20d515.js",
    "revision": "6171e6366d2f4cfbe7af7b90153dcae1"
  },
  {
    "url": "/_nuxt/83f014e2a3b6edec23ef.js",
    "revision": "600b013d3f612b14a50b465c24e86aa4"
  },
  {
    "url": "/_nuxt/937408f58924f395445d.js",
    "revision": "e01aa38796df59c3e94a91710e73d44d"
  },
  {
    "url": "/_nuxt/af83a9e3c6fbc480ebca.js",
    "revision": "9e7919643a01e6c5ca79b431210568e8"
  },
  {
    "url": "/_nuxt/d18ad1725d34984f001b.js",
    "revision": "fe733e9d00d1932d4921a1a66bf73bfe"
  },
  {
    "url": "/_nuxt/d72709cb21830721ce74.js",
    "revision": "d2f6f4ade3fa871cb3932a053a8a38e9"
  },
  {
    "url": "/_nuxt/da738bd39119966d8c62.js",
    "revision": "84bd75e9ad92c7035d721c33d7231826"
  },
  {
    "url": "/_nuxt/fdd7453ce0d637edf885.js",
    "revision": "5e340b62df474d66c5cf500fdd2e106f"
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
