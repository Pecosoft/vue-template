export default {
  props: ['plain', 'disable', 'loading'],
  data () {
    return {
      thisDisable: this.disable,
      thisLoading: this.loading
    }
  },
  watch: {
    disable (newVal) {
      this.thisDisable = newVal
    },
    loading (newVal) {
      this.thisLoading = newVal
    }
  }
}
