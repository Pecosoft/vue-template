export default (action, data, { $router }) => {
  // console.log('action: %s data: %o $router: %o', action, data, $router)
  switch (action) {
    case 'cancel':
      break
    case 'view':
      $router.push({ name: 'RepairView', params: { id: data.id } })
      break
    case 'rate':
      break
    case 'contact':
      break
    case 'dispatch1': // 分配维修主管
      break
    case 'revoke1': // 撤回已分配的维修主管
      break
    case 'info1': // 已分配信息
      break
    case 'reject1': // 维修主管驳回
      break
    case 'dispatch2': // 分配维修师傅
      break
    case 'revoke2': // 撤回已分配的维修师傅
      break
    case 'info2': // 已分配维修师傅信息
      break
    case 'help1': // 维修主管协助
      break
    case 'reject2': // 维修师傅驳回
      break
    case 'help2': // 维修师傅协助
      break
    case 'take': // 维修师傅接单
      break
    case 'process': // 维修师傅到场维修
      break
    case 'complete': // 维修师傅结案
      break
  }
}
