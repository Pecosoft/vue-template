<template lang="pug">
page
  h2(style='padding: 20px 15px 0; margin-bottom: -6px; font-size: 16px; color: #333;') 请使用手机号进行注册
  p-group
    p-mobile(:disabled='loading' v-model='mobile')
  p-group
    p-text(:disabled='loading' v-model='verify_code' icon='key' placeholder='请输入验证码')
    p-passwd(:disabled='loading' v-model='passwd')
    p-passwd(:disabled='loading' v-model='passwd2' placeholder='请重复密码')
  btn-area
      btn-primary(:loading='loading' @click.native='handleOnSubmit') 注册
</template>

<script>
/* eslint-disable */
import PGroup from 'components/Form/group'
import PText from 'components/Form/text'
import PPasswd from 'components/Form/passwd'
import PMobile from 'components/Form/mobile'
import PMulti from 'components/Form/multi'
import PMultiRow from 'components/Form/multirow'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    PGroup,
    PText,
    PPasswd,
    PMobile,
    PMulti,
    PMultiRow
  },
  data () {
    return {
      loading: false,
      mobile: '',
      verify_code: '',
      passwd: '',
      passwd2: ''
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('user', ['read', 'login', 'register', 'saveProfile']),
    handleOnSubmit () {
      if (this.loading) return
      let { mobile, verify_code, passwd, passwd2 } = this
      mobile = mobile.trim()
      verify_code = verify_code.trim()
      passwd = passwd.trim()
      passwd2 = passwd2.trim()
      this.mobile = mobile
      this.verify_code = verify_code
      this.passwd = passwd
      this.passwd2 = passwd2
      if (!/^1[3578]{1}[0-9]{9}$/.test(mobile)) {
        return this.$vux.alert.show({
          title: '手机号码无法识别',
          content: '请正确填写手机号码'
        })
      }
      if (!/^[1-9][0-9]{3}$/.test(verify_code)) {
        return this.$vux.alert.show({
          title: '验证码输入错误',
          content: '请输入4位数字有效验证码'
        })
      }
      if (!passwd || passwd !== passwd2) {
        return this.$vux.alert.show({
          title: '密码未填写或不一致',
          content: '请确认正确填写密码项'
        })
      }
      this.loading = true
      let formData = { mobile, verify_code, passwd }
      this.register(formData).then(res => {
        this.loading = false
        this.read(true).then(res => {
          this.$router.push({ name: 'UserProfile' })
        })
      }).catch(error => {
        console.log(err)
        this.loading = false
      })
    }
  },
  mounted () {
    this.read().then(_ => {
      if (this.user && this.user.mobile) {
        this.$router.go(-1)
      }
    })
  }
}
</script>
