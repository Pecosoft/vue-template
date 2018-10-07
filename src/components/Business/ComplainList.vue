<template lang="pug">
  .peco-complain
    router-link.peco-complain-item(:to='{name: "ComplainDetail", params: {id: item.id}}' v-for='item in thisData' :key="item.id")
      p.peco-complain-time {{ item.create_time|timestamp-to-text }}
      p.peco-complain-contact {{ item.contact }}
      template(v-if='item.cate==1')
        p
          strong 产品型号：
          span {{ item.product_model }}
        p
          strong 机台编号：
          span {{ item.machine_sn }}
      p
        strong 投诉描述：
        span {{ item.description }}
      .peco-complain-status(v-if='item.status==1') {{ item.status|complain-status }}
</template>

<script>
import list from '@/mixins/list'
import { timestampToText, complainStatus } from '@/filters'

export default {
  name: 'ComplainList',
  mixins: [list],
  filters: {
    timestampToText,
    complainStatus
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
@import 'style/mixin/_line.scss';
@import 'style/mixin/_mobile.scss';
@import 'style/extend/_layout.scss';

.peco-complain {
}
.peco-complain-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  background: #fff;
  overflow: hidden;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  & + & {
    margin-top: 5px;
  }
  P + p {
    margin-top: 5px;
  }
}

a.peco-complain-item {
  color: #333;
  font-size: 14px;
}

.peco-complain-time {
  font-size: 12px;
  color: #999;
}
.peco-complain-contact {
  font-size: 16px;
  line-height: 26px;
}

.peco-complain-status {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 12px;
  color: $red;
}
</style>
