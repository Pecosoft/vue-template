const userAgent = navigator.userAgent

export const isWechat = userAgent.indexOf('MicroMessenger') !== -1
export const isAndroid = userAgent.indexOf('Android') !== -1
