import wxjssdk from '@/services/wxjssdk'
import { resetWxJs, configWxsdk } from 'utils/wxsdk'
import { isAndroid } from 'utils/device'

export default {
  mounted () {
    if (isAndroid) {
      // 安卓手机，进入页面重新配置微信JSSDK
      console.log('安卓手机，进入页面重新配置微信JSSDK')
      resetWxJs()
      wxjssdk().then(config => {
        console.log(config)
        configWxsdk(config)
      })
    }
  }
}
