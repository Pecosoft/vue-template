<template lang="pug">
  .peco-model-input
    input.peco-input(:placeholder='label')
</template>

<script>
export default {
  props: ['label']
}
</script>
