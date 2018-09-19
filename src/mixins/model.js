export default {
  props: ['value'],
  data () {
    return {
      thisValue: this.value || ''
    }
  },
  watch: {
    value (newVal) {
      this.thisValue = newVal
      this.$emit('input', newVal)
    }
  }
}
