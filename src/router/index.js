import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/click',
    name: 'click',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/click.vue')
    }
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/scroll.vue')
    }
  },
  {
    path: '/resize',
    name: 'resize',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/resize.vue')
    }
  },
  {
    path: '/params',
    name: 'params',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/params.vue')
    }
  },
  {
    path: '/pfc',
    name: 'pfc',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/pfc.vue')
    }
  },
  {
    path: '/mask',
    name: 'mask',
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/imgmask.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
