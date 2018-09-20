import data from './data'

export default {
  mixins: [data],
  methods: {
    append (item) {
      this.thisData.push(item)
    },
    prepend (item) {
      this.thisData.unshift(item)
    },
    remove (item) {
      let thisData = this.thisData
      let idx = thisData.indexOf(item)

      if (idx !== -1) thisData.splice(idx, 1)
    },
    sortBy (field, direct = 'desc') {
      let thisData = this.thisData
      let sign = direct === 'desc' ? -1 : 1
      let isNum = !isNaN(parseInt(thisData[0][field]))
      let sort = isNum ? (a, b) => (a[field] - b[field]) * sign
        : (a, b) => (a[field] > b[field] ? -1 : a[field] < b[field] ? 1 : 0) * sign

      thisData.sort(sort)
    }
  }
}
