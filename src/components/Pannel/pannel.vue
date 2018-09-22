<template lang="pug">
  .peco-pannel(:style='`background-color: ${thisBgColor}; margin: ${thisGutter}px 0;`')
    h3.peco-pannel-hd {{ thisTitle }}
    article.peco-pannel-bd
      slot
</template>

<script>
export default {
  name: 'Pannel',
  props: ['title', 'bgColor', 'gutter'],
  data () {
    return {
      thisTitle: this.title || '面板',
      thisBgColor: this.bgColor || '#fff',
      thisGutter: this.gutter || 0
    }
  },
  watch: {
    title (newVal) {
      this.thisTitle = newVal
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

.peco-pannel-hd {
  padding: 10px;
  color: $gray-500;
  border-bottom: 1px solid $color-border;
}
</style>
