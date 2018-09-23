<template lang="pug">
  router-link.peco-card.peco-card-info(v-if='editUrl' :to='editUrl')
    .peco-info-bd
      p.peco-info-row(v-for='row in thisInfos' :style='row.style')
        span.peco-info-col(v-for='col in row.row' :style='col.style') {{ col.value }}
    .peco-info-ft
      i.arrow-right-gray
  .peco-card.peco-card-info(v-else)
    .peco-info-bd
      p.peco-info-row(v-for='row in thisInfos' :style='row.style')
        span.peco-info-col(v-for='col in row.row' :style='col.style') {{ col.value }}
</template>

<script>
export default {
  name: 'InfoCard',
  props: ['infos', 'editUrl', 'bgColor'],
  data () {
    return {
      thisInfos: this.infos || [],
      thisBgColor: this.bgColor || '#fff'
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

.peco-card {
  display: block;
  position: relative;
  @extend %pannel;
}

.peco-card.peco-card-info {
  @extend %flex-row;
  align-items: center;
  font-size: 2rem;
}

.peco-info-bd {
  flex: 1;
  padding: 10px 0 10px 15px;
}

.peco-info-ft {
  width: 30px;
  text-align: center;
}

.arrow-right-gray {
  display: inline-block;
  @include arrow-right(.5em, $gray-500);
}

.peco-info-row {
  @include clearfix;
}

.peco-info-col {
  float: left;
  display: inline-block;
}
</style>
