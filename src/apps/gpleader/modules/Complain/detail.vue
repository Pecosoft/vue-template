<template lang="pug">
page
  talk-card(v-if='complainDetail.description' :data='complainDetail')
    template(v-if='complainDetail.cate==1')
      p 产品型号：
        span.gray {{ complainDetail.product_model }}
      p 机台编号：
        span.gray {{ complainDetail.machine_sn }}
    p 投诉描述：
      span.gray {{ complainDetail.description }}
    p(style='margin-top: 15px') 联系电话：
      span.link {{ complainDetail.contact }}
  template(v-if='complainDetail.status == 2 && complainDetail.reply')
    div(style='padding: 20px 15px 10px; font-size: 14px;') 回复：
    talk-card(:data='complainDetail.reply')
      p 回复：
        span.gray {{ complainDetail.reply.content }}

  sender(v-if='complainDetail.status === 0' @onsend='handleOnSend')
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import Sender from 'components/Chat/sender'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('complain')

export default {
  name: 'index',
  components: {
    TalkCard,
    Sender
  },
  data () {
    return {
      id: this.$route.params.id,
      complainDetail: {
      }
    }
  },
  computed: {
    ...mapState(['details'])
  },
  methods: {
    ...mapActions(['read']),
    handleOnSend (sendContent) {
      this.complainDetail.reply = {
        user: {
          name: 'xxx',
          intro: 'XXXX',
          avatar: '/static/logo.png'
        },
        create_time: new Date().getTime(),
        content: sendContent
      }
      this.complainDetail.status = 2
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
