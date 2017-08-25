import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/pages/Recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/Recommend',
      component: Recommend
    }
  ]
})
