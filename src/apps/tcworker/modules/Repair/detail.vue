<template lang="pug">
page(:style='{paddingBottom: processAble ? "60px" : 0}')
  template(v-if='repairDetail.order_sn')
    card
      p.flt 订单号：{{ repairDetail.order_sn }}
      p.frt.aux.gray {{ repairDetail.status|status-to-text }}
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
    pannel(title='报修记录' :gutter='10')
      p-status(v-model='repairDetail.status')
      p-history(style='border-top: 1px solid #F6F6F6')
        p-event(v-for='event in repairDetail.events' :key='event.id')
          template
            p {{ event.datetime }} {{ event.who }} {{ event.do }}
            p asfasdfaasdasdf
    rate-view(v-if='repairDetail.status >= 5 && repairDetail.rate' :data='repairDetail.rate' style='margin-bottom: 10px')
    repair-process(v-if='processAble' v-model='repairDetail')
</template>

<script>
import RepairProcess from 'components/Business/RepairProcess'
import RateView from 'components/Rate/view'
import { timestampToText, statusToText } from '@/filters'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  data () {
    return {
      id: this.$route.params.id,
      repairDetail: {}
    }
  },
  components: {
    RepairProcess,
    RateView
  },
  filters: {
    statusToText,
    timestampToText
  },
  computed: {
    ...mapState(['details']),
    processAble () {
      let repairDetail = this.repairDetail
      if (!repairDetail || !repairDetail.status) return false
      return repairDetail.status > 1 && repairDetail.status < 5
    }
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
