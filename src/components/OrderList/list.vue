<template lang="pug">
  .peco-order-list
    .peco-order-list-item(v-for='item in thisData' @click='$emit("clicklist", item)')
      p {{ item.name }}
</template>

<script>
import list from '@/mixins/list'

export default {
  name: 'OrderList',
  mixins: [list],
  mounted () {
    this.sortBy('id', 'asc')
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

.peco-order-list {
  @include clearfix;
  font-size: 2rem;
}
.peco-order-list-item {

}
</style>
