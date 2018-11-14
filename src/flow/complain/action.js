import { complain } from '@/services'

export default (action, data, { $router }) => {
  // console.log('action: %s data: %o $router: %o', action, data, $router)
  switch (action) {
    case 'contact': // 联系客户
      window.location.href = 'tel://' + data.contact
      break
    case 'dispatch': // 分配
      $router.push({ name: 'ComplainDispatch', params: { id: data.id } })
      break
    case 'revoke': // 派单文员撤回
      complain.update(data.id, {
        receiver_id: 0,
        step_id: 0,
        action: 'revoke'
      })
      data.status = 0
      break
    case 'reject': // 维修组长和管理人员驳回
      complain.update(data.id, {
        receiver_id: 0,
        step_id: 0,
        action: 'reject'
      })
      data.status = 0
      break
    case 'info': // 已分配
      window.location.href = 'tel://' + data.dispatch.mobile
      break
  }
}
