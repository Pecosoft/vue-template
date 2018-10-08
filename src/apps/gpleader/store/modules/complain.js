/* eslint-disable */
import updateObj from 'utils/updateObj'
import { complain } from '@/services'

export default {
  namespaced: true,
  state: {
    serviceForm: {
      user_id: 1,
      cate: 2,
      contact: 0,
      description: ''
    },
    productForm: {
      user_id: 1,
      cate: 1,
      contact: 0,
      description: '',
      product_model: '',
      machine_sn: ''
    },
    list: [
    ],
    details: {}
  },
  mutations: {
    ['CHANGE'] (state, formData) {
      if (formData.cate == 1) {
        updateObj(state.productForm, formData)
      } else {
        updateObj(state.serviceForm, formData)
      }
    }
  },
  actions: {
    async fetch ({ state, commit }) {
      if (state.list.length) return state.list
      let res = await complain.fetch()
      state.list = res
      return res
    },
    async read ({ state }, id) {
      let idStr = String(id)
      let details = state.details
      let detail = details[idStr]
      if (detail) return detail
      let res = await complain.read(id)
      details[idStr] = res
      return res
    }
  }
}
