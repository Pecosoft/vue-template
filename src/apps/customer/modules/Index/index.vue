<template lang="pug">
div
  profile-header(:name='name' :desc='desc' :avatar='avatar')
  grid(:data='gridData' :col-num="2" bg-color="#fff" @clickgrid="handleOnClickGrid")
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name: '台群精机',
      desc: '台群阳光服务，在线报修',
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire'},
        {id: 2, name: '咨询', icon: 'consult'},
        {id: 3, name: '投诉', icon: 'complain'},
        {id: 4, name: '建议', icon: 'suggest'}
      ]
    }
  },
  methods: {
    handleOnClickGrid: gd => {
      console.log('click on grid', gd.id)
    }
  }
}
</script>
