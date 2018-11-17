<template lang="pug">
page
  h1(style='text-align: center; padding: 40px 0;')
    img(style='display: inline-block; width: 120px; height: 120px' src='static/logo.png?v=1.0')
  p-group
    p-text(:disabled='loading' v-model='account' icon='account' placeholder='请输入账号')
  p-group
    p-passwd(:disabled='loading' v-model='passwd')
  btn-area
    btn-primary(:loading='loading' @click.native='handleOnSubmit') 登录
</template>

<script>
import PGroup from 'components/Form/group'
import PText from 'components/Form/text'
import PPasswd from 'components/Form/passwd'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    PGroup,
    PText,
    PPasswd
  },
  data () {
    return {
      loading: false,
      account: '',
      passwd: '',
      user_id: 0
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['read', 'login']),
    handleOnSubmit () {
      if (this.loading) return
      let { account, passwd } = this
      account = account.trim()
      passwd = passwd.trim()
      this.account = account
      this.passwd = passwd
      if (!account || !passwd) {
        return this.$vux.alert.show({
          title: '账号或密码错误',
          content: '请正确填写账号密码'
        })
      }
      let formData = { username: account, password: passwd, app: 'tcworker' }
      if (this.user_id) {
        formData.user_id = this.user_id
      }
      this.loading = true
      this.login(formData).then(res => {
        this.loading = false
        this.read(true).then(res => {
          this.$router.go(-1)
        })
        // eslint-disable-next-line
      }).catch(error => {
        this.loading = false
        return this.$vux.alert.show({
          title: error.errcode,
          content: error.msg
        })
      })
    }
  },
  mounted () {
    this.read().then(_ => {
      if (this.user && this.user.user_id) {
        this.user_id = this.user.user_id
      }
      if (this.user && this.user.employee) {
        this.$router.go(-1)
      }
    })
  }
}
</script>
