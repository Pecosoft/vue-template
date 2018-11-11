<template lang="pug">
page
  talk-card(v-if='suggestDetail.description' :data='suggestDetail')
    p 产品：
      span.gray {{ suggestDetail.product_model }}
    p 建议：
      span.gray {{ suggestDetail.description }}
    p(style='margin-top: 15px') 联系电话：
      span.link {{ suggestDetail.contact }}
  template(v-if='suggestDetail.status === 1 && suggestDetail.reply')
    div(style='padding: 20px 15px 10px; font-size: 14px;') 回复：
    talk-card(:data='suggestDetail.reply')
      p 回复：
        span.gray {{ suggestDetail.reply.content }}
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('suggest')

export default {
  name: 'index',
  components: {
    TalkCard
  },
  data () {
    return {
      id: this.$route.params.id,
      suggestDetail: {
      },
      btns: [
      ]
    }
  },
  computed: {
    ...mapState(['details'])
  },
  methods: {
    ...mapActions(['read']),
    handleOnClickBtn (btn) {
      console.log(btn)
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.read(this.$route.params.id).then(res => {
      this.suggestDetail = res
      this.$peco.loading.hide()
    })
  }
}
</script>

<style lang="scss">

</style>
