<template lang="pug">
  btn.peco-btn_warn
    slot
</template>

<script>
import button from 'mixins/button'
import Btn from './button'

export default {
  name: 'BtnWarn',
  mixins: [button],
  components: {
    Btn
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
@import 'style/mixin/_mobile.scss';
@import 'style/extend/_layout.scss';

.peco-btn_warn {
  background-color: #E64340;
  &:not(.peco-btn_disabled):visited {
    color: #FFFFFF;
  }
  &:not(.peco-btn_disabled):active {
    color: rgba(255,255,255,.6);
    background-color: #CE3C39;
  }
}
</style>
