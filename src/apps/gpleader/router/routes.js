import Index from 'gpleader/modules/Index'
import Repair from 'gpleader/modules/Repair'
import RepairDetail from 'gpleader/modules/Repair/detail'
import RepairView from 'gpleader/modules/Repair/view'
import Consult from 'gpleader/modules/Consult'
import Complain from 'gpleader/modules/Complain'
import ComplainCreate from 'gpleader/modules/Complain/create'
import ComplainDetail from 'gpleader/modules/Complain/detail'
import Suggest from 'gpleader/modules/Suggest'
import SuggestCreate from 'gpleader/modules/Suggest/create'
import SuggestDetail from 'gpleader/modules/Suggest/detail'

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
    name: 'Consult',
    path: '/gpleader/consult',
    component: Consult,
    meta: {
      title: '咨询'
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
    name: 'ComplainCreate',
    path: '/gpleader/complain/create',
    component: ComplainCreate,
    meta: {
      title: '新增投诉'
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
    name: 'Suggest',
    path: '/gpleader/suggest',
    component: Suggest,
    meta: {
      title: '建议'
    }
  },
  {
    name: 'SuggestCreate',
    path: '/gpleader/suggest/create',
    component: SuggestCreate,
    meta: {
      title: '新增建议'
    }
  },
  {
    name: 'SuggestDetail',
    path: '/gpleader/suggest/:id',
    component: SuggestDetail,
    meta: {
      title: '建议详情'
    }
  }
]
