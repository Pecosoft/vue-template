import Index from 'customer/modules/Index'
import Repair from 'customer/modules/Repair'
import Consult from 'customer/modules/Consult'
import Complain from 'customer/modules/Complain'
import Suggest from 'customer/modules/Suggest'

export default [
  {
    name: 'Index',
    path: '/',
    component: Index,
    meta: {
      title: '用户中心'
    }
  },
  {
    name: 'Repair',
    path: '/repair',
    component: Repair,
    meta: {
      title: '报修'
    }
  },
  {
    name: 'Consult',
    path: '/consult',
    component: Consult,
    meta: {
      title: '咨询'
    }
  },
  {
    name: 'Complain',
    path: '/complain',
    component: Complain,
    meta: {
      title: '投诉'
    }
  },
  {
    name: 'Suggest',
    path: '/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  }
]
