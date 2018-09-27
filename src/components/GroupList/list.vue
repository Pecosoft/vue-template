<template lang="pug">
  .peco-groups-list
    ul.peco-group-list
      li(v-for='gp in thisData')
        h3 {{ gp.name }}
        ul
          li(v-for='item in gp.children' :class='{checked: isChecked(item.id)}' @click='') {{ item.name }}
            i.peco-icon.peco-icon-checked
            i.peco-icon.peco-icon-uncheck
</template>

<script>
import data from 'mixins/data'

export default {
  name: 'GroupList',
  mixins: [data],
  props: ['checkedId'],
  data () {
    return {
      thisChecked: this.checkedId || false
    }
  },
  watch: {
    checkedId (newVal) {
      this.thisChecked = newVal
    }
  },
  computed: {
  },
  methods: {
    isChecked (id) {
      return id === this.thisChecked
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
    padding: 0 20px;
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
