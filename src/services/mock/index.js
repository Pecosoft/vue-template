import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockProduct from './product'
import mockRepair from './repair'

export default {
  bootstrap () {
    let mockAdapter = new MockAdapter(axios)

    mockProduct(mockAdapter)
    mockRepair(mockAdapter)
  }
}
