<template lang="pug">
.peco-rate-stars
  star(:active='thisData > 0')
  star(:active='thisData > 1')
  star(:active='thisData > 2')
  star(:active='thisData > 3')
  star(:active='thisData > 4')
</template>

<script>
import Star from './star'
import data from 'mixins/data'

export default {
  mixins: [data],
  components: {
    Star
  }
}
</script>

<style lang="scss">
.peco-rate-stars {
  display: inline-block;
}
.peco-rate-star {
  &+& {

  }
}
</style>
