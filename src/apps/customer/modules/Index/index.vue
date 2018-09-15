<template lang="pug">
div
  profile-header(:name='name' :desc='desc' :avatar='avatar')
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name: '台群精机',
      desc: '台群阳光服务，在线报修',
      avatar: 'static/logo.png'
    }
  }
}
</script>
