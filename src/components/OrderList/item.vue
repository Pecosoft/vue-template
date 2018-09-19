<template lang="pug">
  section.peco-order-item
    .peco-order-item_hd.aux 订单号:&nbsp;
      span {{ thisData.sn }}
      span.frt {{ thisData.status|status-text }}
    .peco-order-item_bd
      .peco-order-item_inner
        img(:src='thisData.product.avatar')
        .flex1
          p {{ thisData.product.name }}
          p {{ thisData.desc }}
      p 所属区域:&nbsp;{{ thisData.addr||'地址' }}
    .peco-order-item_ft
      span {{ thisData.create_time|time-text }}
      span.frt(@click.stop='remove') 删除
</template>

<script>
import listItem from '@/mixins/listItem'

export default {
  name: 'ListItem',
  mixins: [listItem],
  filters: {
    statusText (val) {
      return val === 0 ? '未受理'
        : val === 1 ? '已受理'
        : val === 2 ? '已派单'
        : val === 3 ? '维修中'
        : val === 4 ? '已完成'
        : val === 5 ? '已评论' : 'unknown';
    },
    timeText (val) {
      if (String(val).length !== 13) val *= 1000;

      let dt = new Date(val);

      return dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate() + ' '
         + dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds()
    }
  },
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

.peco-order-item {
  background: $color-pannel-bg;
  padding: $edge-distance;
  &+& {
    border-top: 1px solid $color-border;
  }
}

.peco-order-item_hd {
  padding: 0 0 10px;
  border-bottom: 1px solid $color-border2;
}

.peco-order-item_bd {
  padding: 10px 0;
  border-bottom: 1px solid $color-border2;
}

.peco-order-item_inner {
  @extend %flex-row;
  padding-bottom: 10px;
  img {
    @include size(80px);
  }
  .flex1 {
    padding: 0 0 0 $edge-distance;
    p+p {
      margin-top: $edge-distance;
    }
  }
}

.peco-order-item_ft {
  padding: 10px 0 0;
}

.flex1 {
  flex: 1;
}

.aux {
  font-size: $font-size-aux;
}
.frt {
  float: right;
}
</style>
