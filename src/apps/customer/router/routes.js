import Index from 'customer/modules/Index'
import Repair from 'customer/modules/Repair'
import Consult from 'customer/modules/Consult'
import Complain from 'customer/modules/Complain'
import Suggest from 'customer/modules/Suggest'

export default [
  {
    name: 'Index',
    path: '/customer',
    component: Index,
    meta: {
      title: '用户中心'
    }
  },
  {
    name: 'Repair',
    path: '/customer/repair',
    component: Repair,
    meta: {
      title: '报修'
    }
  },
  {
    name: 'Consult',
    path: '/customer/consult',
    component: Consult,
    meta: {
      title: '咨询'
    }
  },
  {
    name: 'Complain',
    path: '/customer/complain',
    component: Complain,
    meta: {
      title: '投诉'
    }
  },
  {
    name: 'Suggest',
    path: '/customer/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  }
]
