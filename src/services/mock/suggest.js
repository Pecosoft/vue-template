// eslint-disable
import Mock from 'mockjs'

const mockList = () => Mock.mock({'data|2-10': [
  {
    id: '@increment',
    cate: '@natural(1, 2)',
    status: '@natural(0, 2)',
    contact: '@natural(13000000000, 18999999999)',
    description: '@cparagraph(1, 3)',
    create_time: '@date(T)',
    product_model: '@word'
  }
]}).data

const mockDetail = () => Mock.mock({'data':
  {
    user: {
      name: '@ctitle',
      intro: '@csentence',
      avatar: '@image(60x60)',
      datetime: '@date(T)'
    },
    product_model: '@word',
    description: '@cparagraph(1, 3)',
    contact: '@natural(13000000000, 18999999999)',
    reply: {
      user: {
        name: '@ctitle',
        intro: '@csentence',
        avatar: '@image(60x60)',
        datetime: '@date(T)'
      },
      content: '@cparagraph(1, 3)'
    }
  }
}).data

export default mockAdapter => {
  // fetch
  mockAdapter.onGet('/suggest').reply(config => {
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
  mockAdapter.onGet(/\/suggest\/\d+/).reply(config => {
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

  mockAdapter.onPost('/suggest').reply(config => {
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
