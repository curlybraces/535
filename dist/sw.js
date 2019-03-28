importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/007a90714d0fe84e021e.js",
    "revision": "5acc3aaaebb1b212d437ebb3ffb78066"
  },
  {
    "url": "/_nuxt/16968245e25ccdbd6ad6.js",
    "revision": "ce1dc1fd00dda4bf9be813bee29f36b1"
  },
  {
    "url": "/_nuxt/1bac84149c67f885850b.js",
    "revision": "fb1da85608250d37c6e745d705cf3f57"
  },
  {
    "url": "/_nuxt/49ef23227b0498325986.js",
    "revision": "da5f3407bae14677bed016d259a220c7"
  },
  {
    "url": "/_nuxt/5bfb9dc2947c15188cb9.js",
    "revision": "46afb3496f61523150c5f7e711e01146"
  },
  {
    "url": "/_nuxt/96e4cac524443bc0bfbe.js",
    "revision": "95fd4b7d59758f32455ea18d9b0ca0e0"
  },
  {
    "url": "/_nuxt/ae97186303cb0f2ff8af.js",
    "revision": "ff937722d25106ade38766b6af9c2517"
  },
  {
    "url": "/_nuxt/b17de028e14e1463db86.js",
    "revision": "25a64464a40b17f2c3d6a9b444e98201"
  },
  {
    "url": "/_nuxt/eee6eb52e084c89ffd81.js",
    "revision": "58cfa99c9fcf6b8bf774f288d2232d3b"
  },
  {
    "url": "/_nuxt/f4eb087be41d14a6cd56.js",
    "revision": "30d11720615959c94dea134021b22bf1"
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
