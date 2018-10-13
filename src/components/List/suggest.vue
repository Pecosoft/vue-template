<template lang="pug">
  div
    talk-card(v-for='item in thisData' :key='item.id' :data='item' @click.native='handleOnClickTalkCard(item)')
      p 产品：
        span.gray {{ item.product_model }}
      p 建议：
        span.gray {{ item.description }}
      p(style='margin-top: 15px') 联系电话：
        span.link {{ item.contact }}
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import list from 'mixins/list'

export default {
  name: 'SuggestList',
  mixins: [list],
  components: {
    TalkCard
  },
  methods: {
    handleOnClickTalkCard (item) {
      this.$router.push({ name: 'SuggestDetail', params: { id: item.id } })
    }
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
