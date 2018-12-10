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
      cell(v-if='repairDetail.imgs && repairDetail.imgs.length')
        div.img80-ftc
          img(v-for='img in repairDetail.imgs' :src='img' @click='onPreviewImage(img)')
      cell(v-if='repairDetail.voice')
        p.primary
          audio(:src='repairDetail.voice' controls='true' preload)
    pannel(title='报修记录' :gutter='10')
      p-status(v-model='status')
      p-history
        p-event(v-for='event in events' :key='event.id')
          template
            p
              span(style='margin-right: 5px;') [{{ event.datetime|timestamp-to-text }}]
              a(v-if='event.mobile' :href='`tel://${event.mobile}`') {{ event.who }}
              span(v-else) {{ event.who }}
              span(style='margin-left: 5px;') {{ event.do }}
              span(v-if='event.contact') ，电话
                a(:href='`tel://${event.contact}`') {{ event.contact }}
            section(v-if='event.content')
              h3.event-title(v-if='event.cate == 4') {{ event.action == 'process' ? '维修内容：': '协助原因：' }}
                p.event-content {{ event.content }}
              p.event-content(v-else-if='event.cate == 5')
                span {{ event.content.split("[br]")[0] }}
                br
                span {{ event.content.split("[br]")[1] }}
              p.event-content(v-else) {{ event.content }}
            section(v-if='event.imgs && event.imgs.length')
              img.event-img(v-for='img in event.imgs' :src='img' @click='previewImages(img, event.imgs)')
            template(v-if='event.cate == 4 && event.location')
              p.event-location(@click='openWxMap(event)') 位置：{{ event.location }}
    rate-view(v-if='repairDetail.status >= 5 && repairDetail.rate' :data='repairDetail.rate' style='margin-bottom: 10px')
  repair-process(v-if='processAble && !forhelp' v-show='showProcessBar' v-model='repairDetail' @process='onProcess' @help='onHelp' @continue='onContinue')
  div(v-transfer-dom='true')
    confirm(
      v-model='showHelpConfirm'
      :close-on-confirm='false'
      title='协助'
      @on-confirm='onHelpConfirm')
      input.peco-input(v-model='help' @blur='onTextareaBlur' placeholder='请输入协助原因')
  div(v-transfer-dom='true')
    popup(v-model='showProcess')
      popup-header(
        left-text='取消'
        right-text='提交'
        title='到场维修'
        :show-bottom-border='false'
        @on-click-left='showProcess = false'
        @on-click-right='submitProcess'
      )
      group(gutter='0')
        x-cell(title='定位') {{ processForm.location }}
        x-cell
          wx-images-picker(slot='after-title' label='上传现场图片' v-model='processForm.imgs')
        x-cell
          p-textarea(slot='after-title'  label='维修描述' v-model='processForm.content' @blur='onTextareaBlur')
</template>

<script>
/* eslint-disable */
import RepairProcess from 'components/Business/RepairProcess'
import RateView from 'components/Rate/view'
import { timestampToText, statusToText } from '@/filters'
import { createNamespacedHelpers } from 'vuex'
import { previewImage, getLocation, openLocation, uploadImages } from 'utils/wxsdk'
import toTop from 'utils/toTop'
import { Popup, PopupHeader, Confirm, Group, Cell, Rater, XTextarea } from 'vux'
import WxImagesPicker from 'components/ModelInput/WxImagesPicker'
import PTextarea from 'components/ModelInput/Textarea'
import jsonp from '@/services/jsonp'
import { repair } from '@/services'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  data () {
    return {
      id: this.$route.params.id,
      repairDetail: {},
      status: 0,
      showProcessBar: true,
      events: [
        {
          id: 1,
          who: '',
          do: '',
          datetime: ''
        }
      ],
      showProcess: false,
      showHelpConfirm: false,
      help: '',
      processForm: {
        lng: '0',
        lat: '0',
        location: '',
        imgs: [],
        content: ''
      }
    }
  },
  components: {
    Confirm,
    RepairProcess,
    RateView,
    Popup,
    PopupHeader,
    Group,
    XCell: Cell,
    PTextarea,
    WxImagesPicker
  },
  filters: {
    statusToText,
    timestampToText
  },
  computed: {
    ...mapState(['list', 'details']),
    forhelp () {
      let d = this.list.find(item => item.id == this.id)
      return d && d.forhelp == 1
    },
    processAble () {
      let repairDetail = this.repairDetail
      if (!repairDetail || !repairDetail.status) return false
      return repairDetail.status > 1 && repairDetail.status < 5
    }
  },
  methods: {
    ...mapActions(['read']),
    onTextareaBlur () {
      toTop()
    },
    previewImages (img, imgs) {
      previewImage('http:' + img, imgs.map(img => 'http:' + img))
    },
    openWxMap (e) {
      let employee_name = this.$store.state.user.user.employee.name
      openLocation({
        latitude: e.lat,
        longitude: e.lng,
        name: employee_name,
        address: e.location
      })
    },
    onPreviewImage (img) {
      previewImage('http:' + img, this.repairDetail.imgs.map(img => 'http:' + img))
    },
    onProcess () {
      this.showProcess = true
      this.$peco.loading.show('定位...')
      getLocation().then(res => {
        let { latitude, longitude } = res
        this.processForm.lat = latitude
        this.processForm.lng = longitude
        this.getGeo(latitude, longitude)
      })
    },
    onHelp () {
      this.showHelpConfirm = true
    },
    onContinue () {
      let _this = this
      let who = this.$store.state.user.user.employee.name + '师傅'
      let repair_id = _this.id
      let $loading = _this.$peco && _this.$peco.loading
      this.$vux.confirm.show({
        title: '继续维修?',
        content: '继续维修将撤回协助',
        onCancel () {},
        onConfirm () {
          $loading.show()
          repair.update(repair_id, {
            receiver_id: 0,
            tag: 0,
            step_id: 4,
            action: 'continue',
            who: who
          }).then(res => {
            $loading && $loading.hide()
            _this.$set(_this.repairDetail, 'tag', 0)
            _this.$store.commit('repair/UPDATE_TAG', {
              id: repair_id,
              tag: 0
            })
          }).catch(error => {
            $loading && $loading.hide()
          })
        }
      })
    },
    onHelpConfirm () {
      let who = this.$store.state.user.user.employee.name + '师傅'
      let repair_id = this.id
      let $loading = this.$peco && this.$peco.loading
      let help = this.help
      if (!help) {
        return
      }
      $loading.show()
      repair.update(repair_id, {
        receiver_id: 0,
        tag: 1,
        help: help,
        step_id: 4,
        action: 'help2',
        who: who
      }).then(res => {
        $loading && $loading.hide()
        this.showHelpConfirm = false
        this.help = ''
        this.showProcessBar = false
        this.$set(this.repairDetail, 'tag', 1)
        this.$set(this.repairDetail, 'help', help)
        this.$store.commit('repair/UPDATE_TAG', {
          id: repair_id,
          tag: 1,
          forhelp: 1,
          help: help
        })
      }).catch(error => {
        $loading && $loading.hide()
      })
    },
    getGeo (latitude, longitude) {
      // 调用百度全球逆地理编码服务获取位置信息（如所在行政区划，周边地标点分布）
      // http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-geocoding-abroad
      // Get：http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=lat<纬度>,lng<经度>&output=json&pois=1&ak=您的ak
      let url = 'http://api.map.baidu.com/geocoder/v2/?output=json&location=' + latitude + ',' + longitude + '&ak=CQrIpCxZ5njB5hKtazlOx2Y2TCwkQZIe'
      jsonp(url).then(res => {
        /* eslint-disable-next-line */
        let { formatted_address, addressComponent, pois } = res.result
        // let { country, province, city, district, town, street, street_number } = addressComponent
        // this.processForm.location = city + district + town + street + street_number
        /* eslint-disable-next-line */
        this.processForm.location = formatted_address
        this.$peco.loading.hide()
      })
    },
    doProcess (formData) {
      let repair_id = this.id
      let $loading = this.$peco && this.$peco.loading
      repair.update(repair_id, {
        receiver_id: 0,
        step_id: 4,
        action: 'process',
        who: this.$store.state.user.user.employee.name + '师傅',
        ...formData
      }).then(res => {
        $loading && $loading.hide()
        this.$store.commit('repair/UPDATE_STATUS', {
          id: repair_id,
          status: 4
        })
        this.showProcess = false
      }).catch(error => {
        $loading && $loading.hide()
      })
    },
    checkProcessForm() {
      if (!this.processForm.content) {
        this.$vux.alert.show({
          title: '维修描述不能留空',
          content: '请正确填写维修描述'
        })
        return false
      }
      this.processForm.content = this.processForm.content.replace(/<script>[\s\S]*?<\/script>/gi, '')
      return true
    },
    submitProcess () {
      if (!this.checkProcessForm()) return
      let $loading = this.$peco && this.$peco.loading
      $loading && $loading.show()
      let submitFormData = Object.assign({}, this.processForm)
      if (submitFormData.imgs.length) {
        uploadImages(submitFormData.imgs).then(serverIds => {
          submitFormData.imgs = serverIds
          this.doProcess(submitFormData)
        })
      } else {
        this.doProcess(submitFormData)
      }
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.read(this.id).then(res => {
      this.status = res.status
      this.events = res.events
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
