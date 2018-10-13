// eslint-disable
import Mock from 'mockjs'

const mockList = () => Mock.mock({'data|20-30': [
  {
    id: '@increment',
    user: {
      name: '@ctitle',
      intro: '@csentence',
      avatar: '@image(60x60)'
    },
    dispatch: {
      id: '@increment',
      name: '@cname',
      mobile: '@natural(13000000000, 18999999999)',
      avatar: '@image(60x60)'
    },
    cate: '@natural(1, 2)',
    status: '@natural(0, 2)',
    contact: '@natural(13000000000, 18999999999)',
    description: '@cparagraph(1, 3)',
    create_time: '@date(T)',
    product_model: '@word',
    machine_sn: '@string'
  }
]}).data

const mockDetail = () => Mock.mock({'data':
  {
    user: {
      name: '@ctitle',
      intro: '@csentence',
      avatar: '@image(60x60)'
    },
    cate: '@natural(1, 2)',
    status: '@natural(0, 2)',
    product_model: '@word',
    machine_sn: '@string',
    description: '@cparagraph(1, 3)',
    create_time: '@date(T)',
    contact: '@natural(13000000000, 18999999999)',
    reply: {
      user: {
        name: '@ctitle',
        intro: '@csentence',
        avatar: '@image(60x60)'
      },
      create_time: '@date(T)',
      content: '@cparagraph(1, 3)'
    }
  }
}).data

export default mockAdapter => {
  // fetch
  mockAdapter.onGet('/complain').reply(config => {
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
  mockAdapter.onGet(/\/complain\/\d+/).reply(config => {
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

  mockAdapter.onPost('/complain').reply(config => {
    // let params = JSON.parse(config.data)
    let resp = {
      errcode: 0,
      msg: '',
      data: config.data
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, resp])
      }, Math.random() * 1000 + 1000)
    })
  })
}
