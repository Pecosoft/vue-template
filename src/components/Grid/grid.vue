<template lang="pug">
  .peco-grid(:style='`background:${backgroundColor}`')
    div.peco-grid-item(:style='itemStyle' v-for='item in thisData')
      div(style='overflow: hidden')
        i.peco-icon(:class='`peco-icon-${item.icon}`')
      p {{ item.name }}
</template>

<script>
export default {
  name: 'Grid',
  props: ['data', 'colNum', 'bgColor'],
  data () {
    return {
      thisColNum: this.colNum || 3,
      backgroundColor: this.bgColor || '#fff',
      // eslint-disable-next-line
      thisData: this.data || [
        {id: 1, name: '报修', icon: 'repaire'},
        {id: 2, name: '咨询', icon: 'consult'},
        {id: 3, name: '投诉', icon: 'complain'},
        {id: 4, name: '建议', icon: 'suggest'}
      ]
    }
  },
  computed: {
    itemStyle () {
      return {
        width: (1 / this.thisColNum * 100) + '%',
      }
    }
  },
  mounted () {
    // eslint-disable-next-line
    let cols = this.thisColumns
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

.peco-grid {
  @include clearfix;
  font-size: 2rem;
}
.peco-grid-item {
  float: left;
  height: 5em;
  text-align: center;
  p {
    margin: 0;
  }
}
</style>
