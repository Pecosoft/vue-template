/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from 'components/ModelInput/router'
import 'style/peco-ui.scss'

import Page from 'components/Page'
import ProfileHeader from 'components/ProfileHeader'
import Grid from 'components/Grid'
import Pannel from 'components/Pannel'
import OrderList from 'components/OrderList'
import { InfoCard } from 'components/Card'
import { ModelInput } from 'components/ModelInput'
import Search from 'components/Search'

Vue.use(Page)
Vue.use(ProfileHeader)
Vue.use(Grid)
Vue.use(Pannel)
Vue.use(OrderList)
Vue.use(InfoCard)
Vue.use(ModelInput)
Vue.use(Search)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
