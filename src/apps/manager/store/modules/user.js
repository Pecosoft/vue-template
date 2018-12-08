/* eslint-disable */
import auth from '@/services/auth'
import { user, manager } from '@/services'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
  },
  actions: {
    async read ({ state }, force=false) {
      let user = state.user
      if (!force && user) return user
      let res = await auth.user('manager')
      state.user = res
      return res
    },
    async login ({ state }, formData) {
      let res = await user.login(formData)
      return res
    }
  }
}