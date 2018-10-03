<template lang="pug">
  .peco-model-input
    textarea.peco-textarea(:placeholder='label' :rows='attr.rows' v-model='thisValue')
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [model, modelinput]
}
</script>
