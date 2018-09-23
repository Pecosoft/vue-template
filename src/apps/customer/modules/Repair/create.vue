<template lang="pug">
page 我要报修
</template>

<script>
import { repair } from '@/models'
import create from '@/mixins/create'

export default {
  mixins: [create],
  data () {
    return {
      model: repair
    }
  },
  mounted() {
    console.log(this.validator.toString())
    console.log(this.form)
    console.log('verify', this.verify())
    this.submit().then(res => console.log(res))
  },
  methods: {
    createApi (formData) {
      return {
        code: 200,
        data: formData
      }
    }
  }
}
</script>
