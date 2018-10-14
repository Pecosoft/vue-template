<template lang="pug">
  page
    search(:data='list' :checked='mappick[id]' @onchecked='handleOnPicked')
    check-list(:data='list' :checked='mappick[id]' style='margin-top: 56px; margin-bottom: 20px;' @onchecked='handleOnPicked')
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('dispatch')

export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState(['list', 'mappick'])
  },
  methods: {
    ...mapActions(['fetch']),
    ...mapMutations({ dispatch: 'DISPATCH' }),
    handleOnPicked (item) {
      let mappick = this.mappick
      let id = this.id
      if (mappick && mappick[id] && item.id === mappick[id].id) {
        this.dispatch({ id: this.id, picked: false })
        this.$store.commit('repair/DISPATCH', { id: this.id, picked: false })
      } else {
        this.dispatch({ id: this.id, picked: item })
        this.$store.commit('repair/DISPATCH', { id: this.id, picked: item, status: 2 })
      }
      if (mappick[id]) {
        this.$router && this.$router.go(-1)
      }
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.fetch().then(data => {
      this.$peco.loading.hide()
    })
  }
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/extend/_layout.scss';

</style>
