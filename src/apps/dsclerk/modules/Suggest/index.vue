<template lang="pug">
  page
    talk-card(v-for='item in list' :key='item.id' :header='item.user' @click.native='handleOnClickTalkCard(item)')
      p 产品：
        span.gray {{ item.product_model }}
      p 建议：
        span.gray {{ item.description }}
      p(style='margin-top: 15px') 联系电话：
        span.link {{ item.contact }}
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('suggest')

export default {
  components: {
    TalkCard
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickTalkCard (item) {
      this.$router.push({ name: 'ComplainDetail', params: { id: item.id } })
    }
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
@import 'dsclerk/style.scss'
</style>
