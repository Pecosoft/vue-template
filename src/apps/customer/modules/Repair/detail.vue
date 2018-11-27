<template lang="pug">
page
  card
    p.flt 订单号：{{ repairDetail.order_sn }}
    p.frt.aux.gray {{ repairDetail.status|status-to-text }}
  card(:route='{name: "RepairView", params: {id: id}}')
    p 报修状态：{{ repairDetail.status|status-to-text }}
    p.aux.gray.gapt(v-if='topEvent') {{ topEvent }}
  card
    p {{ repairDetail.user.name }} {{ repairDetail.user.mobile }}
    p.aux.gray.gapt {{ repairDetail.user.company }}
    p.aux.gray {{ repairDetail.user.addr }}
    p.aux.gray(v-if='repairDetail.user.block') {{ repairDetail.user.block }}
  pannel(title='报修产品' :gutter='10' style='margin-bottom: 80px')
    cell
      div(slot='prefix' style='padding: 10px 10px 10px 15px;')
        img(style='width: 80px; height: 80px;' :src='repairDetail.product_avatar')
      h2 {{ repairDetail.product_model }}
    cell
      h3 报修描述：
      p.gray.gapt {{ repairDetail.description }}
    cell(v-if='repairDetail.imgs')
      div.img80-ftc
        img(v-for='img in repairDetail.imgs' :src='img' @click='onPreviewImage(img)')
    cell(v-if='repairDetail.voice')
      p.primary
        audio(:src='repairDetail.voice' controls='true' preload)
</template>

<script>
import { timestampToText, statusToText } from '@/filters'
import { createNamespacedHelpers } from 'vuex'
import { previewImage } from 'utils/wxsdk'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  data () {
    return {
      id: this.$route.params.id,
      repairDetail: {
        order_sn: '',
        status: 0,
        events: [
          {
            id: 1,
            who: '',
            do: '',
            datetime: ''
          }
        ],
        user: {
          name: '',
          mobile: '',
          company: '',
          addr: '',
          block: ''
        },
        product_model: '',
        product_avatar: '',
        description: '',
        imgs: []
      }
    }
  },
  filters: {
    statusToText,
    timestampToText
  },
  computed: {
    ...mapState(['details']),
    topEvent () {
      let events = this.repairDetail.events
      if (!events || !events.length) return ''
      let event = this.repairDetail.events[0]
      return '[' + timestampToText(event.datetime) + '] ' + event.who + ' ' + event.do
    }
  },
  methods: {
    ...mapActions(['read']),
    onPreviewImage (img) {
      previewImage('http:' + img, this.repairDetail.imgs.map(img => 'http:' + img))
    }
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
    object-fit: cover;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
