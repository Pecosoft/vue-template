<template lang="pug">
  .peco-model-input
    textarea.peco-textarea(:placeholder='label' :rows='rows')
</template>

<script>
export default {
  props: ['label', 'rows']
}
</script>
