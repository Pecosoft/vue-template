<template lang="pug">
  page
    tab(:tabs='tabs' v-model='tabIndex')
    keep-alive
      complain-list(v-if='tabIndex == 0' :data='list0')
      complain-list(v-else-if='tabIndex == 1' :data='list1')
      complain-list(v-else :data='list2')
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('complain')

export default {
  data () {
    return {
      tabIndex: 0,
      tabs: ['未分配', '已分配', '已完成']
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
        return parseInt(b.create_time) - parseInt(a.create_time)
      })
    },
    list1 () {
      let list = this.list
      let list1 = list.filter(item => {
        if (item.status === 1) {
          return true
        }
        return false
      })
      return list1.sort((a, b) => {
        return parseInt(b.create_time) - parseInt(a.create_time)
      })
    },
    list2 () {
      let list = this.list
      let list2 = list.filter(item => {
        if (item.status === 2) {
          return true
        }
        return false
      })
      return list2.sort((a, b) => {
        return parseInt(b.create_time) - parseInt(a.create_time)
      })
    }
  },
  methods: {
    ...mapActions(['fetch'])
  },
  mounted () {
    this.$peco.loading.show()
    this.fetch().then(data => {
      this.$peco.loading.hide()
    })
  }
}
</script>

<style lang="scss">
@import 'dsclerk/style.scss'
</style>
