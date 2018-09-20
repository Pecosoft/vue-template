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
        return [
          [{id: 0, name: '查看'}, {id: 1, name: '分配'}],
          [{id: 0, name: '查看'}, {id: 2, name: '分配'}, {id: -1, name: '撤回'}, {id: -2, name: '驳回'}],
          [{id: 0, name: '查看'}, {id: 3, name: '接单'}, {id: -3, name: '撤回'}, {id: -4, name: '驳回'}],
          [{id: 0, name: '查看'}, {id: 4, name: '结案'}, {id: -6, name: '协助'}],
          [{id: 0, name: '查看'}, {id: 5, name: '评论'}],
          [{id: 0, name: '查看'}]
        ]
      }
    }
  },
  components: {
    item
  },
  mounted () {
    // this.sortBy('id', 'asc')
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
