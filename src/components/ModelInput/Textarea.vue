<template lang="pug">
  .peco-model-input
    textarea.peco-textarea(:placeholder='label' :rows='attr && attr.rows || 3' v-model='thisValue' @blur='$emit("blur")')
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [model, modelinput]
}
</script>
