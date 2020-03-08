import Vue from 'vue'
import Router from 'vue-router'
import Mixins from '@/view/mixins'
import Extends from '@/view/extends'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mixins',
      component: Mixins
    },
    {
      path: '/extends',
      name: 'extends',
      component: Extends
    }
  ]
})
