import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockProduct from './product'
import mockRepair from './repair'
import mockComplain from './complain'
import mockSuggest from './suggest'
import mockGpleader from './gpleader'

export default {
  bootstrap () {
    let mockAdapter = new MockAdapter(axios)

    mockProduct(mockAdapter)
    mockRepair(mockAdapter)
    mockComplain(mockAdapter)
    mockSuggest(mockAdapter)
    mockGpleader(mockAdapter)
  }
}
