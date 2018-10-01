<template lang="pug">
  .peco-model-input
    input.peco-input(:placeholder='label')
</template>

<script>
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [modelinput]
}
</script>
