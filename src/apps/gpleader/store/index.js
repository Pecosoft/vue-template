import Vue from 'vue'
import Vuex from 'vuex'
import ProductPicker from 'components/ModelInput/store/modules/ProductPicker'
import repair from './modules/repair'
import complain from './modules/complain'
import dispatch from './modules/dispatch'
import user from './modules/user'
import weixin from './modules/weixin'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ProductPicker,
    repair,
    complain,
    dispatch,
    user,
    weixin
  }
})

export default store
