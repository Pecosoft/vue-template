<template lang="pug">
  .peco-model-input.tapable
    .peco-model-input_bd
      .peco-input {{ label }}
    .peco-model-input_ft
      i.arrow-right-gray
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [model, modelinput]
}
</script>
