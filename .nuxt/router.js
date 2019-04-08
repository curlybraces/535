import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _507eba15 = () => interopDefault(import('../pages/3d.vue' /* webpackChunkName: "pages/3d" */))
const _7ffef9a9 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _612bf8f6 = () => interopDefault(import('../pages/career/index.vue' /* webpackChunkName: "pages/career/index" */))
const _25eda4ef = () => interopDefault(import('../pages/city.vue' /* webpackChunkName: "pages/city" */))
const _4b0020b8 = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _a43b87da = () => interopDefault(import('../pages/page.vue' /* webpackChunkName: "pages/page" */))
const _442ef077 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _466dfab8 = () => interopDefault(import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */))
const _a1de7866 = () => interopDefault(import('../pages/strapi.vue' /* webpackChunkName: "pages/strapi" */))
const _5ad8aebc = () => interopDefault(import('../pages/testing.vue' /* webpackChunkName: "pages/testing" */))
const _d9bd5b5e = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _3a3d232d = () => interopDefault(import('../pages/career/_id.vue' /* webpackChunkName: "pages/career/_id" */))
const _4e46b6c2 = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _7f3f5e0c = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
const _a7962d04 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _507eba15,
      name: "3d"
    }, {
      path: "/blog",
      component: _7ffef9a9,
      name: "blog"
    }, {
      path: "/career",
      component: _612bf8f6,
      name: "career"
    }, {
      path: "/city",
      component: _25eda4ef,
      name: "city"
    }, {
      path: "/index2",
      component: _4b0020b8,
      name: "index2"
    }, {
      path: "/page",
      component: _a43b87da,
      name: "page"
    }, {
      path: "/portfolio",
      component: _442ef077,
      name: "portfolio"
    }, {
      path: "/service",
      component: _466dfab8,
      name: "service"
    }, {
      path: "/strapi",
      component: _a1de7866,
      name: "strapi"
    }, {
      path: "/testing",
      component: _5ad8aebc,
      name: "testing"
    }, {
      path: "/blog/:id",
      component: _d9bd5b5e,
      name: "blog-id"
    }, {
      path: "/career/:id",
      component: _3a3d232d,
      name: "career-id"
    }, {
      path: "/portfolio/:id",
      component: _4e46b6c2,
      name: "portfolio-id"
    }, {
      path: "/service/:id",
      component: _7f3f5e0c,
      name: "service-id"
    }, {
      path: "/",
      component: _a7962d04,
      name: "index"
    }],

    fallback: false
  })
}
