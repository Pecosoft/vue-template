/* eslint-disable */
import updateObj from 'utils/updateObj'
import { repair } from '@/services'

export default {
  namespaced: true,
  state: {
    form: {
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
    ['PUT_USER_ID'] (state, user_id) {
      state.form.user_id = user_id
    },
    ['DELETE'] (state, repairD) {
      let idx = state.list.indexOf(repairD)
      if (idx !== -1) {
        state.list.splice(idx, 1)
      }
    }
  },
  actions: {
    async fetch ({ state }, force=false) {
      if (!force && state.list.length) return state.list
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
    },
    async delete ({ state, commit }, repairD) {
      let res = await repair.delete(repairD.id)
      commit('DELETE', repairD)
      return res
    }
  }
}
