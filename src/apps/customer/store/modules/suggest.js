/* eslint-disable */
import updateObj from 'utils/updateObj'
import { suggest } from '@/services'

export default {
  namespaced: true,
  state: {
    form: {
      product_id: 0,
      description: '',
      contact: ''
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
    ['PUT_CONTACT'] (state, contact) {
      state.form.contact = contact
    }
  },
  actions: {
    async fetch ({ state }, force=false) {
      if (!force && state.list.length) return state.list
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
