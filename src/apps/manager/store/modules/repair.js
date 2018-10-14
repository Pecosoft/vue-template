/* eslint-disable */
import updateObj from 'utils/updateObj'
import { repair } from '@/services'

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
    },
    ['DISPATCH'] (state, { id, picked }) {
      let list = state.list
      for (var i = 0, len = list.length; i < len; i++) {
        let item = list[i]
        if (item.id === id) {
          item.status = 1
          item.dispatch = picked
        }
      }
    }
  },
  actions: {
    async fetch ({ state }) {
      if (state.list.length) return state.list
      let res = await repair.fetch()
      state.list = res
      return res
    },
    async read ({ state }, id) {
      let idStr = String(id)
      let details = state.details
      let detail = details[idStr]
      if (detail) return detail
      let res = await repair.read(id)
      details[idStr] = res
      return res
    }
  }
}
