/* eslint-disable */
let jsonpRes = {}

window.jsonpCallback = res => {
  jsonpRes = res
}

export default url => {
  return new Promise((resolve, reject) => {
    let scriptEle = document.createElement('script')
    scriptEle.onload = () => {
      resolve(jsonpRes)
      document.getElementsByTagName("head")[0].removeChild(scriptEle)
    }
    scriptEle.src = url + (url.indexOf('?') === -1 ? '?' : '&') + 'callback=jsonpCallback'
    let head = document.getElementsByTagName('head')[0]
    head.appendChild(scriptEle)
  })
}
