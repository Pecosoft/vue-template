<template lang="pug">
  page
    suggest-list(:data='list' style='margin-bottom: 60px')
    .peco-fixed-bottom-area
      ul.peco-h-flex-btns
        li.peco-h-flex-btn
          router-link(:to='{name: "SuggestCreate"}') 新增建议
</template>

<script>
import SuggestList from 'components/Business/SuggestList'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('suggest')

export default {
  components: {
    SuggestList
  },
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
@import 'customer/style.scss';
</style>
