<template lang="pug">
  .peco-order-list-item
    h3 {{ thisData.sn }}
    p {{ thisData.desc }}
    p {{ thisData.status }}
    div
      img(:src='thisData.product.avatar')
      p {{ thisData.product.name }}
    p {{ thisData.create_time }}
    p
      span(@click.stop='remove') 删除
</template>

<script>
import listItem from '@/mixins/listItem'

export default {
  name: 'ListItem',
  mixins: [listItem],
  mounted () {
    //console.log(this.thisData, this.list)
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

.peco-order-list-item {
  &+& {
    margin-top: 20px;
  }
}
</style>
