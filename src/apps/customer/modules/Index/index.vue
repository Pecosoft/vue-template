<template lang="pug">
div
  h1 pecosoft
  div {{ msg }}
</template>

<script>
import xpug from './p.pug'

export default {
  name: 'index',
  data () {
    return {
      msg: xpug
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
