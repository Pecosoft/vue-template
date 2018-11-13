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

  sender(v-if='suggestDetail.status === 0' @onsend='handleOnSend')
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import Sender from 'components/Chat/sender'
import { suggest } from '@/services'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('suggest')

export default {
  name: 'index',
  components: {
    TalkCard,
    Sender
  },
  data () {
    return {
      id: this.$route.params.id,
      user: {
        name: '',
        intro: '',
        avatar: ''
      },
      suggestDetail: {
      }
    }
  },
  computed: {
    ...mapState(['details'])
  },
  methods: {
    ...mapActions(['read']),
    handleOnSend (sendContent) {
      this.suggestDetail.reply = {
        user: this.user,
        create_time: new Date().getTime(),
        content: sendContent
      }
      this.suggestDetail.status = 1
      suggest.update(this.id, {
        content: sendContent,
        action: 'reply'
      })
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.read(this.$route.params.id).then(res => {
      this.suggestDetail = res
      this.$peco.loading.hide()
      this.$store.dispatch('user/read').then((user) => {
        this.user = {
          user_id: user.user_id,
          name: user.employee.name,
          intro: user.mobile,
          avatar: user.avatar
        }
      })
    })
  }
}
</script>

<style lang="scss">

</style>
