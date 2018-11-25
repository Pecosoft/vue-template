const libs = {
  wxsdk: {
    loaded: false,
    loading: false,
    url: 'http://res.wx.qq.com/open/js/jweixin-1.4.0.js'
  }
}

const load = (url, callback) => {
  let scriptEle = document.createElement('script')
  scriptEle.onload = callback
  scriptEle.src = url
  let head = document.getElementsByTagName('head')[0]
  head.appendChild(scriptEle)
  return scriptEle
}

const use = (name, callback) => {
  let lib = libs[name]
  if (!lib) {
    return console.error('未注册的库')
  }

  if (lib.loaded) {
    callback && callback()
    return
  }

  if (lib.loading) {
    return
  }

  lib.loading = true
  load(lib.url, function () {
    lib.loaded = true
    lib.loading = false
    callback && callback()
  })
}

export default {
  use
}
