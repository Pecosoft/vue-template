<template lang="pug">
  page
    complain-list(:data='list1and2' :privs='privs')
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('complain')

export default {
  data () {
    return {
      privs: [
        [],
        [{id: 'contact', name: '联系用户'}, {id: 'reject', name: '驳回'}],
        []
      ]
    }
  },
  computed: {
    ...mapState(['list']),
    list1and2 () {
      let list = this.list
      let list1 = list.filter(item => {
        if (item.status > 0) {
          return true
        }
        return false
      })
      return list1.sort((a, b) => {
        return a.status !== b.status ? a.status - b.status : parseInt(b.create_time) - parseInt(a.create_time)
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
@import 'gpleader/style.scss'
</style>
