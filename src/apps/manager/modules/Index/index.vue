<template lang="pug">
page
  profile-header(:name='name' :desc='desc' :avatar='avatar')
  grid(:data='gridData' :col-num="2" bg-color="#fff")
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  data () {
    return {
      name: '管理人员',
      desc: '广东省 东莞市',
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/manager/repair'},
        {id: 3, name: '投诉', icon: 'complain', url: '/manager/complain'},
        {id: 4, name: '建议', icon: 'suggest', url: '/manager/suggest'}
      ]
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
