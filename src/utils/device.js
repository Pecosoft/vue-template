const userAgent = navigator.userAgent

export const isWechat = userAgent.indexOf('MicroMessenger') !== -1
