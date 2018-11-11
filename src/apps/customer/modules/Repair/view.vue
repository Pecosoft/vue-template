<template lang="pug">
page
  p-status(v-model='status')
  p-history
    p-event(v-for='event in events' :key='event.id')
      template
        p [{{ event.datetime|timestamp-to-text }}] {{ event.who }} {{ event.do }}
        p asfasdfaasdasdf
</template>

<script>
import { timestampToText } from '@/filters'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  data () {
    return {
      id: this.$route.params.id,
      status: 0,
      events: [
        {
          id: 1,
          who: '',
          do: '',
          datetime: ''
        }
      ]
    }
  },
  filters: {
    timestampToText
  },
  computed: {
    ...mapState(['details'])
  },
  methods: {
    ...mapActions(['read'])
  },
  mounted () {
    this.$peco.loading.show()
    this.read(this.id).then(res => {
      this.status = res.status
      this.events = res.events
      this.$peco.loading.hide()
    })
  }
}
</script>
