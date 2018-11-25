/* eslint-disable */
import { provinceCityArea } from '@/services/opendata'
import wxjssdk from '@/services/wxjssdk'

export default {
  namespaced: true,
  state: {
    province_city_areas: [],
    wxjssdkConfig: null
  },
  mutations: {

  },
  actions: {
    async provinceCityArea ({ state }) {
      let province_city_areas = state.province_city_areas
      if (province_city_areas && province_city_areas.length) return province_city_areas
      let res = await provinceCityArea()
      state.province_city_areas = res
      return res
    },
    async getWxjssdkConfig ({ state }) {
      let wxjssdkConfig = state.wxjssdkConfig
      if (wxjssdkConfig) return wxjssdkConfig
      let res = await wxjssdk()
      state.wxjssdkConfig = res
      return res
    }
  }
}
