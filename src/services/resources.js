import isDev from './isdev'

const remoteHost = '//api.taikan.pecosoft.cn'
const prefix = isDev ? '' : remoteHost

export const product = prefix + '/product'
export const repair = prefix + '/repair'
export const complain = prefix + '/complain'
export const suggest = prefix + '/suggest'
export const dsclerk = prefix + '/dsclerk'
export const gpleader = prefix + '/gpleader'
export const tcworker = prefix + '/tcworker'
export const manager = prefix + '/manager'
export const customer = prefix + '/customer'
