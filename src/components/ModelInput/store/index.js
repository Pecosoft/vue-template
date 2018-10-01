import Vue from 'vue'
import Vuex from 'vuex'
import ProductPicker from './modules/ProductPicker'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ProductPicker
  }
})

export default store
