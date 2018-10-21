/* eslint-disable */
import { tcworker } from '@/services'
import auth from '@/services/auth'

const user = auth.user()

export default {
  namespaced: true,
  state: {
    user: {
      id: user.id,
      name: user.name,
      avatar: user.avatar
    }
  },
  mutations: {
  },
  actions: {
    async read ({ state }, id) {
      let user = state.user
      if (user) return user
      let res = await tcworker.read(id)
      state.user = res
      return res
    }
  }
}
