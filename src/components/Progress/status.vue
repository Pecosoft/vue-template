<template lang="pug">
  .peco-hprog-status
    ul
      li(v-for='(status, idx) in statusSets')
        .circle(:class='{active: idx <= statusIdx }')
        p {{ status.text }}
    .line(:style='lineStyle')
</template>

<script>
import isArray from 'utils/isArray'

export default {
  name: 'PStatus',
  props: ['value'],
  data () {
    return {
      lineStyle: {
        left: '0',
        right: '0'
      },
      statusSets: [
        {
          value: 0,
          text: '待受理'
        },
        {
          value: [1, 2],
          text: '已受理'
        },
        {
          value: [3, 4],
          text: '进行中'
        },
        {
          value: 5,
          text: '已完成'
        },
        {
          value: 7,
          text: '已评价'
        }
      ]
    }
  },
  computed: {
    statusIdx () {
      let value = this.value
      if (!value) value = 0
      let statusSets = this.statusSets
      for (let i=0, len=statusSets.length; i<len; i++) {
        let status = statusSets[i]
        let _value = status.value
        if (isArray(_value)) {
          if (_value.indexOf(value) !== -1) {
            return i
          }
        } else if (value == _value) {
          return i
        }
      }
      return 0
    }
  },
  mounted() {
    this.updateLinePosition()
  },
  methods: {
    updateLinePosition () {
      let el = this.$el
      let width = el.offsetWidth
      let circles = el.querySelectorAll('.circle')
      let len = circles.length
      let first = circles[0]
      let last = circles[len-1]

      let left = first.offsetLeft
      let right = width - last.offsetLeft

      this.lineStyle = Object.assign({}, {left: left + 'px', right: right + 'px'})
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
@import 'style/mixin/_line.scss';
@import 'style/extend/_layout.scss';

.peco-hprog-status {
  background: #fff;
  overflow: hidden;
  position: relative;
  ul {
    display: flex;
    height: 80px;
    li {
      flex: 1;
      text-align: center;
    }
  }
  .circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: $gray-500;
    margin: 16px 0 5px;
    position: relative;
    z-index: 1;
    &.active {
      background: $color-primary;
    }
  }
  .line {
    position: absolute;
    margin-top: -2px;
    top: 26px;
    height: 4px;
    background: $color-border;
    left: 0;
    right: 0;
    transform: scaleY(.5);
  }
}
</style>
