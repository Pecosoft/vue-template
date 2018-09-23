export default function (status) {
  return status === 0 ? '未受理'
    : status === 1 ? '已受理'
      : status === 2 ? '已派单'
        : status === 3 ? '维修中'
          : status === 4 ? '已完成'
            : status === 5 ? '已评论' : 'unknown'
}
