<template lang="pug">
page
  pannel
    info-card(:infos='infos' :editUrl='editUrl' style='border-bottom: 3px dashed #0769ad')
  create(title='申请报修' btn-text='提交报修' resource-name='repair' :model='repair' store-module='repair')
</template>

<script>
import { repair } from '@/models'

export default {
  data () {
    return {
      repair,
      infos: [
        {style: 'color: #606266; height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: '张三'}, {style: 'margin-left: 10px', value: '15988888888'}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: '深圳市XXXXxxxxxxxx公司'}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; ', row: [{style: '', value: '深圳市南山区高新科技园高新南四路'}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; ', row: [{style: '', value: 'T栋XXXXXX'}]}
      ],
      editUrl: '/customer/1'
    }
  },
  mounted () {
    let userId = this.$store.state.user.user && this.$store.state.user.user.user_id
    if (userId) {
      this.$store.commit('repair/PUT_USER_ID', userId)
    }
  }
}
</script>
