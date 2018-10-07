<template lang="pug">
page
  card
    p.flt 订单号：{{ repairDetail.order_sn }}
    p.frt.aux.gray {{ repairDetail.status|status-to-text }}
  card(:route='{name: "RepairView", params: {id: id}}')
    p 报修状态：{{ repairDetail.status|status-to-text }}
    p.aux.gray.gapt {{ repairDetail.logs[0] }}
  card
    p {{ repairDetail.user.name }} {{ repairDetail.user.mobile }}
    p.aux.gray.gapt {{ repairDetail.user.company }}
    p.aux.gray {{ repairDetail.user.addr }}
    p.aux.gray(v-if='repairDetail.user.block') {{ repairDetail.user.block }}
  pannel(title='报修产品' :gutter='10')
    cell
      div(slot='prefix' style='padding: 10px 10px 10px 15px;')
        img(style='width: 80px; height: 80px;' :src='repairDetail.product_avatar')
      h2 {{ repairDetail.product_model }}
    cell
      h3 报修描述：
      p.gray.gapt {{ repairDetail.description }}
    cell
      div.img80-ftc
        img(v-for='img in repairDetail.imgs' :src='img')
    cell
      div(slot='prefix' style='padding: 10px 10px 10px 15px;')
        i.peco-icon.peco-icon-microphone
      p.primary 60秒‘’
</template>

<script>
import { timestampToText, statusToText } from '@/filters'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  data () {
    return {
      id: this.$route.params.id,
      repairDetail: {
        order_sn: '2018050210524290585581',
        status: 1,
        logs: [
          '2018-05-02 10:52:42 用户已提交报修单'
        ],
        user: {
          name: '张三',
          mobile: '15888888888',
          company: '深圳市XXXXxxxxxxxx公司',
          addr: '深圳市南山区高新科技园高新南四路',
          block: 'T栋XXXXXX'
        },
        product_model: 'T-790',
        product_avatar: '/static/logo.png',
        description: '各种问题 故障 请即时处理 谢谢',
        imgs: [
          '/static/logo.png',
          '/static/logo.png',
          '/static/logo.png',
          '/static/logo.png',
          '/static/logo.png',
          '/static/logo.png'
        ]
      },
      btns: [
      ]
    }
  },
  filters: {
    statusToText,
    timestampToText
  },
  computed: {
    ...mapState(['details'])
  },
  methods: {
    ...mapActions(['read'])
  },
  mounted () {
    this.$peco.loading.show()
    this.read(this.id).then(res => {
      this.repairDetail = res
      this.$peco.loading.hide()
    })
  }
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/mixin/_line.scss';
@import 'style/extend/_layout.scss';

.img80-ftc {
  @include clearfix();
  margin-right: -15px;
  margin-bottom: -10px;
  img {
    width: 80px;
    height: 80px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
