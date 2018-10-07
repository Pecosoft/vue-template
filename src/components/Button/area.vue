<template lang="pug">
  div.peco-btn-area
    slot
</template>

<script>
export default {
  name: 'BtnArea'
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

.peco-btn-area {
  margin: 20px 15px;
}
</style>
