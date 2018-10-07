<template lang="pug">
  div
    pannel(:title='title' :gutter='10')
      model-input(:model='model' v-model='formData' @input='handleOnModelInput')
    btn-area
      btn-primary(:loading='loading' @click.native='handleOnSubmit') {{ btnText || '创建' }}
</template>

<script>
import create from '@/mixins/create'

export default {
  name: 'Create',
  mixins: [create],
  props: {
    formName: {
      type: String,
      default: 'form'
    }
  },
  mounted () {
  },
  methods: {
    handleOnSubmit () {
      let $loading = this.$peco && this.$peco.loading
      $loading && $loading.show()
      this.submit().then(res => {
        console.log('创建%s成功，返回%o', this.resourceName, res)
        $loading && $loading.hide()
      }).catch(err => {
        console.log('verify: %o', err)
        $loading && $loading.hide()
      })
    }
  }
}
</script>
