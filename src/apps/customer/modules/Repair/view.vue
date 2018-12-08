<template lang="pug">
page
  p-status(v-model='status')
  p-history
    p-event(v-for='event in events' :key='event.id')
      template
        p
          span(style='margin-right: 5px;') [{{ event.datetime|timestamp-to-text }}]
          a(v-if='event.mobile' :href='`tel://${event.mobile}`') {{ event.who }}
          span(v-else) {{ event.who }}
          span(style='margin-left: 5px;') {{ event.do }}
          span(v-if='event.contact') ，电话
                a(:href='`tel://${event.contact}`') {{ event.contact }}
        section(v-if='event.content')
          h3.event-title(v-if='event.cate == 4') {{ event.action == 'process' ? '维修内容：': '协助原因：' }}
            p.event-content {{ event.content }}
        section(v-if='event.imgs && event.imgs.length')
          img.event-img(v-for='img in event.imgs' :src='img' @click='previewImages(img, event.imgs)')
        template(v-if='event.cate == 4 && event.location')
          p.event-location(@click='openWxMap(event)') 位置：{{ event.location }}
</template>

<script>
import { timestampToText } from '@/filters'
import { createNamespacedHelpers } from 'vuex'
import { previewImage, openLocation } from 'utils/wxsdk'
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
    ...mapActions(['read']),
    previewImages (img, imgs) {
      previewImage('http:' + img, imgs.map(img => 'http:' + img))
    },
    openWxMap (e) {
      openLocation({
        latitude: e.lat,
        longitude: e.lng,
        name: e.who,
        address: e.location
      })
    }
  },
  mounted () {
    this.$peco.loading.show()
    this.read(this.id).then(res => {
      this.status = res.status
      this.events = res.events.filter(event => {
        return event.cate !== 1 && event.cate !== 2 && event.action.indexOf('help') === -1 && event.action.indexOf('continue') === -1
      })
      this.$peco.loading.hide()
    })
  }
}
</script>
