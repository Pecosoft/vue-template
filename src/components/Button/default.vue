<template lang="pug">
  button.peco-btn.peco-btn_default(:class='{"peco-btn_loading": thisLoading, "peco-btn_plain-default": plain, "peco-btn_disabled": thisDisable, "peco-btn_plain-disabled": plain && thisDisable }')
    .peco-loading(v-if='thisLoading')
    slot
</template>

<script>
import button from 'mixins/button'

export default {
  name: 'BtnDefault',
  mixins: [button]
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/mixin/_mobile.scss';
@import 'style/extend/_layout.scss';

.peco-btn_default {
  color: #000000;
  background-color: #F8F8F8;
  &:not(.peco-btn_disabled):visited {
    color: #000000;
  }
  &:not(.peco-btn_disabled):active {
    color: rgba(0,0,0,.6);
    background-color: #DEDEDE;
  }
}

.peco-btn_plain-default {
  color: rgba(53,53,53,1);
  border: 1px solid rgba(53,53,53,1);
  &:not(.peco-btn_plain-disabled):active {
    color: rgba(53,53,53,.6);
    border-color: rgba(53,53,53,.6);
  }
  &:after {
    border-width: 0;
  }
}
</style>
