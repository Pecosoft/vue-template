/* eslint-disable */
import { gpleader, manager } from '@/services'

export default {
  namespaced: true,
  state: {
    list: [],
    list2: [],
    mappick: {},
    mappick2: {}
  },
  mutations: {
    ['DISPATCH'] (state, { id, picked }) {
      state.mappick[id] = picked
    },
    ['DISPATCH2'] (state, { id, picked }) {
      state.mappick2[id] = picked
    }
  },
  actions: {
    async fetch ({ state }) {
      if (state.list.length) return state.list
      let res = await gpleader.fetch()
      state.list = res
      return res
    },
    async fetch2 ({ state }) {
      if (state.list2.length) return state.list2
      let res = await manager.fetch()
      state.list2 = state.list.concat(res)
      return state.list2
    }
  }
}
// action context: { state, commit, dispatch, getters }
