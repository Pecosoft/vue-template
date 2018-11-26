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
    beforeSubmit: {
      type: Function
    },
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
      if (typeof this.beforeSubmit === 'function') {
        return this.beforeSubmit(this.formData).then(formData => {
          this.submit(formData).then(res => {
            this.reset()
            this.$emit('oncreated', res)
            $loading && $loading.hide()
          }).catch(err => {
            console.log('verify: %o', err)
            $loading && $loading.hide()
          })
        }).catch(error => {
          console.error('beforeSubmit error', error)
        })
      }
      this.submit().then(res => {
        this.reset()
        this.$emit('oncreated', res)
        $loading && $loading.hide()
      }).catch(err => {
        console.log('verify: %o', err)
        $loading && $loading.hide()
      })
    }
  }
}
</script>
