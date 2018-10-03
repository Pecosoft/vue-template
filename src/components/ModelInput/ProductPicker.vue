<template lang="pug">
  router-link.peco-model-input.tapable(:to='{name: "ProductPicker"}')
    .peco-model-input_bd
      .peco-input {{ picked && picked.cnPathName || label }}
    .peco-model-input_ft
      i.arrow-right-gray
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('ProductPicker')

export default {
  mixins: [model, modelinput],
  computed: {
    ...mapState(['picked'])
  },
  methods: {
    ...mapMutations({ changePicked: 'CHANGE_PICKED' }),
    ...mapActions(['fetch'])
  },
  mounted () {
    this.fetch()
    // 获取路由组件的选择结果
    if (this.picked && this.picked.id) {
      this.thisValue = this.picked.id
    }
    if (this.thisValue) {
      let pickedId = this.thisValue
      this.$nextTick(() => {
        this.thisValue = pickedId
      })
    }
  }
}
</script>
