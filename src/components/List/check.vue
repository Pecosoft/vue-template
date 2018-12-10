<template lang="pug">
  div
    ul.peco-checklist
      li(v-for='item in thisData' class="has-avatar" :class='{checked: isChecked(item)}' @click='$emit("onchecked", item)')
        div(v-if='item.avatar')
          img(:src='item.avatar')
          section
            p {{ item.name }}
              span(v-if='item.onwork !== undefined' style='margin-left: 5px') (处理中: {{ item.onwork }}单)
            p(v-if='item.province' style='font-size: 12px') {{ item.province + ' ' + item.city + ' ' + item.area }}
          i.peco-icon.peco-icon-checked
          i.peco-icon.peco-icon-uncheck
        div(v-else)
          img(src='http://static.taikan.fvtools.com/logo.png' style="object-fit: contain")
          section
            p {{ item.name }}
              span(v-if='item.onwork !== undefined' style='margin-left: 5px') (处理中: {{ item.onwork }}单)
            p(v-if='item.province' style='font-size: 12px') {{ item.province + ' ' + item.city + ' ' + item.area }}
          i.peco-icon.peco-icon-checked
          i.peco-icon.peco-icon-uncheck
    div(v-show='!thisData.length')
      p(style='margin: 80px 0 0; text-align: center; font: 14px/20px PingFangSC-Regular,sans-serif;color: #C1C1C1;') 暂无数据
</template>

<script>
import list from 'mixins/list'

export default {
  name: 'CheckList',
  mixins: [list],
  props: ['checked'],
  data () {
    return {
      thisChecked: this.checked || false
    }
  },
  watch: {
    checked (newVal) {
      this.thisChecked = newVal
    }
  },
  methods: {
    isChecked (item) {
      return item.id === this.thisChecked.id
    }
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

.peco-checklist {
  padding-left: 15px;
  background: #fff;
  li {
    color: #666666;
    position: relative;
    height: 44px;
    font: 14px/44px PingFangSC-Regular,sans-serif;
    &+li {
      border-top: 1px solid #f6f6f6;
    }
    .peco-icon {
      position: absolute;
      right: 15px;
      top: 10px;
    }
    &.has-avatar {
      height: 80px;
      padding-top: 10px;
      &>div {
        display: flex;
      }
      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
      section {
        flex: 1;
        padding: 0 54px 0 10px;
        p {
          line-height: 30px;
        }
      }
      .peco-icon {
        top: 28px;
      }
    }
    .peco-icon-checked {
      display: none;
    }
    &.checked {
      .peco-icon-uncheck {
        display: none;
      }
      .peco-icon-checked {
        display: block;
      }
    }
  }
}
</style>
