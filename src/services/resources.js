import isDev from './isdev'

const remoteHost = '//api.taikan.pecosoft.cn'
const prefix = isDev ? '' : remoteHost

export const product = prefix + '/product'
