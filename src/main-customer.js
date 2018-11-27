// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VConsole from 'vconsole'
import App from './App'
import router from 'customer/router'
import store from 'customer/store'
import 'style/peco-ui.scss'
import 'utils/polyfill'

import Page from 'components/Page'
import ProfileHeader from 'components/ProfileHeader'
import Grid from 'components/Grid'
import Pannel from 'components/Pannel'
import OrderList from 'components/OrderList'
import { Card, InfoCard } from 'components/Card'
import Cell from 'components/Cell'
import { ModelInput } from 'components/ModelInput'
import Search from 'components/Search'
import GroupList from 'components/GroupList'
import Button from 'components/Button'
import Create from 'components/Create'
import Dialog from 'components/Dialog'
import Progress from 'components/Progress'

// Global plugins
import LoadingPlugin from 'plugins/loading'
import ToastPlugin from 'plugins/toast'

import { AlertPlugin, TransferDom } from 'vux'

Vue.use(AlertPlugin)
Vue.directive('transfer-dom', TransferDom)

Vue.use(Page)
Vue.use(ProfileHeader)
Vue.use(Grid)
Vue.use(Pannel)
Vue.use(OrderList)
Vue.use(Card)
Vue.use(InfoCard)
Vue.use(Cell)
Vue.use(ModelInput)
Vue.use(Search)
Vue.use(GroupList)
Vue.use(Button)
Vue.use(Create)
Vue.use(Dialog)
Vue.use(Progress)

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  // require('./services/mock').default.bootstrap()
}

/* eslint-disable no-new */
// new VConsole()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
