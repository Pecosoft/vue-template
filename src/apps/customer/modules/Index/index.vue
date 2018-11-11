<template lang="pug">
page
  profile-header(@click.native='$router.push({ name: "UserProfile"})' :name='name' :desc='desc' :avatar='avatar' link)
  grid(:data='gridData' :col-num="4" bg-color="#fff" @clickgrid="handleOnClickGrid")
  pannel(:gutter="10" :title="`订单数（${list.length}）`")
    order-list(style="margin: 10px 0 20px;" @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="list" :privs="privs")
</template>

<script>
import repairAction from '@/flow/repair/action'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  data () {
    return {
      name: '',
      desc: '',
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/customer/repair'},
        {id: 2, name: '咨询', icon: 'consult', url: '/customer/consult'},
        {id: 3, name: '投诉', icon: 'complain', url: '/customer/complain'},
        {id: 4, name: '建议', icon: 'suggest', url: '/customer/suggest'}
      ],
      privs: [
        [{id: 'view', name: '查看报修'}, {id: 'cancel', name: '取消订单'}], // status: 0 待受理
        [{id: 'view', name: '查看报修'}], // status: 1 已受理
        [{id: 'view', name: '查看报修'}], // status: 2 已派单
        [{id: 'view', name: '查看报修'}], // status: 3 已接单
        [{id: 'view', name: '查看报修'}], // status: 4 维修中
        [{id: 'view', name: '查看报修'}, {id: 'rate', name: '评价'}], // status: 5 已完成
        [{id: 'view', name: '查看报修'}] // status: 6 已评价
      ]
    }
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickGrid: gd => {
      console.log('click on grid', gd.id)
    },
    handleOnClickList (d) {
      this.$router.push({name: 'RepairDetail', params: {id: d.id}})
    },
    handleOnClickBtn (d, btn) {
      repairAction(btn.id, d, { $router: this.$router, $store: this.$store })
    },
    authUser () {

    }
  },
  mounted () {
    this.$peco.loading.show()
    this.$store.dispatch('user/read').then((user) => {
      this.$peco.loading.hide()
      // eslint-disable-next-line
      let { user_id, name, avatar, mobile, customer } = user
      if (!mobile) {
        // 手机号空 跳转用户注册页面
        return this.$router.push({ name: 'UserRegister' })
      }
      this.avatar = avatar
      if (customer) {
        this.name = customer.name
        this.desc = (customer.company && customer.company.name) || mobile
      } else {
        this.name = name
        this.desc = mobile
      }
      this.fetch()
    })
  }
}
</script>
