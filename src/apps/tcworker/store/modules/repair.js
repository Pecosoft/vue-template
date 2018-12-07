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
    ['UPDATE_STATUS'] (state, { id, status }) {
      let list = state.list
      let idStr = String(id)
      let details = state.details
      let detail = details[idStr]
      if (detail) {
        detail.status = status
      }
      for (var i = 0, len = list.length; i < len; i++) {
        let item = list[i]
        if (item.id === id) {
          item.status = status
          break
        }
      }
    },
    ['UPDATE_TAG'] (state, { id, tag, help }) {
      let list = state.list
      let idStr = String(id)
      let details = state.details
      let detail = details[idStr]
      if (detail) {
        detail.tag = tag
        if (help) detail.help = help
      }
      for (var i = 0, len = list.length; i < len; i++) {
        let item = list[i]
        if (item.id === id) {
          item.tag = tag
          if(help) item.help = help
          break
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
