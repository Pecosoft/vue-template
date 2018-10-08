<template lang="pug">
page
  talk-card(:header='complainDetail.user' :btns='btns' @clickbtn='handleOnClickBtn')
    template(v-if='complainDetail.cate==1')
      p 产品型号：
        span.gray {{ complainDetail.product_model }}
      p 机台编号：
        span.gray {{ complainDetail.machine_sn }}
    p 投诉描述：
      span.gray {{ complainDetail.description }}
    p(style='margin-top: 15px') 联系电话：
      span.link {{ complainDetail.contact }}
  div(style='padding: 20px 15px 10px; font-size: 14px;') 回复：
  talk-card(:header='complainDetail.reply.user' :btns='btns' @clickbtn='handleOnClickBtn')
    p 回复：
      span.gray {{ complainDetail.reply.content }}
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('complain')

export default {
  name: 'index',
  components: {
    TalkCard
  },
  data () {
    return {
      id: this.$route.params.id,
      complainDetail: {
        user: {
          name: '',
          intro: '',
          avatar: '/static/logo.png',
          datetime: new Date().getTime()
        },
        product_model: '',
        description: '',
        contact: '',
        reply: {
          user: {
            name: '',
            intro: '',
            avatar: '/static/logo.png',
            datetime: new Date().getTime()
          },
          content: ''
        }
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
      this.complainDetail = res
      this.$peco.loading.hide()
    })
  }
}
</script>

<style lang="scss">

</style>
