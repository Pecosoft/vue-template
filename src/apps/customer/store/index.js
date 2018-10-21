import Vue from 'vue'
import Vuex from 'vuex'
import ProductPicker from 'components/ModelInput/store/modules/ProductPicker'
import repair from './modules/repair'
import complain from './modules/complain'
import suggest from './modules/suggest'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ProductPicker,
    repair,
    complain,
    suggest,
    user
  }
})

export default store
