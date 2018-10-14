<template lang="pug">
  .peco-suggest
    router-link.peco-suggest-item(:to='{name: "SuggestDetail", params: {id: item.id}}' v-for='item in thisData' :key="item.id")
      p.peco-suggest-time {{ item.create_time|timestamp-to-text }}
      p.peco-suggest-contact {{ item.contact }}
      p {{ item.product_model }}
      p {{ item.description }}
      .peco-suggest-status(v-if='item.status==1') {{ item.status|suggest-status }}
</template>

<script>
import list from '@/mixins/list'
import { timestampToText, suggestStatus } from '@/filters'

export default {
  name: 'suggestList',
  mixins: [list],
  filters: {
    timestampToText,
    suggestStatus
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

.peco-suggest {
}
.peco-suggest-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  background: #fff;
  overflow: hidden;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  p {
    color: $color-text;
  }
  & + & {
    border-top: 0;
  }
  P + p {
    margin-top: 5px;
  }
}

a.peco-suggest-item {
  color: #333;
  font-size: 14px;
}

.peco-suggest-time {
  font-size: 12px;
  color: #999;
}
.peco-suggest-contact {
  font-size: 16px;
  line-height: 26px;
}

.peco-suggest-status {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 12px;
  color: $red;
}
</style>
