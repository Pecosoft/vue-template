<template lang="pug">
.peco-form-cell.no-padding
  .peco-form-cell__hd(v-if='icon')
    i.peco-icon(:class='`peco-icon-${icon}`')
  .peco-form-cell__bd
    slot
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>
