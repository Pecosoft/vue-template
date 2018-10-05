<template lang='pug'>
  page
    create(title='申请报修' btn-text='提交报修' resource-name='repair' :model='repair' store-module='repair')
    btn-area
      btn-primary(loading @click.native='showLoading("稍等")') 保存提交
      btn(@click.native='showLoading("保存")') 保存
      btn-default 保存
      btn-default(disable) 保存
      btn-default(plain) 保存
      btn-default(plain disable) 保存
      btn-primary 保存
      btn-primary(disable) 保存
      btn-primary(plain) 保存
      btn-primary(plain disable) 保存
      btn-warn 保存
</template>

<script>
import repair from '@/models/repair'

export default {
  data () {
    return {
      repair
    }
  },
  methods: {
    showLoading (text = '加载...') {
      this.$peco.loading.show({
        text,
        delay: 2000
      })
    }
  }
}
</script>
