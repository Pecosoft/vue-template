<template lang="pug">
page
  h2(style='margin: 15px') 请提交您的投诉意见，我们会尽快回复您。
  create(ref='create' @oncreated='handleOnCreated' v-if='cate==1' title='新增产品投诉' btn-text='提交投诉' resource-name='complain' :model='complain1' store-module='complain' form-name='productForm')
  create(ref='create' @oncreated='handleOnCreated' v-else title='新增服务投诉' btn-text='提交投诉' resource-name='complain' :model='complain' store-module='complain' form-name='serviceForm')
</template>

<script>
import { complain, complain1 } from '@/models'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('complain')

export default {
  data () {
    return {
      complain,
      complain1,
      cate: this.$route.query.cate
    }
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnCreated (res) {
      this.$peco.toast.show('提交成功')
      this.fetch(true).then(_ => {
        this.$router.go(-1)
      })
    }
  },
  mounted () {
    let userId = this.$store.state.user.user && this.$store.state.user.user.user_id
    let mobile = this.$store.state.user.user && this.$store.state.user.user.customer.mobile
    if (userId) {
      this.$store.commit('complain/PUT_USER_ID', userId)
    }
    if (mobile) {
      this.$refs.create.set('contact', mobile)
      this.$store.commit('complain/PUT_CONTACT', mobile)
    }
  }
}
</script>
