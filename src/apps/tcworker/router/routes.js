import Index from 'tcworker/modules/Index'
import RepairDetail from 'tcworker/modules/Repair/detail'
import RepairComplete from 'tcworker/modules/Repair/complete'

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
    name: 'RepairDetail',
    path: '/tcworker/repair/:id',
    component: RepairDetail,
    meta: {
      title: '报修详情'
    }
  },
  {
    name: 'RepairComplete',
    path: '/tcworker/repair/:id/complete',
    component: RepairComplete,
    meta: {
      title: '结案'
    }
  }
]
