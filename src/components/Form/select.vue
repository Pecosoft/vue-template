<template lang="pug">
.peco-form-cell.tapable
  .peco-form-cell__hd(v-if='icon')
    i.peco-icon(:class='`peco-icon-${icon}`')
  .peco-form-cell__bd
    span(style='line-height: 30px; color: #586C94') {{ selectedText }}
  .peco-form-cell__ft(style='padding: 0 15px')
    i.arrow-right-gray(style='border-color: #586C94')
</template>

<script>
import model from '@/mixins/model'

export default {
  mixins: [model],
  props: {
    icon: {
      type: String,
      default: ''
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },
  computed: {
    selectedText () {
      let selected = this.thisValue
      if (!selected || !selected.length) return this.placeholder
      let labelKey = this.labelKey
      return selected.map(item => item[labelKey]).join(' ')
    }
  }
}
</script>
