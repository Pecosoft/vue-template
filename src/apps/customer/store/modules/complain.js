/* eslint-disable */
import updateObj from 'utils/updateObj'
import { complain } from '@/services'

export default {
  namespaced: true,
  state: {
    serviceForm: {
      cate: 2,
      contact: 0,
      description: ''
    },
    productForm: {
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
    },
    ['PUT_USER_ID'] (state, user_id) {
      state.serviceForm.user_id = user_id
      state.productForm.user_id = user_id
    }
  },
  actions: {
    async fetch ({ state, commit }, force=false) {
      if (!force && state.list.length) return state.list
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
