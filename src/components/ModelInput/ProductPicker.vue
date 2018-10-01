<template lang="pug">
  router-link.peco-model-input.tapable(:to='{name: "ProductPicker"}')
    .peco-model-input_bd
      .peco-input {{ picked && picked.cnPathName || label }}
    .peco-model-input_ft
      i.arrow-right-gray
</template>

<script>
import modelinput from '@/mixins/modelinput'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('ProductPicker')

export default {
  mixins: [modelinput],
  computed: {
    ...mapState(['picked'])
  },
  methods: {
    ...mapMutations({ changePicked: 'CHANGE_PICKED' }),
    ...mapActions(['fetch'])
  },
  mounted () {
    this.fetch()
  }
}
</script>
