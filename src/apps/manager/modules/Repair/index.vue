<template lang="pug">
page
  tab(:tabs='tabs' v-model='tabIndex')
  pannel
    keep-alive
      order-list(v-if='tabIndex == 0' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list0" :privs="privs")
      order-list(v-else-if='tabIndex == 1' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list1" :privs="privs")
      order-list(v-else-if='tabIndex == 2' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list2" :privs="privs")
      order-list(v-else-if='tabIndex == 3' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list3" :privs="privs")
      order-list(v-else @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list4" :privs="privs")
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
      tabs: ['待受理', '已受理', '进行中', '已完成', '已评论'],
      privs: [
        [], // status: 0 待受理
        [], // status: 1 已受理
        [], // status: 2 已派单
        [], // status: 3 已接单
        [], // status: 4 维修中
        [], // status: 5 已完成
        [] // status: 6 已评价
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
        if (status > 0 && status < 4) {
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
        if (status === 4) {
          return true
        }
        return false
      })
      return list2.sort((a, b) => {
        return b.create_time - a.create_time
      })
    },
    list3 () {
      let list = this.list
      let list2 = list.filter(item => {
        let status = item.status
        if (status === 5) {
          return true
        }
        return false
      })
      return list2.sort((a, b) => {
        return b.create_time - a.create_time
      })
    },
    list4 () {
      let list = this.list
      let list2 = list.filter(item => {
        let status = item.status
        if (status === 6) {
          return true
        }
        return false
      })
      return list2.sort((a, b) => {
        return b.create_time - a.create_time
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
