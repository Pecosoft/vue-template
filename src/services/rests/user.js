import { user as resource } from '../resources'
import Rest from '../rest'
import request from '../request'
import auth from '../auth'

const userRest = new Rest(resource)

userRest.login = async data => {
  let resData = await request('post', '//login.taikan.fvtools.com/userlogin', data)
  if (typeof resData === typeof '') {
    auth.set({ access_token: resData })
  }
  return resData
}

export default userRest
