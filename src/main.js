/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from 'components/ModelInput/router'
import store from 'components/ModelInput/store'
import 'style/peco-ui.scss'

// Global components
import Page from 'components/Page'
import ProfileHeader from 'components/ProfileHeader'
import Grid from 'components/Grid'
import Pannel from 'components/Pannel'
import OrderList from 'components/OrderList'
import { InfoCard } from 'components/Card'
import { ModelInput } from 'components/ModelInput'
import Search from 'components/Search'
import GroupList from 'components/GroupList'
import Button from 'components/Button'
import Create from 'components/Create'
import Dialog from 'components/Dialog'

// Global plugins
import LoadingPlugin from 'plugins/loading'
import ToastPlugin from 'plugins/toast'

Vue.use(Page)
Vue.use(ProfileHeader)
Vue.use(Grid)
Vue.use(Pannel)
Vue.use(OrderList)
Vue.use(InfoCard)
Vue.use(ModelInput)
Vue.use(Search)
Vue.use(GroupList)
Vue.use(Button)
Vue.use(Create)
Vue.use(Dialog)

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  require('./services/mock').default.bootstrap();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
