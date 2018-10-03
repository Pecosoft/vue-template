<template lang="pug">
  div
    pannel(:title='title' :gutter='10')
      model-input(:model='model' :form='form')
    btn-area
      btn-primary(:loading='loading' @click.native='handleOnSubmit') {{ btnText || '创建' }}
</template>

<script>
import create from '@/mixins/create'

export default {
  name: 'Create',
  mixins: [create],
  mounted () {
  },
  methods: {
    handleOnSubmit () {
      this.submit().then(res => {
        console.log('创建%s成功，返回%o', this.resourceName, res)
      }).catch(err => {
        console.log('verify: %o', err)
      })
    }
  }
}
</script>
