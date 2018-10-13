<template lang="pug">
  section.peco-order-item
    .peco-order-item_hd.aux 订单号:&nbsp;
      span {{ thisData.sn }}
      span.frt.red {{ thisData.status|status-to-text }}
    .peco-order-item_bd
      .peco-order-item_inner.mc
        img(:src='thisData.product.avatar')
        .flex1
          h3.link {{ thisData.product.name }}
          p {{ thisData.desc }}
      p.aux.gray 所属区域:&nbsp;{{ thisData.addr||'地址' }}
    .peco-order-item_ft.aux
      span.gray {{ thisData.create_time|timestamp-to-text }}
      span.frt.link(v-for='btn in btns' :key='btn.id' @click.stop='$parent.$emit("clickbtn", thisData, btn)') {{ btnTpls[btn.id] || btn.name }}
</template>

<script>
import listItem from '@/mixins/listItem'
import { timestampToText, statusToText } from '@/filters'
/* eslint-disable */
export default {
  name: 'ListItem',
  mixins: [listItem],
  filters: {
    statusToText,
    timestampToText
  },
  data () {
    return {
      btnTpls: {}
    }
  },
  computed: {
    btns () {
      let status = parseInt(this.thisData.status)
      let privs = this.$parent.privs
      let privBtns = privs[status]
      privBtns.forEach(item => {
        if (item.template) {
          let template = item.template
          let templateRegx = /\[(.+)\]/
          let matches = template.match(templateRegx)
          let replace = matches[0]
          let fields = matches[1]
          if (fields.indexOf('.') === -1) {
            this.btnTpls[item.id] = template.replace(replace, thisData[fields])
          } else {
            let fieldsArr = fields.split('.')
            let d0 = this.thisData[fieldsArr[0]]
            if (d0) {
              let d1 = d0[fieldsArr[1]]
              if (d1) { this.btnTpls[item.id] = template.replace(replace, d1) }
            }
          }
        }
      })
      return privBtns
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
  border-bottom: 1px solid $color-border;
}

.peco-order-item_bd {
  padding: 10px 0;
  border-bottom: 1px solid $color-border;
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
</style>
