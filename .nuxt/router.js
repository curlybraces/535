import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0faea314 = () => interopDefault(import('../pages/3d.vue' /* webpackChunkName: "pages/3d" */))
const _716a9a90 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _ea27f5e0 = () => interopDefault(import('../pages/city.vue' /* webpackChunkName: "pages/city" */))
const _0d3268f6 = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _9e7dca76 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _12e09c34 = () => interopDefault(import('../pages/page.vue' /* webpackChunkName: "pages/page" */))
const _383364d0 = () => interopDefault(import('../pages/pageprys.vue' /* webpackChunkName: "pages/pageprys" */))
const _31fae506 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/3d",
      component: _0faea314,
      name: "3d"
    }, {
      path: "/about",
      component: _716a9a90,
      name: "about"
    }, {
      path: "/city",
      component: _ea27f5e0,
      name: "city"
    }, {
      path: "/index2",
      component: _0d3268f6,
      name: "index2"
    }, {
      path: "/inspire",
      component: _9e7dca76,
      name: "inspire"
    }, {
      path: "/page",
      component: _12e09c34,
      name: "page"
    }, {
      path: "/pageprys",
      component: _383364d0,
      name: "pageprys"
    }, {
      path: "/",
      component: _31fae506,
      name: "index"
    }],

    fallback: false
  })
}
