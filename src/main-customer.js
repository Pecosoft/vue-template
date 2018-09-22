// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'customer/router'
import 'style/peco-ui.scss'

import Page from 'components/Page'
import ProfileHeader from 'components/ProfileHeader'
import Grid from 'components/Grid'
import Pannel from 'components/Pannel'
import OrderList from 'components/OrderList'

Vue.use(Page)
Vue.use(ProfileHeader)
Vue.use(Grid)
Vue.use(Pannel)
Vue.use(OrderList)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
