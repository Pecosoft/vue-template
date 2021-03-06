export default (action, data, { $router }) => {
  // console.log('action: %s data: %o $router: %o', action, data, $router)
  switch (action) {
    case 'cancel':
      break
    case 'view':
      $router.push({ name: 'RepairView', params: { id: data.id } })
      break
    case 'rate':
      data.status = 6
      break
    case 'contact':
      window.location.href = 'tel://' + data.user.mobile
      break
    case 'dispatch1': // 分配维修主管
      $router.push({ name: 'RepairDispatch', params: { id: data.id } })
      break
    case 'revoke1': // 撤回已分配的维修主管
      data.status = 0
      break
    case 'info1': // 已分配信息
      window.location.href = 'tel://' + data.dispatch.mobile
      break
    case 'reject1': // 维修主管驳回
      data.status = 0
      break
    case 'dispatch2': // 分配维修师傅
      $router.push({ name: 'RepairDispatch', params: { id: data.id } })
      break
    case 'revoke2': // 撤回已分配的维修师傅
      data.status = 1
      break
    case 'info2': // 已分配维修师傅信息
      window.location.href = 'tel://' + data.dispatch.mobile
      break
    case 'help1': // 维修主管协助
      break
    case 'reject2': // 维修师傅驳回
      data.status = 1
      break
    case 'help2': // 维修师傅协助
      break
    case 'take': // 维修师傅接单
      data.status = 3
      break
    case 'process': // 维修师傅到场维修
      data.status = 4
      break
    case 'continue': // 维修师傅继续维修
      break
    case 'complete': // 维修师傅结案
      data.status = 5
      break
  }
}
