<template lang="pug">
  .peco-model-input
    input.peco-input(:placeholder='label' v-model='thisValue')
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'

export default {
  mixins: [model, modelinput]
}
</script>
