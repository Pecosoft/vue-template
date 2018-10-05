// eslint-disable

export default mockAdapter => mockAdapter.onPost('/repair').reply(config => {
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
