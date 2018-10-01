import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockProduct from './product'

export default {
  bootstrap () {
    let mockAdapter = new MockAdapter(axios)

    mockProduct(mockAdapter)
  }
}
