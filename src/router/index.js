import Vue from 'vue'
import VueRouter from 'vue-router'

import paths from './paths'

function route (path, view, name) {
  return {
    name: name || view,
    path,
    component:  function (resolve) { require([`@/components/views/${view}.vue`], resolve); }
  }
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: paths.map(path => route(path.path, path.view, path.name)).concat([
    { path: '*', redirect: '/dashboard' }
  ]),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

export default router
