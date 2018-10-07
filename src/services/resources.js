import isDev from './isdev'

const remoteHost = '//api.taikan.pecosoft.cn'
const prefix = isDev ? '' : remoteHost

export const product = prefix + '/product'
export const repair = prefix + '/repair'
export const complain = prefix + '/complain'
export const suggest = prefix + '/suggest'
