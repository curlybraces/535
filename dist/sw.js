importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/098152b08870ba7329b6.js",
    "revision": "94b1ff322bbdc49c40e8f199d815e8ce"
  },
  {
    "url": "/_nuxt/12840c29638451df9a1b.js",
    "revision": "a01caa713c713b6380342914f1922dae"
  },
  {
    "url": "/_nuxt/14c0dae7c1f759fa954d.js",
    "revision": "bd073daff1d8a77256216f2e2c20ea2e"
  },
  {
    "url": "/_nuxt/1fc463e08972bfad4df9.js",
    "revision": "7ea05a7c088bed33dc5172a801776e60"
  },
  {
    "url": "/_nuxt/22eff94449de5f2f9d57.js",
    "revision": "678d0f24d5e00ccf792eff544f3e30af"
  },
  {
    "url": "/_nuxt/3461b4407ae8807a324b.js",
    "revision": "bdef855503c2de6979bae3fcb70c6546"
  },
  {
    "url": "/_nuxt/3c981499c7fb82feb0a2.js",
    "revision": "8ae51cdb60ff4c6a24a5ec3c287a7e1a"
  },
  {
    "url": "/_nuxt/637689f7238a1dd22486.js",
    "revision": "d96587e1cd5610d4e074fe288f3e6404"
  },
  {
    "url": "/_nuxt/77cf5ede085d87302f6b.js",
    "revision": "578408f351c4d2c56fd600c453ec32e4"
  },
  {
    "url": "/_nuxt/8a5344678abda40a3ea5.js",
    "revision": "2aab30d0eedd95a64619593b73bfb39f"
  },
  {
    "url": "/_nuxt/8fc0baedacac064f904c.js",
    "revision": "12b79a054d79373968758252c7f0f895"
  },
  {
    "url": "/_nuxt/92a4e128a400080f68dd.js",
    "revision": "c60dd741cbf509219b7eaabe9325a08b"
  },
  {
    "url": "/_nuxt/953994ec26f91bee6bd8.js",
    "revision": "ebd1dd89d95e8b10eb63afd3bc4ce52e"
  },
  {
    "url": "/_nuxt/a6f9b2f3b157c4fb4d98.js",
    "revision": "0655de020c1bae65a4520e63af684c89"
  },
  {
    "url": "/_nuxt/a75456b9b4ae95104aa5.js",
    "revision": "37d24378da4df32b1407c6c3a9120d5c"
  },
  {
    "url": "/_nuxt/c8b83c54a690ab322fa7.js",
    "revision": "25933a585df129181de69b826894ed98"
  },
  {
    "url": "/_nuxt/d738c0ab14df2ef75bfe.js",
    "revision": "f977eb8f8090e7ca9f4b7b3861d79d83"
  },
  {
    "url": "/_nuxt/e8228725a09366d73dd4.js",
    "revision": "9f926feb579e4c2e3fed1f1f3ce9ec15"
  },
  {
    "url": "/_nuxt/fe8e5cfd5ddaf9b8fca7.js",
    "revision": "70750c2d93af7dad9f4c62cd643ba2c0"
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
