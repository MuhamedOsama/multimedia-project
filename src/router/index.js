import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VideoDetails from '../views/VideoDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/VideoDetails/:id',
    name: 'VideoDetails',
    component: function () {
          return import('../views/VideoDetails.vue')
        },
    props: true,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
