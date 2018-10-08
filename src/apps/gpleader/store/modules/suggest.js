/* eslint-disable */
import updateObj from 'utils/updateObj'
import { suggest } from '@/services'

export default {
  namespaced: true,
  state: {
    form: {
      user_id: 1,
      product_id: 0,
      description: '',
      avatar: 0,
      voice: 0
    },
    list: [
    ],
    details: {}
  },
  mutations: {
    ['CHANGE'] (state, formData) {
      updateObj(state.form, formData)
    }
  },
  actions: {
    async fetch ({ state }) {
      if (state.list.length) return state.list
      let res = await suggest.fetch()
      state.list = res
      return res
    },
    async read ({ state }, id) {
      let idStr = String(id)
      let details = state.details
      let detail = details[idStr]
      if (detail) return detail
      let res = await suggest.read(id)
      details[idStr] = res
      return res
    }
  }
}
// action context: { state, commit, dispatch, getters }
