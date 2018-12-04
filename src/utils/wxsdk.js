/* eslint-disable */
import loader from './loader'
import { isWechat } from './device'

let defaultConfig = {
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: '', // 必填，公众号的唯一标识
  timestamp: 0, // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名
  jsApiList: [] // 必填，需要使用的JS接口列表
}

let isReady = false

const load = _ => {
  return new Promise((resolve, reject) => {
    if (!isWechat) {
      reject('抱歉，该功能只支持在微信中使用')
      return alert('抱歉，该功能只支持在微信中使用')
    }
    loader.use('wxsdk', _ => {
      resolve()
    })
  })
}

const ready = config => {
  return load().then(_ => {
    return new Promise((resolve, reject) => {
      if (isReady) {
        return resolve()
      }
      let realConfig = Object.assign({}, defaultConfig, config)
      wx.config(realConfig)
      wx.error(error => {
        console.error('wxsdk error!', realConfig, error)
      })
      wx.ready(_ => {
        isReady = true
        console.log('wxsdk ready!', realConfig.jsApiList)
        resolve(realConfig.jsApiList)
      })
    })
  })
}

export const loadWxsdk = load
export const configWxsdk = config => {
  return defaultConfig = config
}

export const chooseImage = opts => {
  return ready().then(_ => {
    return new Promise((resolve, reject) => {
      const defOpts = {
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机，默认二者都有
      }
      let realOpts = Object.assign({}, defOpts, opts)
      realOpts.success = function (res) {
        let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        resolve(localIds, res)
      }
      wx.chooseImage(realOpts)
    })
  })
}

export const previewImage = (current, urls) => {
  return ready().then(_ => {
    return wx.previewImage({current, urls})
  })
}

export const uploadImage = localId => {
  return ready().then(_ => {
    return new Promise((resolve, reject) => {
      let realOpts = {
        localId, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 0 // 默认为1，显示进度提示
      }
      realOpts.success = function (res) {
        let serverId = res.serverId; // 返回图片的服务器端ID
        resolve(serverId, res)
      }
      wx.uploadImage(realOpts)
    })
  })
}

export const uploadImages = localIds => {
  return new Promise((resolve, reject) => {
    if (!localIds || !localIds.length) {
      return reject('localIds is empty!')
    }
    let len = localIds.length
    let idx = 0
    let serverIds = []
    upload()
    function upload () {
      uploadImage(localIds[idx]).then(serverId => {
        serverIds.push(serverId)
        idx++
        if (idx < len) {
          upload ()
        } else {
          resolve(serverIds)
        }
      })
    }
  })
}

export const getImgSrcByLocalId = localId => {
  return new Promise((resolve, reject) => {
    if (window.wxjs_is_wkwebview) {
      // iOS微信6.5.3及其之后的版本 window.wxjs_is_wkwebview 为true时是使用WKWebview，为 false或者 “undefine”时是 UIWebview
      // 此接口仅在 iOS WKWebview 下提供，用于兼容 iOS WKWebview 不支持 localId 直接显示图片的问题
      wx.getLocalImgData({
        localId, // 图片的localID
        success: function (res) {
          let localData = res.localData // localData是图片的base64数据，可以用img标签显示
          resolve(localData)
        }
      })
    } else {
      resolve(localId)
    }
  })
}

export const startRecord = () => ready().then(_ => { wx.startRecord() })

export const stopRecord = () => new Promise((resolve, reject) => {
  wx.stopRecord({
    success: function (res) {
      let localId = res.localId
      resolve(localId, res)
    }
  })
})

export const onVoiceRecordEnd = () => new Promise((resolve, reject) => {
  wx.onVoiceRecordEnd({
    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
    complete: function (res) {
      let localId = res.localId
      resolve(localId, res)
    }
  })
})

export const playVoice = localId => wx.playVoice({
  localId // 需要播放的音频的本地ID，由stopRecord接口获得
})

export const pauseVoice = localId => wx.pauseVoice({
  localId // 需要播放的音频的本地ID，由stopRecord接口获得
})

export const stopVoice = localId => wx.stopVoice({
  localId // 需要播放的音频的本地ID，由stopRecord接口获得
})

// 监听语音播放完毕接口
export const onVoicePlayEnd = () => new Promise((resolve, reject) => {
  wx.onVoicePlayEnd({
    success: function (res) {
      let localId = res.localId
      resolve(localId, res)
    }
  })
})

export const uploadVoice = localId => new Promise((resolve, reject) => {
  wx.uploadVoice({
    localId, // 需要上传的音频的本地ID，由stopRecord接口获得
    isShowProgressTips: 0, // 默认为1，显示进度提示
    success: function (res) {
      let serverId = res.serverId // 返回音频的服务器端ID
      resolve(serverId, res)
    }
  })
})

// 使用微信内置地图查看位置接口
// opts
// ----
// {
//   latitude: 0, // 纬度，浮点数，范围为90 ~ -90
//   longitude: 0, // 经度，浮点数，范围为180 ~ -180。
//   name: '', // 位置名
//   address: '', // 地址详情说明
//   scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
//   infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
// }
export const openLocation = opts => wx.openLocation(opts)

export const getLocation = () => new Promise((resolve, reject) => {
  wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res) {
        let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        let speed = res.speed; // 速度，以米/每秒计
        let accuracy = res.accuracy; // 位置精度
        resolve(latitude, longitude)
      }
  })
})
