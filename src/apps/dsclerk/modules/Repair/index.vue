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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  data () {
    return {
      tabIndex: 0,
      tabs: ['未分配', '已分配', '已完成'],
      privs: [
        [{id: 0, name: '联系用户'}, {id: 1, name: '分配主管'}],
        [{id: 0, name: '已分配XX'}, {id: -1, name: '撤回'}],
        [{id: 0, name: '查看报修'}],
        [{id: 0, name: '查看报修'}],
        [{id: 0, name: '查看报修'}],
        [{id: 0, name: '查看报修'}],
        [{id: 0, name: '查看报修'}]
      ]
    }
  },
  computed: {
    ...mapState(['list']),
    list0 () {
      let list = this.list
      return list.filter(item => {
        if (item.status === 0) {
          return true
        }
        return false
      })
    },
    list1 () {
      let list = this.list
      return list.filter(item => {
        let status = item.status
        if (status > 0 && status < 5) {
          return true
        }
        return false
      })
    },
    list2 () {
      let list = this.list
      return list.filter(item => {
        let status = item.status
        if (status >= 5) {
          return true
        }
        return false
      })
    }
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickList (d) {
      this.$router.push({name: 'RepairDetail', params: {id: d.id}})
    },
    handleOnClickBtn (d, btn) {
      switch (btn.id) {
        case 0:
          this.$router.push({name: 'RepairView', params: {id: d.id}})
          break
      }
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
