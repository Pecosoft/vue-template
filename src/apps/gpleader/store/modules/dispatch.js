/* eslint-disable */
import { tcworker } from '@/services'

export default {
  namespaced: true,
  state: {
    list: [],
    mappick: {}
  },
  mutations: {
    ['DISPATCH'] (state, { id, picked }) {
      state.mappick[id] = picked
    }
  },
  actions: {
    async fetch ({ state }) {
      if (state.list.length) return state.list
      let res = await tcworker.fetch()
      state.list = res
      return res
    }
  }
}
// action context: { state, commit, dispatch, getters }
