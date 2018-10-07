<template lang="pug">
  router-link.peco-cell(v-if='route' :to='route')
    slot(name='prefix')
    .peco-cell__bd
      slot
    .peco-cell__ft
      i.arrow-right-gray
  .peco-cell(v-else)
    slot(name='prefix')
    .peco-cell__bd
      slot
</template>

<script>
export default {
  name: 'Cell',
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
@import 'style/mixin/_line.scss';
@import 'style/extend/_layout.scss';

.peco-cell {
  display: flex;
  position: relative;
  align-items: center;
  font-size: 2rem;
  @extend %pannel;
  &+& {
    &:before {
      @include setTopLine;
    }
  }
}

.peco-cell__bd {
  flex: 1;
  padding: 10px 15px;
}

.peco-cell__ft {
  width: 30px;
  padding-right: 15px;
}
</style>
