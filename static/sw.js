importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07ac10541f048fa4d628.js",
    "revision": "b61c3d0f67e4f34b5eb54f97c8589f29"
  },
  {
    "url": "/_nuxt/11ffca394d66b5df77bd.js",
    "revision": "beb7fa24aed261a6fb58c28ed3b9274e"
  },
  {
    "url": "/_nuxt/13826ff17e29c645362c.js",
    "revision": "0bca8d36955d0cc568b39f0b04b8076a"
  },
  {
    "url": "/_nuxt/1e61298af7d533a38451.js",
    "revision": "41818e190b3d6fa7280e7324f88c656f"
  },
  {
    "url": "/_nuxt/3a15e860f70a99aefe8b.js",
    "revision": "141e07a357cf72847257bf16513e8994"
  },
  {
    "url": "/_nuxt/413ab3e113d056eed5dd.js",
    "revision": "c39fb683f3d983306ed1882bbf0a9821"
  },
  {
    "url": "/_nuxt/550bed6ef3b0ab6f07aa.js",
    "revision": "e46291875db3ad1b5b88ed68062abe93"
  },
  {
    "url": "/_nuxt/62583ecbae955d66cfcf.js",
    "revision": "4f00fdb409201dec204142179a95db30"
  },
  {
    "url": "/_nuxt/63094fc5356b029cbd0b.js",
    "revision": "8177eaf502f0b4499946ca0098a62ba2"
  },
  {
    "url": "/_nuxt/6320deccdb3c64512ebe.js",
    "revision": "8d074077d2502e15033664ee140a98e5"
  },
  {
    "url": "/_nuxt/72def8ce3e6f743c1665.js",
    "revision": "aee418d1c97cf25bdb4e230ebd7774f6"
  },
  {
    "url": "/_nuxt/75779980d60eed7200db.js",
    "revision": "539bb6e2ed4003818ddfd5fd008d55fb"
  },
  {
    "url": "/_nuxt/83a22863058a536065e7.js",
    "revision": "a6daca0bb9d2f8cd0d6581e20fc57184"
  },
  {
    "url": "/_nuxt/898079cea4c149909946.js",
    "revision": "f8693ae733bfa30ad9181adc9269ff7e"
  },
  {
    "url": "/_nuxt/8a888ddac6ca048460ce.js",
    "revision": "7eea22b836a6b616667634848b8ab71a"
  },
  {
    "url": "/_nuxt/a508b6f4076b41c1c558.js",
    "revision": "4468eba4db38ce8cb130badfc50bc41f"
  },
  {
    "url": "/_nuxt/a85815800df6b1302618.js",
    "revision": "52d3c5faac06049b3bf0ae14f4503398"
  },
  {
    "url": "/_nuxt/aedab1eca064f742952f.js",
    "revision": "8f39552e6e575a0724cc5648780e9c94"
  },
  {
    "url": "/_nuxt/c1e688093b6ff829d508.js",
    "revision": "f2c6269346276ab74df731352bbf37e7"
  },
  {
    "url": "/_nuxt/ce3f2504afe16473a4d4.js",
    "revision": "102fc5792653d488b024847c31fbedea"
  },
  {
    "url": "/_nuxt/ebc4b39db395c470a8b3.js",
    "revision": "d475676b441b2d8bc7c7f2ddb1a17338"
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
