<template lang="pug">
  page
    suggest-list(:data='list')
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('suggest')

export default {
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['fetch'])
  },
  mounted () {
    this.$peco.loading.show()
    this.fetch().then(data => {
      this.$peco.loading.hide()
    })
  }
}
</script>

<style lang="scss">
@import 'manager/style.scss'
</style>
