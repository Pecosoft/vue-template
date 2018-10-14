<template lang="pug">
  li
    .peco-event__hd
      .circle(:class='{active: index==0}')
    .peco-event__bd
      slot
</template>

<script>
export default {
  name: 'PEvent',
  data () {
    return {
      index: null
    }
  }
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/mixin/_line.scss';
@import 'style/extend/_layout.scss';
</style>
