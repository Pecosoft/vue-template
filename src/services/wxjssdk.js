import request from './request'
import { wxjssdk } from './resources'

export default async _ => {
  let resData = await request('post', wxjssdk, { url: encodeURIComponent(location.href.split('#')[0]) })
  return resData
}
