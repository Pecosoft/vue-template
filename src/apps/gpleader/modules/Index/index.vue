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
      name: '维修组长XXX',
      desc: '广东省 东莞市',
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/gpleader/repair'},
        {id: 3, name: '投诉', icon: 'complain', url: '/gpleader/complain'}
      ]
    }
  }
}
</script>
