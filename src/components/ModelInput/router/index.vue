<template lang='pug'>
  page
    pannel
      model-input(:model='model')
    btn-area
      btn-primary(loading) 保存提交
      btn 保存
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
      model: repair
    }
  }
}
</script>
