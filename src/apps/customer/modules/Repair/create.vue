<template lang="pug">
page
  pannel
    info-card(:infos='infos' :editUrl='editUrl' style='border-bottom: 3px dashed #0769ad')
  create(@oncreated='handleOnCreated' :before-submit='beforeSubmit' title='申请报修' btn-text='提交报修' resource-name='repair' :model='repair' store-module='repair')
</template>

<script>
/* eslint-disable */
import android from 'mixins/android'
import { repair } from '@/models'
import { mapState, mapActions } from 'vuex'
import { uploadImages, uploadVoice } from 'utils/wxsdk'

export default {
  mixins: [
    android
  ],
  data () {
    return {
      repair,
      who: '',
      infos: [
        {style: 'color: #606266; height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: ''}, {style: 'margin-left: 10px', value: ''}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: ''}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; ', row: [{style: '', value: ''}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; ', row: [{style: '', value: ''}]}
      ],
      editUrl: {name: 'UserProfile'}
    }
  },
  computed: {
    ...mapState('user', ['user'])
  },
  methods: {
    ...mapActions('repair', ['fetch']),
    handleOnCreated (res) {
      this.$peco.toast.show('提交成功')
      this.fetch(true).then(_ => {
        this.$router.go(-1)
      })
    },
    async beforeSubmit (formData) {
      if ((!formData.avatar || !formData.avatar.length) && !formData.voice) {
        return formData
      }
      let submitFormData = Object.assign({}, formData)
      if (formData.avatar.length) {
        // 上传图片
        let serverIds = await uploadImages(formData.avatar)
        submitFormData.avatar = serverIds
      }
      if (formData.voice) {
        // 上传语音
        submitFormData.voice = await uploadVoice(formData.voice)
      }
      submitFormData.who = this.who + '用户'
      return submitFormData
    }
  },
  created() {
  },
  mounted () {
    let user = this.user
    let userId = user.user_id

    if (userId) {
      this.$store.commit('repair/PUT_USER_ID', userId)
    }
    // 初始化用户信息
    let customer = user.customer || null
    let company = customer.company || null

    this.who = this.infos[0].row[0].value = (customer && customer.name) || user.name
    this.infos[0].row[1].value = (customer && customer.mobile) || user.mobile

    let company_name = ''
    let company_address = ''
    let company_area = ''
    if (company) {
      company_name = company.name
      company_address = company.address
      company_area = company.province + ' ' + company.city + ' ' + company.area
    }
    this.infos[1].row[0].value = company_name
    this.infos[2].row[0].value = company_area
    this.infos[3].row[0].value = company_address
  }
}
</script>
