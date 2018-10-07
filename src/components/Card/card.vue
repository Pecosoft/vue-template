<template lang="pug">
  router-link.peco-card(v-if='route' :to='route')
    .peco-card-bd
      slot
    .peco-card-ft
      i.arrow-right-gray
  .peco-card(v-else)
    .peco-card-bd
      slot
</template>

<script>
export default {
  name: 'Card',
  props: ['route']
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

.peco-card {
  display: flex;
  position: relative;
  align-items: center;
  font-size: 2rem;
  @extend %pannel;
  &+& {
    margin-top: 10px;
  }
}

.peco-card-bd {
  flex: 1;
  padding: 10px 15px;
}

.peco-card-ft {
  width: 30px;
  padding-right: 15px;
}
</style>
