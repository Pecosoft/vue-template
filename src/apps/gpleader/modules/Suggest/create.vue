<template lang="pug">
page
  h2(style='margin: 15px') 感谢您对我司产品的改善建议，您的建议是我们前进的动力。
  create(title='新增建议' btn-text='提交建议' resource-name='suggest' :model='suggest' store-module='suggest')
</template>

<script>
import { suggest } from '@/models'

export default {
  data () {
    return {
      suggest
    }
  }
}
</script>
