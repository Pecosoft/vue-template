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
      data.status = 0
      break
    case 'reject': // 维修组长驳回
      data.status = 0
      break
    case 'info': // 已分配
      window.location.href = 'tel://' + data.dispatch.mobile
      break
  }
}
