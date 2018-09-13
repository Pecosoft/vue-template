<template lang="pug">
  .profile-header
    img.avatar(:src='avatar')
    p {{ name }}
</template>

<script>
export default {
  name: 'ProfileHeader',
  data () {
    return {
      name: 'ken.li',
      avatar: 'http://iph.href.lu/80x80?text=头像'
    }
  }
}
</script>

<style lang="scss">
@import 'style/base.scss';

.profile-header {
  display: block;
}
</style>
