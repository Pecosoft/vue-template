<template lang="pug">
  .peco-model-input
    textarea.peco-textarea(:placeholder='label' :rows='rows')
</template>

<script>
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [modelinput],
  props: ['rows']
}
</script>
