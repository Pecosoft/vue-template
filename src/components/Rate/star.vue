<template lang="pug">
  svg(viewBox='0 0 1024 1024' width='30' height='30')
    path(:fill='fill' d='M778 617.9c-10.3 9.9-15 24.2-12.6 38.2l38.7 222.3c3 17.6 0 30.2-14.7 40.8-8.3 5.9-18.2 9-28 9-7.6 0-15.2-1.8-22.2-5.4l-206.8-110c-12.8-6.6-28-6.6-40.7 0L293.4 922.7c-16.1 8.3-35.5 6.9-50.2-3.6-14.7-10.5-26.4-23.1-23.3-40.8l47.4-226.9c2.4-14-2.3-28.3-12.6-38.2L82.1 479.5c-13-12.5-17.7-31.1-12.1-48.1s20.5-29.4 38.5-32L333 360.6c14.3-2 26.6-10.9 33-23.6l103.3-214.9c8-16 24.6-26.2 42.7-26.2 18.2 0 34.7 10.1 42.7 26.2L654 337c6.4 12.7 18.7 21.6 33 23.6l228.5 38.8c17.9 2.6 32.9 15 38.4 32 5.6 17 0.9 35.7-12.1 48.1L778 617.9z')
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#dbdbdb'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      fill: this.active ? '#0769ad' : '#dbdbdb'
    }
  },
  watch: {
    color (newVal) {
      this.fill = newVal
    },
    active (newVal) {
      this.fill = newVal ? '#0769ad' : '#dbdbdb'
    }
  }
}
</script>
