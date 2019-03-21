importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07254d9bb443a99fed7a.js",
    "revision": "cab802aeb8b36f814b2e3f53be65d42b"
  },
  {
    "url": "/_nuxt/1b3ce304e382b01807a0.js",
    "revision": "37d16fe826b02787af3c1e0d38578e37"
  },
  {
    "url": "/_nuxt/387251abea366a432f3a.js",
    "revision": "a14cc228068a5f62144a97685c24217f"
  },
  {
    "url": "/_nuxt/555485d086f590eb66c5.js",
    "revision": "c461656b0ba6a71dc8cac23f7cddaf89"
  },
  {
    "url": "/_nuxt/57824fe72b5e70bba357.js",
    "revision": "8c28557addafbd4faa8741e85bbd77b4"
  },
  {
    "url": "/_nuxt/5aff307e9373c6794017.js",
    "revision": "8ef5e239638dc03c6881915998bc4eb7"
  },
  {
    "url": "/_nuxt/685e0df09bc06050b3da.js",
    "revision": "738c0d4778885000b64a76fade63fdad"
  },
  {
    "url": "/_nuxt/7814cdc02e3157f09ddb.js",
    "revision": "14b0c77e70c7dd6c7800a358cc08145a"
  },
  {
    "url": "/_nuxt/7dd72d9a2d7048653e3d.js",
    "revision": "ffa21dd21a12953cac5e16db2ecc8e5c"
  },
  {
    "url": "/_nuxt/7e2be7e2ead5c51d1e4a.js",
    "revision": "ad525cb8701ddf2a1d7abb4bc2d7df06"
  },
  {
    "url": "/_nuxt/8565fa43f148c04d5669.js",
    "revision": "62983ac9ea3b8a6e7ada3d5512a15881"
  },
  {
    "url": "/_nuxt/9bd42526de41f1abc1a4.js",
    "revision": "757b1e37eda339ef258d63e30250d95d"
  },
  {
    "url": "/_nuxt/9c822cbc120432dcbaba.js",
    "revision": "9c039abf40e3003506b60f4e5a73ab89"
  },
  {
    "url": "/_nuxt/c1dfb7ba8430b1982a18.js",
    "revision": "6fd0fe1e46151845b7eb04b894bbc617"
  },
  {
    "url": "/_nuxt/c4d80abfe50a7754ba5e.js",
    "revision": "a9eb9b583cd08de6d0fa0c39c73136ae"
  },
  {
    "url": "/_nuxt/c692ee9c13b3e0f5721f.js",
    "revision": "9699dd12b16c67feb5c7f65dbdc29854"
  },
  {
    "url": "/_nuxt/d906eddea8f0ec0ff390.js",
    "revision": "a302f53222fe88e3722fe4e9383beb9f"
  },
  {
    "url": "/_nuxt/e25efa679d720b62b0ac.js",
    "revision": "b1c6f2d4f531dc4d2ad433a54fe251f8"
  },
  {
    "url": "/_nuxt/e75fb3bb22fda39e84e2.js",
    "revision": "b9dd6d46d4e14c94eac5e2dc30f1d66f"
  },
  {
    "url": "/_nuxt/eaa748e81760b4101d29.js",
    "revision": "993d0c5eff9e84e98215dcc6dd4735c3"
  },
  {
    "url": "/_nuxt/f704819cd8dc07d8bd92.js",
    "revision": "27f74c7d275462451aba04453d399451"
  },
  {
    "url": "/_nuxt/f9390ae31742ffbbbf8e.js",
    "revision": "dfdf33ccc4b87238aeb2c92e91d2aa7d"
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
