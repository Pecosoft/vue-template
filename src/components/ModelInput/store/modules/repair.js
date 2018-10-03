/* eslint-disable */
import updateObj from 'utils/updateObj'

export default {
  namespaced: true,
  state: {
    form: {
      user_id: 1,
      product_id: 0,
      description: '',
      avatar: 0,
      voice: 0
    }
  },
  mutations: {
    ['CHANGE'] (state, formData) {
      updateObj(state.form, formData)
    }
  }
}
