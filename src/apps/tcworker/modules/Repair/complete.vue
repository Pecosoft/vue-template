<template lang="pug">
page
  group
    x-input(title='出机编号' v-model='num' placeholder='请填写出机编号')
    datetime(title='出机日期' v-model='date' :end-date='today' placeholder='请选择出机日期')
    popup-radio(title='维保说明' :options="rangeOptions" v-model='range')
    popup-radio(title='收费情况' :options="chargedOptions" v-model='charged')
    x-input(title='收费金额' placeholder='请填写收费金额' v-model='charges')
    x-input(title='更换配件' placeholder='请填写更换的配件' v-model='fittings')
    x-textarea(title='维修内容' placeholder='请对维修内容进行描述' v-model='content')
    //- x-textarea(title='备注' placeholder='填写其他备注' v-model='comment')
  div(style='padding: 15px')
    x-button(plain @click.native='handleOnClickCancel') 取消
    x-button(type='primary' @click.native='handleOnClickSave') 提交
</template>

<script>
/* eslint-disable */
import { Group, XInput, Datetime, PopupRadio, XTextarea, XButton } from 'vux'
import { repair } from '@/services'

export default {
  data () {
    let dt = new Date()
    let today = dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
    return {
      rangeOptions: [
        {
          key: 1,
          value: '保外'
        },
        {
          key: 0,
          value: '保内'
        }
      ],
      chargedOptions: [
        {
          key: 1,
          value: '是'
        },
        {
          key: 0,
          value: '否'
        }
      ],
      id: this.$route.params.id,
      today,
      num: '',
      date: today,
      range: 0,
      charged: 0,
      charges: 0,
      fittings: '',
      content: '',
      comment: ''
    }
  },
  computed: {
  },
  mounted() {
  },
  components: {
    Group, XInput, Datetime, PopupRadio, XTextarea, XButton
  },
  methods: {
    handleOnClickCancel () {
      this.$router.go(-1)
    },
    handleOnClickSave () {
      let { id, num, date, range, charged, charges, fittings, content, comment } = this
      if (!id || !num || !content) {
        return this.$vux.alert.show({
          title: '出机编号和维修内容为必填',
          content: '请填写完整结案信息'
        })
      }
      if (isNaN(parseInt(charges))) {
        return this.$vux.alert.show({
          title: '收费金额必须为数字',
          content: '请正确填写收费金额'
        })
      }
      let formData = { num, date, range, charged, charges, fittings, content, comment }
      this.$peco.loading.show()
      repair.update(id, {
        ...formData,
        receiver_id: 0,
        step_id: 5,
        action: 'complete'
      }).then(res => {
        this.$store.commit('repair/UPDATE_STATUS', {
          id,
          status: 5
        })
        this.$peco.loading.hide()
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style>
.vux-datetime p {
  font-size: 17px;
}
</style>
