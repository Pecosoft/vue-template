// eslint-disable
import Mock from 'mockjs'

const mockDetail = () => Mock.mock({'data':
  {
    order_sn: '@string(number, 22)',
    status: '@natural(0, 5)',
    logs: [
      '2018-05-02 10:52:42 用户已提交报修单'
    ],
    user: {
      name: '@cname',
      mobile: '@natural(13000000000, 18999999999)',
      company: '深圳市XXXXxxxxxxxx公司',
      addr: '@county(true)',
      block: 'T栋XXXXXX'
    },
    product_model: '@word',
    product_avatar: '@image(80x80)',
    description: '@cparagraph(1, 3)',
    imgs: Mock.mock({'data|3-9': [
      '@image(80x80)'
    ]}).data
  }
}).data

export default mockAdapter => {
  // fetch

  // read
  mockAdapter.onGet(/\/repair\/\d+/).reply(config => {
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

  // create
  mockAdapter.onPost('/repair').reply(config => {
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
