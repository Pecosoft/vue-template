<template lang='pug'>
  page
    model-input(:model='model')
</template>

<script>
import repair from '@/models/repair'

export default {
  data () {
    return {
      model: repair
    }
  }
}
</script>
