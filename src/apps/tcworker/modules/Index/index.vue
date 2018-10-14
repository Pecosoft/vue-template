<template lang="pug">
page
  profile-header(:name='name' :desc='desc' :avatar='avatar')
  tab(:tabs='tabs' v-model='tabIndex')
  pannel
    keep-alive
      order-list(v-if='tabIndex == 0' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list0" :privs="privs")
      order-list(v-else-if='tabIndex == 1' @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list1" :privs="privs")
</template>

<script>
import repairAction from '@/flow/repair/action'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  data () {
    return {
      name: '维修人员',
      desc: '台群阳光服务，在线报修',
      avatar: 'static/logo.png',
      tabIndex: 0,
      tabs: ['待处理', '已完成'],
      privs: [
        [],
        [],
        [{id: 'reject2', name: '驳回'}],
        [{id: 'reject2', name: '驳回'}],
        [{id: 'help2', name: '协助原因'}],
        [],
        []
      ]
    }
  },
  computed: {
    ...mapState(['list']),
    list0 () {
      let list = this.list
      let list0 = list.filter(item => {
        if (item.status >= 2 && item.status < 5) {
          return true
        }
        return false
      })
      return list0.sort((a, b) => {
        return a.status !== b.status ? a.status - b.status : b.create_time - a.create_time
      })
    },
    list1 () {
      let list = this.list
      let list1 = list.filter(item => {
        let status = item.status
        if (status >= 5) {
          return true
        }
        return false
      })
      return list1.sort((a, b) => {
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
