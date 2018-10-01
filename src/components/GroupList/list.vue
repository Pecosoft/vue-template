<template lang="pug">
  .peco-groups-list
    ul.peco-group-list
      li(v-for='gp in thisData')
        h3 {{ gp.name }}
        ul
          li(v-for='item in gp.children' :class='{checked: isChecked(item), "has-avatar": item.avatar}' @click='$emit("onchecked", item)')
            div(v-if='item.avatar')
              img(:src='item.avatar')
              p {{ item.name }}
              i.peco-icon.peco-icon-checked
              i.peco-icon.peco-icon-uncheck
            div(v-else)
              p {{ item.name }}
              i.peco-icon.peco-icon-checked
              i.peco-icon.peco-icon-uncheck
</template>

<script>
import data from 'mixins/data'

export default {
  name: 'GroupList',
  mixins: [data],
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

.peco-group-list {
  background: #EEEEEE;
  h3 {
    padding: 10px 20px 5px;
    font: 14px/24px PingFangSC-Regular,sans-serif;
    color: #999999;
  }
  ul {
    background: #fff;
    li {
      height: 50px;
      padding-left: 20px;
      font: 17px/50px PingFangSC-Regular,sans-serif;
      color: #333333;
      position: relative;
      &+li {
        border-top: 1px solid #f6f6f6;
      }
      .peco-icon {
        position: absolute;
        right: 30px;
        top: 13px;
        display: none;
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
        p {
          flex: 1;
          padding: 0 54px 0 10px;
        }
        .peco-icon {
          top: 28px;
        }
      }
      &.checked {
        .peco-icon-checked {
          display: block;
        }
      }
      &.disable {
        .peco-icon-checkeded {
          display: block;
        }
      }
    }
  }
}

.peco-group-list ul li .peco-icon.peco-icon-uncheck {
  display: block;
}

.peco-group-list ul li.checked .peco-icon.peco-icon-uncheck {
  display: none;
}

.peco-group-list ul li.disabled .peco-icon {
  &.peco-icon-uncheck, &.peco-icon-checked {
    display: none;
  }
}

.peco-group-list ul li .peco-icon {
  right: 15px !important;
}
</style>
