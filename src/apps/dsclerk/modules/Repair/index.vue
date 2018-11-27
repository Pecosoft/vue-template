<template lang="pug">
page
  tab(:tabs='tabs' v-model='tabIndex')
  pannel
    keep-alive
      order-list(v-if='tabIndex == 0' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list0" :privs="privs")
      order-list(v-else-if='tabIndex == 1' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list1" :privs="privs")
      order-list(v-else @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list2" :privs="privs")
</template>

<script>
import repairAction from '@/flow/repair/action'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  data () {
    return {
      tabIndex: 0,
      tabs: ['未分配', '已分配', '已完成'],
      privs: [
        [{id: 'contact', name: '联系用户'}, {id: 'dispatch1', name: '分配主管'}], // status: 0 待受理
        [{id: 'info1', name: '已分配XX', template: '已分配[dispatch.name]'}, {id: 'revoke1', name: '撤回'}], // status: 1 已受理
        [{id: 'view', name: '查看报修'}], // status: 2 已派单
        [{id: 'view', name: '查看报修'}], // status: 3 已接单
        [{id: 'view', name: '查看报修'}], // status: 4 维修中
        [{id: 'view', name: '查看报修'}], // status: 5 已完成
        [{id: 'view', name: '查看报修'}] // status: 6 已评价
      ]
    }
  },
  computed: {
    ...mapState(['list']),
    list0 () {
      let list = this.list
      let list0 = list.filter(item => {
        if (item.status === 0) {
          return true
        }
        return false
      })
      return list0.sort((a, b) => {
        return b.create_time - a.create_time
      })
    },
    list1 () {
      let list = this.list
      let list1 = list.filter(item => {
        let status = item.status
        if (status > 0 && status < 5) {
          return true
        }
        return false
      })
      return list1.sort((a, b) => {
        return a.status !== b.status ? a.status - b.status : b.create_time - a.create_time
      })
    },
    list2 () {
      let list = this.list
      let list2 = list.filter(item => {
        let status = item.status
        if (status >= 5) {
          return true
        }
        return false
      })
      return list2.sort((a, b) => {
        return a.status !== b.status ? a.status - b.status : b.create_time - a.create_time
      })
    }
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickList (d) {
      this.$router.push({name: 'RepairDetail', params: {id: d.id}})
    },
    handleOnClickBtn (d, btn) {
      repairAction(btn.id, d, { $router: this.$router })
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.fetch().then(data => {
      this.$peco.loading.hide()
    })
  }
}
</script>
