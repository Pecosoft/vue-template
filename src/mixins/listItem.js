import data from './data'

export default {
  mixins: [data],
  data () {
    return {
      list: this.$parent
    }
  },
  methods: {
    remove () {
      this.list.remove(this.thisData)
    }
  }
}
