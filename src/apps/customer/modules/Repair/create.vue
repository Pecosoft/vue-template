<template lang="pug">
page
  pannel
    info-card(:infos='infos' :editUrl='editUrl' style='border-bottom: 3px dashed #0769ad')
  pannel(title='填写报修' :gutter='10')
    model-input(:model='model')
  btn-area
    btn-primary(:loading='loading' @click.native='handleOnSubmit') 保存提交
</template>

<script>
import { repair } from '@/models'
import create from '@/mixins/create'

export default {
  mixins: [create],
  data () {
    return {
      loading: false,
      infos: [
        {style: 'color: #606266; height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: '张三'}, {style: 'margin-left: 10px', value: '15988888888'}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: '深圳市XXXXxxxxxxxx公司'}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; ', row: [{style: '', value: '深圳市南山区高新科技园高新南四路'}]},
        {style: 'color: #606266; height: 22px; line-height: 22px; ', row: [{style: '', value: 'T栋XXXXXX'}]}
      ],
      editUrl: '/customer/1',
      model: repair
    }
  },
  mounted () {
    console.log(this.validator.toString())
    console.log(this.form)
    console.log('verify', this.verify())
  },
  methods: {
    async createApi (formData) {
      let res = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: 200,
            data: formData
          })
        }, 3000)
      })
      return res
    },
    handleOnSubmit () {
      this.loading = true
      this.submit().then(res => {
        console.log(res)
        this.loading = false
      })
    }
  }
}
</script>
