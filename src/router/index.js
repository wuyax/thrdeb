import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/scroll',
    name: 'scroll',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/scroll.vue')
    }
  },
  {
    path: '/resize',
    name: 'resize',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/resize.vue')
    }
  },
  {
    path: '/params',
    name: 'params',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/params.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
