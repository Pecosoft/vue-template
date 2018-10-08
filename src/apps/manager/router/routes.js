import Index from 'manager/modules/Index'
import Repair from 'manager/modules/Repair'
import RepairDetail from 'manager/modules/Repair/detail'
import RepairView from 'manager/modules/Repair/view'
import Consult from 'manager/modules/Consult'
import Complain from 'manager/modules/Complain'
import ComplainCreate from 'manager/modules/Complain/create'
import ComplainDetail from 'manager/modules/Complain/detail'
import Suggest from 'manager/modules/Suggest'
import SuggestCreate from 'manager/modules/Suggest/create'
import SuggestDetail from 'manager/modules/Suggest/detail'

export default [
  {
    name: 'Index',
    path: '/manager',
    component: Index,
    meta: {
      title: '管理中心'
    }
  },
  {
    name: 'Repair',
    path: '/manager/repair',
    component: Repair,
    meta: {
      title: '报修'
    }
  },
  {
    name: 'RepairDetail',
    path: '/manager/repair/:id',
    component: RepairDetail,
    meta: {
      title: '报修详情'
    }
  },
  {
    name: 'RepairView',
    path: '/manager/repair/:id/view',
    component: RepairView,
    meta: {
      title: '查看报修'
    }
  },
  {
    name: 'Consult',
    path: '/manager/consult',
    component: Consult,
    meta: {
      title: '咨询'
    }
  },
  {
    name: 'Complain',
    path: '/manager/complain',
    component: Complain,
    meta: {
      title: '投诉'
    }
  },
  {
    name: 'ComplainCreate',
    path: '/manager/complain/create',
    component: ComplainCreate,
    meta: {
      title: '新增投诉'
    }
  },
  {
    name: 'ComplainDetail',
    path: '/manager/complain/:id',
    component: ComplainDetail,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'Suggest',
    path: '/manager/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  },
  {
    name: 'SuggestCreate',
    path: '/manager/suggest/create',
    component: SuggestCreate,
    meta: {
      title: '新增建议'
    }
  },
  {
    name: 'SuggestDetail',
    path: '/manager/suggest/:id',
    component: SuggestDetail,
    meta: {
      title: '建议详情'
    }
  }
]
