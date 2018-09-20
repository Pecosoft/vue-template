export default {
  props: ['data'],
  data () {
    return {
      thisData: this.data || []
    }
  },
  watch: {
    data (newVal) {
      this.thisData = newVal
    }
  }
}
