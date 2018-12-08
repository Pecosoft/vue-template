<template lang="pug">
page
  profile-header(@click.native='$router.push({ name: "UserProfile"})' :name='name' :desc='desc' :avatar='avatar' link)
  grid(:data='gridData' :col-num='4' bg-color='#fff' @clickgrid='handleOnClickGrid')
  pannel(:gutter='10' :title='`订单数（${list.length}）`')
    order-list(style='margin: 10px 0 20px;' @clicklist='handleOnClickList' @clickbtn='handleOnClickBtn' :data='repairList' :privs='privs')
  div(v-transfer-dom='true')
    popup(v-model='showRate')
      popup-header(
        left-text='取消'
        right-text='提交'
        title='报修评价'
        :show-bottom-border='false'
        @on-click-left='showRate = false'
        @on-click-right='submitRate'
      )
      group(gutter='0')
        cell(title='订单号' v-if='rateRepair.sn') {{ rateRepair.sn }}
        cell(title='报修产品' v-if='rateRepair.product') {{ rateRepair.product.name }}
        cell(title='报修故障' v-if='rateRepair.desc') {{ rateRepair.desc }}
        cell(title='速度')
          span(slot='after-title')
            rater(v-model='rateForm.sudu' style='margin-left: 40px' :margin='10' active-color='#04BE02')
          p {{ rateForm.sudu|rate-text }}
        cell(title='态度')
          span(slot='after-title')
            rater(v-model='rateForm.taidu' style='margin-left: 40px' :margin='10' active-color='#04BE02')
          p {{ rateForm.taidu|rate-text }}
        cell(title='技术')
          span(slot='after-title')
            rater(v-model='rateForm.jishu' style='margin-left: 40px' :margin='10' active-color='#04BE02')
          p {{ rateForm.jishu|rate-text }}
        x-textarea(v-model='rateForm.content' placeholder='写评论')
</template>

<script>
import repairAction from '@/flow/repair/action'
import { createNamespacedHelpers } from 'vuex'
import { Popup, PopupHeader, Group, Cell, Rater, XTextarea } from 'vux'
import { repair } from '@/services'
import { configWxsdk } from 'utils/wxsdk'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  filters: {
    rateText (val) {
      return ['', '不满意', '一般', '好', '很好', '非常好'][parseInt(val)]
    }
  },
  components: {
    Popup,
    PopupHeader,
    Group,
    Cell,
    Rater,
    XTextarea
  },
  data () {
    return {
      name: '',
      desc: '',
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/customer/repair'},
        {id: 2, name: '咨询', icon: 'consult', url: '/customer/consult'},
        {id: 3, name: '投诉', icon: 'complain', url: '/customer/complain'},
        {id: 4, name: '产品建议', icon: 'suggest', url: '/customer/suggest'}
      ],
      privs: [
        [{id: 'view', name: '查看报修'}, {id: 'cancel', name: '取消订单'}], // status: 0 待受理
        [{id: 'view', name: '查看报修'}], // status: 1 已受理
        [{id: 'view', name: '查看报修'}], // status: 2 已派单
        [{id: 'view', name: '查看报修'}], // status: 3 已接单
        [{id: 'view', name: '查看报修'}], // status: 4 维修中
        [{id: 'view', name: '查看报修'}, {id: 'rate', name: '评价'}], // status: 5 已完成
        [{id: 'view', name: '查看报修'}] // status: 6 已评价
      ],
      showRate: false,
      rateRepair: {},
      rateForm: {
        sudu: 0,
        taidu: 0,
        jishu: 0,
        content: ''
      }
    }
  },
  computed: {
    ...mapState(['list']),
    repairList () {
      let list = this.list
      return list.sort((a, b) => {
        return b.create_time - a.create_time
      })
    }
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickGrid: gd => {
    },
    handleOnClickList (d) {
      this.$router.push({name: 'RepairDetail', params: {id: d.id}})
    },
    resetRate () {
      this.rateForm.sudu = 0
      this.rateForm.taidu = 0
      this.rateForm.jishu = 0
      this.rateForm.content = ''
    },
    handleOnClickBtn (d, btn) {
      if (btn.id === 'rate') {
        console.log('rate')
        this.rateRepair = d
        this.resetRate()
        this.showRate = true
        return
      }
      repairAction(btn.id, d, { $router: this.$router, $store: this.$store, $vm: this })
    },
    submitRate () {
      this.$peco.loading.show()
      repair.update(this.rateRepair.id, {
        receiver_id: 0,
        step_id: 6,
        action: 'rate',
        ...this.rateForm
      }).then(res => {
        this.rateRepair.status = 6
        this.$peco.loading.hide()
        this.showRate = false
      }).catch(_ => {
        this.$peco.loading.hide()
      })
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
      this.fetch().then(_ => {
        this.$store.dispatch('opendata/getWxjssdkConfig').then(config => {
          configWxsdk(config)
        })
      })
    })
  }
}
</script>
