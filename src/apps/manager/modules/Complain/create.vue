<template lang="pug">
page
  h2(style='margin: 15px') 请提交您的投诉意见，我们会尽快回复您。
  create(v-if='cate==1' title='新增产品投诉' btn-text='提交投诉' resource-name='complain' :model='complain1' store-module='complain' form-name='productForm')
  create(v-else title='新增服务投诉' btn-text='提交投诉' resource-name='complain' :model='complain' store-module='complain' form-name='serviceForm')
</template>

<script>
import { complain, complain1 } from '@/models'

export default {
  data () {
    return {
      complain,
      complain1,
      cate: this.$route.query.cate
    }
  }
}
</script>
