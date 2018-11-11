/* eslint-disable */
import auth from '@/services/auth'
import { user, customer } from '@/services'

export default {
  namespaced: true,
  state: {
    user: null,
    detail: null
  },
  mutations: {
  },
  actions: {
    async read ({ state }, force=false) {
      let user = state.user
      if (!force && user) return user
      let res = await auth.user('customer')
      state.user = res
      return res
    },
    async register ({ state }, formData) {
      let res = await user.update(state.user.user_id, formData)
      return res
    },
    async login ({ state }, formData) {
      let res = await user.login(formData)
      return res
    },
    async saveProfile ({ state }, formData) {
      let res = await customer.update(state.user.user_id, formData)
      return res
    },
    async detail ({ state }, id) {
      let detail = state.detail
      if (detail) return detail
      let res = await customer.read(id)
      state.detail = res
      return res
    }
  }
}
