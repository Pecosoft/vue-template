<template lang="pug">
  #app
    transition(name='slide')
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>
