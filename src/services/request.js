import axios from 'axios'
import Cookie from 'js-cookie'

// 服务请求
const request = async (method, url, params = {}) => {
  let baseParams = {
    user_id: Cookie.get('peco_user_id') || '-',
    token: Cookie.get('peco_token') || '-',
    ticket: Cookie.get('peco_ticket') || '-'
  }

  let realparams = Object.assign({}, baseParams, params)

  let res = await axios[method](url, realparams)
  let data = res.data
  if (parseInt(data.errcode)) {
    console.error('[request]错误码: ', data.errcode, data.msg || '')
    return Promise.reject(data)
  }

  return data.data
}

export default request
