<template lang="pug">
.peco-form-cell
  .peco-form-cell__hd(v-if='icon')
    i.peco-icon(:class='`peco-icon-${icon}`')
  .peco-form-cell__bd
    input.peco-input(:type='type' :disabled='thisDisabled' :placeholder='placeholder' v-model='thisValue')
  .peco-form-cell__ft
    slot(name='after')
</template>

<script>
import model from '@/mixins/model'

export default {
  mixins: [model],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'input'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    showFt: {
      type: Boolean,
      default: false
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
.peco-form-cell {
  display: flex;
  align-items: center;
  background: #fff;
  font-size: 16px;
  & + & {
    border-top: 1px solid #f5f5f5;
  }
  &.no-padding > .peco-form-cell__bd  {
    padding: 0 0 0 15px;
  }
}
.peco-form-cell__hd {
  padding-left: 15px;
}
.peco-form-cell__bd {
  flex: 1;
  padding: 10px 15px;
  & > .peco-form-cell > .peco-form-cell__bd {
    padding-left: 0;
  }
  input {
    height: 30px;
    width: 100%;
  }
}
</style>
