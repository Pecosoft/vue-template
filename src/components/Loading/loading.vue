<template lang="pug">
  transition(:name='transition')
    div(v-show='show')
      .peco-mask_transparent
      .peco-toast
        i.peco-loading.peco-icon_toast
        p.peco-toast__content {{ text || '加载中...' }}
</template>

<script>
export default {
  name: 'Loading',
  props: {
    show: Boolean,
    text: String,
    position: String,
    transition: {
      type: String,
      default: 'fade'
    }
  },
  watch: {
    show (val) {
      this.$emit('update:show', val)
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
@import 'style/extend/_layout.scss';

.peco-icon_toast.peco-loading {
  margin: 30px 0 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
  display: inline-block;
}
</style>
