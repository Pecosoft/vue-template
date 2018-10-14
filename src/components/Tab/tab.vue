<template lang="pug">
  .peco-tabs(:class='{flex: flex}')
    .peco-tab(v-for='(tab, idx) in tabs' :class='{checked: currentValue==idx}' @click.stop='clickTab(idx)') {{ tab }}
</template>

<script>
import tab from 'mixins/tab'

export default {
  name: 'Tab',
  mixins: [tab],
  props: {
    flex: {
      type: Boolean,
      default: true
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

.peco-tabs {
  overflow: hidden;
  height: 40px;
  background: #fff;
  padding: 0 15px;
  border-bottom: 1px solid #F6F6F6;
  .peco-tab {
    float: left;
    box-sizing: border-box;
    padding: 10px 0 9px;
    color: #333;
    font-size: 15px;
    line-height: 21px;
    height: 100%;
    position: relative;
    cursor: pointer;
    text-align: center;
    &+.peco-tab {
      margin-left: 20px;
    }
    &.checked {
      color: $color-primary;
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: $color-primary;
      }
    }
  }
  &.flex {
    display: flex;
    .peco-tab {
      flex: 1;
    }
  }
}
</style>
