<template lang="pug">
  page
    search(:data='list2' :checked='mappick2[id]' @onchecked='handleOnPicked')
    check-list(:data='list2' :checked='mappick2[id]' style='margin-top: 56px; margin-bottom: 20px;' @onchecked='handleOnPicked')
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
    ...mapState(['list2', 'mappick2'])
  },
  methods: {
    ...mapActions(['fetch2']),
    ...mapMutations({ dispatch: 'DISPATCH2' }),
    handleOnPicked (item) {
      let mappick = this.mappick2
      let id = this.id
      if (mappick && mappick[id] && item.id === mappick[id].id) {
        this.dispatch({ id: this.id, picked: false })
        this.$store.commit('complain/DISPATCH', { id: this.id, picked: false })
      } else {
        this.dispatch({ id: this.id, picked: item })
        this.$store.commit('complain/DISPATCH', { id: this.id, picked: item })
      }
      if (mappick[id]) {
        this.$router && this.$router.go(-1)
      }
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.fetch2().then(data => {
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
