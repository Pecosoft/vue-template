<template lang="pug">
p-input(type='text' icon='mobile' :disabled='thisDisabled' :placeholder='placeholder' v-model='thisValue')
  div.peco-mobile-verify-btn(slot='after' @click='onclick' :class='{disabled: !mobileIsValid || seconds}') {{ seconds ? seconds + '秒' : '获取验证码' }}
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
      default: '请输入手机号'
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
      seconds: 0,
      thisDisabled: this.disabled
    }
  },
  computed: {
    mobileIsValid () {
      return /^1[3578]{1}[0-9]{9}$/.test(this.thisValue)
    }
  },
  methods: {
    counter () {
      if (this.seconds) {
        setTimeout(_ => {
          this.seconds--
          this.counter()
        }, 1000)
      }
    },
    onclick () {
      if (this.thisDisabled || !this.mobileIsValid || this.seconds) return
      this.seconds = 60
      this.counter()
    }
  }
}
</script>

<style lang="scss">
.peco-mobile-verify-btn {
  padding: 0 15px;
  color: #586C94;
  font-size: 14px;
  &.disabled {
    color: #C0C4CC;
  }
}
</style>
