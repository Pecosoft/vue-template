// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'customer/router'
import 'style/peco-ui.scss'

import ProfileHeader from 'components/ProfileHeader'
import Grid from 'components/Grid'
import OrderList from 'components/OrderList'

Vue.use(ProfileHeader)
Vue.use(Grid)
Vue.use(OrderList)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
