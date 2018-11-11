<template lang="pug">
page
  profile-header(:name='name' :desc='desc' :avatar='avatar')
  grid(:data='gridData' :col-num="2" bg-color="#fff")
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name: '',
      desc: '',
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/gpleader/repair'},
        {id: 3, name: '投诉', icon: 'complain', url: '/gpleader/complain'}
      ]
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.$store.dispatch('user/read').then((user) => {
      this.$peco.loading.hide()
      // eslint-disable-next-line
      let { user_id, name, avatar, mobile, employee } = user
      if (!employee) {
        // 未绑定员工账号
        return this.$router.push({ name: 'UserLogin' })
      }
      this.avatar = avatar
      if (employee) {
        if (employee.name) {
          this.name = employee.name + ' ' + employee.account + ' ' + (employee.mobile || mobile)
        } else {
          this.name = employee.account
        }
        // this.desc = '微信:' + name + ' 手机:' + (employee.mobile || mobile)
        this.desc = employee.province + ' ' + employee.city + ' ' + employee.area
      } else {
        this.name = name
        this.desc = mobile
      }
    })
  }
}
</script>
