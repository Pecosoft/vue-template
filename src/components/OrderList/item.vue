<template lang="pug">
  section.peco-order-item
    .peco-order-item_hd.aux 订单号:&nbsp;
      span {{ thisData.sn }}
      span.frt.red {{ thisData.status|status-text }}
    .peco-order-item_bd
      .peco-order-item_inner.mc
        img(:src='thisData.product.avatar')
        .flex1
          h3.link {{ thisData.product.name }}
          p {{ thisData.desc }}
      p.aux.gray 所属区域:&nbsp;{{ thisData.addr||'地址' }}
    .peco-order-item_ft.aux
      span.gray {{ thisData.create_time|time-text }}
      span.frt.link(v-for='btn in btns' :key='btn.id' @click.stop='$parent.$emit("clickbtn", thisData, btn)') {{ btn.name }}
</template>

<script>
import listItem from '@/mixins/listItem'
/* eslint-disable */
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
  computed: {
    btns () {
      let status = parseInt(this.thisData.status)
      let privs = this.$parent.privs
      return privs[status]
    }
  },
  methods: {
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
    h3+p {
      margin-top: $edge-distance;
    }
  }
}

.peco-order-item_ft {
  padding: 10px 0 0;
  span.frt {
    display: inline-block;
    position: relative;
    padding-left: 6px;
    &+span.frt {
      padding-right: 7px;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 3px;
        right: 0;
        height: 12px;
        width: 1px;
        background: $color-border;
      }
    }
  }
}

.flex1 {
  flex: 1;
}

.primary {
  color: $color-primary;
}

.red {
  color: $red;
}

.link {
  color: $color-link;
}

.gray {
  color: $gray-600;
}

.mc {
  font-size: $font-size-primary;
}
.aux {
  font-size: $font-size-aux;
}
.frt {
  float: right;
}
</style>
