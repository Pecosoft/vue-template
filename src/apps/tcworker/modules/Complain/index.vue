<template lang="pug">
  page
    complain-list(:data='list' style='margin-bottom: 60px')
    .peco-fixed-bottom-area
      ul.peco-h-flex-btns
        li.peco-h-flex-btn
          router-link(:to='{name: "ComplainCreate", query: {cate: 1}}') 产品投诉
        li.peco-h-flex-btn
          router-link(:to='{name: "ComplainCreate", query: {cate: 2}}') 服务投诉
</template>

<script>
import ComplainList from 'components/Business/ComplainList'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('complain')

export default {
  components: {
    ComplainList
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
@import 'tcworker/style.scss';
</style>
