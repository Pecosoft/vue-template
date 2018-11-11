import Index from 'dsclerk/modules/Index'
import Repair from 'dsclerk/modules/Repair'
import RepairDetail from 'dsclerk/modules/Repair/detail'
import RepairView from 'dsclerk/modules/Repair/view'
import RepairDispatch from 'dsclerk/modules/Repair/dispatch'
import Consult from 'dsclerk/modules/Consult'
import Complain from 'dsclerk/modules/Complain'
import ComplainCreate from 'dsclerk/modules/Complain/create'
import ComplainDetail from 'dsclerk/modules/Complain/detail'
import ComplainDispatch from 'dsclerk/modules/Complain/dispatch'
import Suggest from 'dsclerk/modules/Suggest'
import SuggestCreate from 'dsclerk/modules/Suggest/create'
import SuggestDetail from 'dsclerk/modules/Suggest/detail'
import UserRegister from 'dsclerk/modules/User/register'
import UserLogin from 'dsclerk/modules/User/login'

export default [
  {
    name: 'Index',
    path: '/dsclerk',
    component: Index,
    meta: {
      title: '派单中心'
    }
  },
  {
    name: 'Repair',
    path: '/dsclerk/repair',
    component: Repair,
    meta: {
      title: '报修'
    }
  },
  {
    name: 'RepairDetail',
    path: '/dsclerk/repair/:id',
    component: RepairDetail,
    meta: {
      title: '报修详情'
    }
  },
  {
    name: 'RepairView',
    path: '/dsclerk/repair/:id/view',
    component: RepairView,
    meta: {
      title: '查看报修'
    }
  },
  {
    name: 'RepairDispatch',
    path: '/dsclerk/repair/:id/dispatch',
    component: RepairDispatch,
    meta: {
      title: '分配维修主管'
    }
  },
  {
    name: 'Consult',
    path: '/dsclerk/consult',
    component: Consult,
    meta: {
      title: '咨询'
    }
  },
  {
    name: 'Complain',
    path: '/dsclerk/complain',
    component: Complain,
    meta: {
      title: '投诉'
    }
  },
  {
    name: 'ComplainCreate',
    path: '/dsclerk/complain/create',
    component: ComplainCreate,
    meta: {
      title: '新增投诉'
    }
  },
  {
    name: 'ComplainDetail',
    path: '/dsclerk/complain/:id',
    component: ComplainDetail,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'ComplainDispatch',
    path: '/dsclerk/complain/:id/dispatch',
    component: ComplainDispatch,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'Suggest',
    path: '/dsclerk/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  },
  {
    name: 'SuggestCreate',
    path: '/dsclerk/suggest/create',
    component: SuggestCreate,
    meta: {
      title: '新增建议'
    }
  },
  {
    name: 'SuggestDetail',
    path: '/dsclerk/suggest/:id',
    component: SuggestDetail,
    meta: {
      title: '建议详情'
    }
  },
  {
    name: 'UserRegister',
    path: '/dsclerk/register',
    component: UserRegister,
    meta: {
      title: '用户注册'
    }
  },
  {
    name: 'UserLogin',
    path: '/dsclerk/login',
    component: UserLogin,
    meta: {
      title: '用户登录'
    }
  }
]
