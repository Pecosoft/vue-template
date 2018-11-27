/* eslint-disable */
import wxjssdk from '@/services/wxjssdk'

export default {
  namespaced: true,
  state: {
    wxjssdkConfig: null
  },
  actions: {
    async getWxjssdkConfig ({ state }) {
      let wxjssdkConfig = state.wxjssdkConfig
      if (wxjssdkConfig) return wxjssdkConfig
      let res = await wxjssdk()
      state.wxjssdkConfig = res
      return res
    }
  }
}
