<template lang="pug">
p-input(type='password' icon='passwd' :disabled='thisDisabled' :placeholder='placeholder' v-model='thisValue')
</template>

<script>
import PInput from './input'
import model from '@/mixins/model'

export default {
  mixins: [model],
  components: {
    PInput
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入密码'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  watch: {
    disabled (newVal) {
      this.thisDisabled = newVal
    }
  },
  data () {
    return {
      thisDisabled: this.disabled
    }
  }
}
</script>

<style lang="scss">
</style>
