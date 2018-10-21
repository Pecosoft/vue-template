import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockProduct from './product'
import mockRepair from './repair'
import mockComplain from './complain'
import mockSuggest from './suggest'
import mockDsclerk from './dsclerk'
import mockGpleader from './gpleader'
import mockTcworker from './tcworker'
import mockManager from './manager'
import mockCustomer from './customer'

export default {
  bootstrap () {
    let mockAdapter = new MockAdapter(axios)

    mockProduct(mockAdapter)
    mockRepair(mockAdapter)
    mockComplain(mockAdapter)
    mockSuggest(mockAdapter)
    mockDsclerk(mockAdapter)
    mockGpleader(mockAdapter)
    mockTcworker(mockAdapter)
    mockManager(mockAdapter)
    mockCustomer(mockAdapter)
  }
}
