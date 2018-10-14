// eslint-disable
import Mock from 'mockjs'

const mockData = () => Mock.mock({'data|5-10': [
  {
    id: '@increment',
    name: '@word',
    avatar: '@image(80x80)'
  }
]}).data

export default mockAdapter => mockAdapter.onGet('/product').reply(config => {
  // let params = JSON.parse(config.data)
  let resp = {
    errcode: 0,
    msg: '',
    data: [
      {
        id: 1,
        name: '金属加工中心',
        children: mockData()
      },
      {
        id: 2,
        name: '玻璃加工中心',
        children: mockData()
      }
    ]
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, resp])
    }, Math.random() * 100 + 0)
  })
})
