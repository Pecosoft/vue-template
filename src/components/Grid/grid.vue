<template lang="pug">
  .peco-grid.border(:style='`background:${backgroundColor}`')
    div.peco-grid-item(:style='itemStyle' v-for='item in thisData' @click='$emit("clickgrid", item)')
      i.peco-icon(:class='`peco-icon-${item.icon}`')
      p {{ item.name }}
</template>

<script>
export default {
  name: 'Grid',
  props: ['data', 'colNum', 'bgColor'],
  data () {
    return {
      thisColNum: this.colNum || 2,
      backgroundColor: this.bgColor || '#fff',
      thisData: this.data || []
    }
  },
  computed: {
    itemStyle () {
      return {
        width: (1 / this.thisColNum * 100) + '%',
        padding: '20px 0'
      }
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

.peco-grid {
  @include clearfix;
  font-size: 2rem;
}
.peco-grid-item {
  float: left;
  text-align: center;
}

.peco-grid.border {
  position: relative;
  &:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 200%;
    border: 1px solid $color-border;
    color: $color-border;
    transform-origin: 0 0;
    transform: scale(.5);
  }
  &:after {

  }
  .peco-grid-item {
    position: relative;
    &:before,&:after {
      content: " ";
      position: absolute;
      color: $color-border;
    }
    &:before {
      right: 0;
      top: 0;
      width: 1px;
      height: 100%;
      border-right: 1px solid $color-border;
      transform-origin: 100% 0;
      transform: scaleX(.5);
    }
    &:after {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid $color-border;
      transform-origin: 0 100%;
      transform: scaleY(.5);
    }
  }
}
</style>
