<template lang="pug">
page
  h2(style='margin: 15px') 感谢您对我司产品的改善建议，您的建议是我们前进的动力。
  create(@oncreated='handleOnCreated' title='新增建议' btn-text='提交建议' resource-name='suggest' :model='suggest' store-module='suggest')
</template>

<script>
import { suggest } from '@/models'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('suggest')

export default {
  data () {
    return {
      suggest
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
    if (userId) {
      this.$store.commit('suggest/PUT_USER_ID', userId)
    }
  }
}
</script>
