<template lang="pug">
  router-link.peco-model-input.tapable(:to='{name: "ProductPicker"}')
    .peco-model-input_bd
      .peco-input {{ label }}
    .peco-model-input_ft
      i.arrow-right-gray
</template>

<script>
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [modelinput]
}
</script>
