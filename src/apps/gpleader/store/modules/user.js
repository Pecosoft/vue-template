/* eslint-disable */
import auth from '@/services/auth'
import { user, gpleader } from '@/services'

export default {
  namespaced: true,
  state: {
    user: null,
  },
  mutations: {
  },
  actions: {
    async read ({ state }, force=false) {
      let user = state.user
      if (!force && user) return user
      let res = await auth.user('gpleader')
      state.user = res
      return res
    },
    async login ({ state }, formData) {
      let res = await user.login(formData)
      return res
    }
  }
}
