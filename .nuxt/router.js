import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5099acfa = () => interopDefault(import('../pages/a.vue' /* webpackChunkName: "pages/a" */))
const _50a7c47b = () => interopDefault(import('../pages/b.vue' /* webpackChunkName: "pages/b" */))
const _1ffb8e22 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _63f9e315 = () => interopDefault(import('../pages/token/index.vue' /* webpackChunkName: "pages/token/index" */))
const _ac8be72a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/a",
    component: _5099acfa,
    name: "a"
  }, {
    path: "/b",
    component: _50a7c47b,
    name: "b"
  }, {
    path: "/faq",
    component: _1ffb8e22,
    name: "faq"
  }, {
    path: "/token",
    component: _63f9e315,
    name: "token"
  }, {
    path: "/",
    component: _ac8be72a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
