import Index from 'tcworker/modules/Index'
import Repair from 'tcworker/modules/Repair'
import RepairDetail from 'tcworker/modules/Repair/detail'
import RepairView from 'tcworker/modules/Repair/view'
import Consult from 'tcworker/modules/Consult'
import Complain from 'tcworker/modules/Complain'
import ComplainCreate from 'tcworker/modules/Complain/create'
import ComplainDetail from 'tcworker/modules/Complain/detail'
import Suggest from 'tcworker/modules/Suggest'
import SuggestCreate from 'tcworker/modules/Suggest/create'
import SuggestDetail from 'tcworker/modules/Suggest/detail'

export default [
  {
    name: 'Index',
    path: '/tcworker',
    component: Index,
    meta: {
      title: '维修中心'
    }
  },
  {
    name: 'Repair',
    path: '/tcworker/repair',
    component: Repair,
    meta: {
      title: '报修'
    }
  },
  {
    name: 'RepairDetail',
    path: '/tcworker/repair/:id',
    component: RepairDetail,
    meta: {
      title: '报修详情'
    }
  },
  {
    name: 'RepairView',
    path: '/tcworker/repair/:id/view',
    component: RepairView,
    meta: {
      title: '查看报修'
    }
  },
  {
    name: 'Consult',
    path: '/tcworker/consult',
    component: Consult,
    meta: {
      title: '咨询'
    }
  },
  {
    name: 'Complain',
    path: '/tcworker/complain',
    component: Complain,
    meta: {
      title: '投诉'
    }
  },
  {
    name: 'ComplainCreate',
    path: '/tcworker/complain/create',
    component: ComplainCreate,
    meta: {
      title: '新增投诉'
    }
  },
  {
    name: 'ComplainDetail',
    path: '/tcworker/complain/:id',
    component: ComplainDetail,
    meta: {
      title: '投诉详情'
    }
  },
  {
    name: 'Suggest',
    path: '/tcworker/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  },
  {
    name: 'SuggestCreate',
    path: '/tcworker/suggest/create',
    component: SuggestCreate,
    meta: {
      title: '新增建议'
    }
  },
  {
    name: 'SuggestDetail',
    path: '/tcworker/suggest/:id',
    component: SuggestDetail,
    meta: {
      title: '建议详情'
    }
  }
]
