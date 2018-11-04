/* eslint-disable */
import auth from '@/services/auth'
import { customer } from '@/services'

export default {
  namespaced: true,
  state: {
    user: null,
    detail: null
  },
  mutations: {
  },
  actions: {
    async read ({ state }) {
      let user = state.user
      if (user) return user
      let res = await auth.user('customer')
      state.user = res
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
