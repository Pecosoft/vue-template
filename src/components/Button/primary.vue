<template lang="pug">
  button.peco-btn.peco-btn_primary(:class='{"peco-btn_loading": thisLoading, "peco-btn_plain-primary": plain, "peco-btn_disabled": thisDisable, "peco-btn_plain-disabled": plain && thisDisable }')
    .peco-loading(v-if='thisLoading')
    slot
</template>

<script>
import button from 'mixins/button'

export default {
  name: 'BtnPrimary',
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

.peco-btn_primary {
  background-color: #1AAD19;
  &:not(.peco-btn_disabled):visited {
    color: #FFFFFF;
  }
  &:not(.peco-btn_disabled):active {
    color: rgba(255,255,255,.6);
    background-color: #179B16;
  }
}

.peco-btn_plain-primary {
  color: rgba(26,173,25,1);
  border: 1px solid rgba(26,173,25,1);
  &:not(.peco-btn_plain-disabled):active {
    color: rgba(26,173,25,.6);
    border-color: rgba(26,173,25,.6);
  }
  &:after {
    border-width: 0;
  }
}
</style>
