import Cookie from 'js-cookie'

const auth = {
  set (query) {
    let { uid, appid, ticket } = query
    if (uid && appid && ticket) {
      Cookie.set('peco_user_id', uid)
      Cookie.set('peco_app_id', appid)
      Cookie.set('peco_ticket', ticket)
    }
  },
  get () {
    let userid = Cookie.get('peco_user_id') || '-'
    let appid = Cookie.get('peco_app_id') || '-'
    let ticket = Cookie.get('peco_ticket') || '-'
    let timestamp = parseInt(new Date().getTime() / 1000)
    let signature = this.signature(userid, appid, ticket, timestamp)
    return {
      userid,
      appid,
      ticket,
      timestamp,
      signature
    }
  },
  signature (userid, appid, ticket, timestamp) {
    return [userid, appid, ticket, timestamp].sort().join('')
  }
}

export default auth
