import Index from 'gpleader/modules/Index'
import Repair from 'gpleader/modules/Repair'
import RepairDetail from 'gpleader/modules/Repair/detail'
import RepairView from 'gpleader/modules/Repair/view'
import RepairDispatch from 'gpleader/modules/Repair/dispatch'
import Complain from 'gpleader/modules/Complain'
import ComplainDetail from 'gpleader/modules/Complain/detail'
import ComplainDispatch from 'gpleader/modules/Complain/dispatch'
import UserLogin from 'gpleader/modules/User/login'

export default [
  {
    name: 'Index',
    path: '/gpleader',
    component: Index,
    meta: {
      title: '维修组长'
    }
  },
  {
    name: 'Repair',
    path: '/gpleader/repair',
    component: Repair,
    meta: {
      title: '报修'
    }
  },
  {
    name: 'RepairDetail',
    path: '/gpleader/repair/:id',
    component: RepairDetail,
    meta: {
      title: '报修详情'
    }
  },
  {
    name: 'RepairView',
    path: '/gpleader/repair/:id/view',
    component: RepairView,
    meta: {
      title: '查看报修'
    }
  },
  {
    name: 'RepairDispatch',
    path: '/gpleader/repair/:id/dispatch',
    component: RepairDispatch,
    meta: {
      title: '分配维修人员'
    }
  },
  {
    name: 'Complain',
    path: '/gpleader/complain',
    component: Complain,
    meta: {
      title: '投诉'
    }
  },
  {
    name: 'ComplainDetail',
    path: '/gpleader/complain/:id',
    component: ComplainDetail,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'ComplainDispatch',
    path: '/gpleader/complain/:id/dispatch',
    component: ComplainDispatch,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'UserLogin',
    path: '/gpleader/login',
    component: UserLogin,
    meta: {
      title: '用户登录'
    }
  }
]
