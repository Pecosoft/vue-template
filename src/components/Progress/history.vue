<template lang="pug">
  .peco-vprog-history
    ul
      slot
    .line(:style='lineStyle')
</template>

<script>
export default {
  name: 'PHistory',
  data () {
    return {
      lineStyle: {
        top: '0',
        bottom: '0'
      }
    }
  },
  mounted () {
    setTimeout(_ => {
      this.updateIndex()
      this.updateLinePosition()
    }, 100)
  },
  methods: {
    updateIndex () {
      let children = this.$children
      let len = children.length
      for (let i = 0; i < len; i++) {
        children[i].index = i
      }
    },
    updateLinePosition () {
      let el = this.$el
      let height = el.offsetHeight
      let circles = el.querySelectorAll('.circle')
      let len = circles.length
      let first = circles[0]
      let last = circles[len - 1]

      let top = first.offsetTop
      let bottom = height - last.offsetTop
      // console.log(top, bottom)
      // this.$set(this.lineStyle, 'top', top + 'px')
      // this.$set(this.lineStyle, 'bottom', bottom + 'px')
      this.lineStyle = Object.assign({}, {top: top + 'px', bottom: bottom + 'px'})
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

.peco-vprog-history {
  background: #fff;
  overflow: hidden;
  position: relative;
  ul {
    li {
      display: flex;
      padding: 10px 15px 10px 0;
      .peco-event__hd {
        width: 40px;
        text-align: center;
      }
      .peco-event__bd {
        flex: 1;
        line-height: 24px;
      }
      &+li {
        border-top: 1px solid $color-border;
      }
    }
  }
  section {
    &:after {
      display: block;
      clear: both;
      content: '';
    }
    & + & {
      margin-top: 5px;
    }
  }
  .event-title {
    font-weight: normal;
    font-size: 14px;
  }
  .event-content {
    color: #666;
  }
  .event-location {
    color: $color-link;
    font-size: 12px;
  }
  .event-img {
    width: 80px;
    height: 80px;
    -o-object-fit: cover;
    object-fit: cover;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .circle {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: $gray-500;
    margin-top: 6px;
    position: relative;
    z-index: 1;
    &.active {
      background: $color-primary;
    }
  }
  .line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 4px;
    margin-left: -2px;
    background: $color-border;
    transform: scaleX(.5);
  }
}

.peco-hprog-status + .peco-vprog-history {
  margin-top: 10px;
}
</style>
