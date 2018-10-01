/* eslint-disable */
import { product } from '@/services'

export default {
  namespaced: true,
  state: {
    picked: false,
    srcData: []
  },
  mutations: {
    ['CHANGE_PICKED'] (state, product) {
      state.picked = product
    }
  },
  actions: {
    async fetch ({ state, commit }) {
      if (state.srcData.length) return state.srcData
      let res = await product.fetch()
      state.srcData = res
      return res
    }
  }
}
