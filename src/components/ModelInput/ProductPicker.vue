<template lang="pug">
  router-link.peco-model-input.tapable(:to='{name: "ProductPicker"}')
    .peco-model-input_bd
      .peco-input {{ label }}
    .peco-model-input_ft
      i.arrow-right-gray
</template>

<script>
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [modelinput]
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

.peco-picker {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.peco-picker-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.5);
}

.peco-picker-content {
  position: relative;
  z-index: 1;
}
</style>
