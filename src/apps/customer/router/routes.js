import Index from 'customer/modules/Index'
import Repair from 'customer/modules/Repair'
import RepairDetail from 'customer/modules/Repair/detail'
import RepairView from 'customer/modules/Repair/view'
import Consult from 'customer/modules/Consult'
import Complain from 'customer/modules/Complain'
import ComplainCreate from 'customer/modules/Complain/create'
import ComplainDetail from 'customer/modules/Complain/detail'
import Suggest from 'customer/modules/Suggest'
import SuggestCreate from 'customer/modules/Suggest/create'
import SuggestDetail from 'customer/modules/Suggest/detail'
import UserRegister from 'customer/modules/User/register'
import UserLogin from 'customer/modules/User/login'
import UserProfile from 'customer/modules/User/profile'

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
    name: 'RepairDetail',
    path: '/customer/repair/:id',
    component: RepairDetail,
    meta: {
      title: '报修详情'
    }
  },
  {
    name: 'RepairView',
    path: '/customer/repair/:id/view',
    component: RepairView,
    meta: {
      title: '查看报修'
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
    name: 'ComplainCreate',
    path: '/customer/complain/create',
    component: ComplainCreate,
    meta: {
      title: '新增投诉'
    }
  },
  {
    name: 'ComplainDetail',
    path: '/customer/complain/:id',
    component: ComplainDetail,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'Suggest',
    path: '/customer/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  },
  {
    name: 'SuggestCreate',
    path: '/customer/suggest/create',
    component: SuggestCreate,
    meta: {
      title: '新增建议'
    }
  },
  {
    name: 'SuggestDetail',
    path: '/customer/suggest/:id',
    component: SuggestDetail,
    meta: {
      title: '建议详情'
    }
  },
  {
    name: 'UserRegister',
    path: '/customer/register',
    component: UserRegister,
    meta: {
      title: '用户注册'
    }
  },
  {
    name: 'UserLogin',
    path: '/customer/login',
    component: UserLogin,
    meta: {
      title: '用户登录'
    }
  },
  {
    name: 'UserProfile',
    path: '/customer/profile',
    component: UserProfile,
    meta: {
      title: '完善资料'
    }
  }
]
