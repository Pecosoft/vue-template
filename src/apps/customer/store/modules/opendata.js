/* eslint-disable */
import { provinceCityArea } from '@/services/opendata'

export default {
  namespaced: true,
  state: {
    province_city_areas: []
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
    }
  }
}
