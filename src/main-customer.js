// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'customer/router'
import store from 'customer/store'
import 'style/peco-ui.scss'

import Page from 'components/Page'
import ProfileHeader from 'components/ProfileHeader'
import Grid from 'components/Grid'
import Pannel from 'components/Pannel'
import OrderList from 'components/OrderList'
import { InfoCard } from 'components/Card'
import { ModelInput } from 'components/ModelInput'
import Search from 'components/Search'
import GroupList from 'components/GroupList'

Vue.use(Page)
Vue.use(ProfileHeader)
Vue.use(Grid)
Vue.use(Pannel)
Vue.use(OrderList)
Vue.use(InfoCard)
Vue.use(ModelInput)
Vue.use(Search)
Vue.use(GroupList)

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  require('./services/mock').default.bootstrap()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
