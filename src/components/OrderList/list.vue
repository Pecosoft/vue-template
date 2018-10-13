<template lang="pug">
  .peco-order-list
    item(v-for='item in thisData' :data="item" :key="item.id" @click.native.stop='$emit("clicklist", item)')
</template>

<script>
import list from '@/mixins/list'
import item from './item'

export default {
  name: 'OrderList',
  mixins: [list],
  props: {
    privs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    item
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
</style>
