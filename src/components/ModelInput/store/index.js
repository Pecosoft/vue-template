import Vue from 'vue'
import Vuex from 'vuex'
import ProductPicker from './modules/ProductPicker'
import repair from './modules/repair'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ProductPicker,
    repair
  }
})

export default store
