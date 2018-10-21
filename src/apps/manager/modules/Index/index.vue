<template lang="pug">
page
  profile-header(:name='name' :desc='desc' :avatar='avatar')
  grid(:data='gridData' :col-num="2" bg-color="#fff")
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name: this.$store.state.user.user.name,
      desc: this.$store.state.user.user.id,
      avatar: this.$store.state.user.user.avatar || 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/manager/repair'},
        {id: 3, name: '投诉', icon: 'complain', url: '/manager/complain'},
        {id: 4, name: '建议', icon: 'suggest', url: '/manager/suggest'}
      ]
    }
  }
}
</script>
