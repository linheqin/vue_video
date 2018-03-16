import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import order_list from '@/components/order/order_list'
import classification from '@/components/classification/classification'
import me from '@/components/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/order',
      name: 'order',
      component: order_list
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
