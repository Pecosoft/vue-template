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
    },
    thisValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
