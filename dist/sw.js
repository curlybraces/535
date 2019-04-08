importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0123492fba742b9655cc.js",
    "revision": "13792bbac04c01a25430cead5fa1d5e4"
  },
  {
    "url": "/_nuxt/09af7f5a5047e84afc81.js",
    "revision": "67c4e8d01b078cf8316cfd0e58b46cab"
  },
  {
    "url": "/_nuxt/112e9af5032dc5fb56ae.js",
    "revision": "30aaf2c08f49b25ba2c6a9a8db747fde"
  },
  {
    "url": "/_nuxt/17cc6fee0e41b4e0e7e5.js",
    "revision": "72c5e6b98836c97c6daf4abab86c3dfb"
  },
  {
    "url": "/_nuxt/2b37db0d8ba25e67e8ed.js",
    "revision": "48ba18debd6527dd15a50a8510724241"
  },
  {
    "url": "/_nuxt/38187d45ec8a60dfa08b.js",
    "revision": "13ff9fe89c0c36c425e646c60962c552"
  },
  {
    "url": "/_nuxt/487d488bcf3c50338c03.js",
    "revision": "c553f765ddb78bc1b01b17d0ec06754d"
  },
  {
    "url": "/_nuxt/5485577429e455b3e340.js",
    "revision": "57001eedde64d3caeaa6a92364166f46"
  },
  {
    "url": "/_nuxt/5fba2d0495c091668b86.js",
    "revision": "4e3ba7b042ef676fcce0d85861dade05"
  },
  {
    "url": "/_nuxt/638c0586081a8d60a449.js",
    "revision": "36b10461afce3bcf144d15e64d1ffbae"
  },
  {
    "url": "/_nuxt/651e74d192958b33a5c2.js",
    "revision": "ef3b5abf0703420e396e7e4075fbba97"
  },
  {
    "url": "/_nuxt/68b019b5c2458b90dd07.js",
    "revision": "c5a26bd640b6d89e26d83202b63ef161"
  },
  {
    "url": "/_nuxt/73466677c35771a15dad.js",
    "revision": "3cfc84d146ff85fc1c6ed70b3ef93aae"
  },
  {
    "url": "/_nuxt/84968b66c77cfc0fdf0b.js",
    "revision": "0735ca2820b250372fd564a210cf7d6d"
  },
  {
    "url": "/_nuxt/9a03025bbd2540623122.js",
    "revision": "c31b2ded595ac131de1ae7fb8b581303"
  },
  {
    "url": "/_nuxt/aa035658059a5c9d6934.js",
    "revision": "cbb030e6d2b86a033ed3708e6c6c0ce0"
  },
  {
    "url": "/_nuxt/ad6bb1cb953f40608cea.js",
    "revision": "6189d40b1d13ed636dafe735849013dd"
  },
  {
    "url": "/_nuxt/ae9bb3c39930886e2756.js",
    "revision": "9dac596425fac8880b430b49a799bcf9"
  },
  {
    "url": "/_nuxt/c653665154db765adefb.js",
    "revision": "bff66c84b4c65b0067987149dfe21dfd"
  },
  {
    "url": "/_nuxt/d53dd65a6bc920bd89a6.js",
    "revision": "8b06e77b40c893f560883ce411964cca"
  },
  {
    "url": "/_nuxt/e1c2da073176052ca074.js",
    "revision": "3ae0ed6e1aa20b06aff62f194595ee6a"
  },
  {
    "url": "/_nuxt/e79e447dedc8e0d09a03.js",
    "revision": "d9bce2124138c11cf44ee5a271dd553e"
  },
  {
    "url": "/_nuxt/fd0ee061b652daf86fe3.js",
    "revision": "96e752ee8c6501620ab1758e9a9e194a"
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
