// eslint-disable
import Mock from 'mockjs'

const mockList = () => Mock.mock({'data|5-10': [
  {
    id: '@increment',
    name: '@cname',
    mobile: '@natural(13000000000, 18999999999)',
    avatar: '@image(60x60)'
  }
]}).data

const mockDetail = () => Mock.mock({'data':
  {
    name: '@ctitle',
    intro: '@csentence',
    avatar: '@image(80x80)'
  }
}).data

export default mockAdapter => {
  // fetch
  mockAdapter.onGet('/dsclerk').reply(config => {
    // let params = JSON.parse(config.data)
    let resp = {
      errcode: 0,
      msg: '',
      data: mockList()
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, resp])
      }, Math.random() * 1000 + 1000)
    })
  })

  // read
  mockAdapter.onGet(/\/dsclerk\/\d+/).reply(config => {
    // let params = JSON.parse(config.data)
    let resp = {
      errcode: 0,
      msg: '',
      data: mockDetail()
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, resp])
      }, Math.random() * 1000 + 1000)
    })
  })
}
