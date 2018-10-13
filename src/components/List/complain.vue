<template lang="pug">
  div
    talk-card(v-for='item in thisData' :key='item.id' :data='item' :privs='privs' @click.native='handleOnClickTalkCard(item)' @clickbtn='handleOnClickBtn')
      template(v-if='item.cate==1')
        p 产品型号：
          span.gray {{ item.product_model }}
        p 机台编号：
          span.gray {{ item.machine_sn }}
      p 投诉描述：
        span.gray {{ item.description }}
      p(style='margin-top: 15px') 联系电话：
        span.link {{ item.contact }}
</template>

<script>
import TalkCard from 'components/Business/TalkCard'
import list from 'mixins/list'
import complainAction from '@/flow/complain/action'

export default {
  name: 'ComplainList',
  mixins: [list],
  components: {
    TalkCard
  },
  data () {
    return {
      privs: [
        [{id: 'contact', name: '联系用户'}, {id: 'dispatch', name: '分配'}], // status: 0 未分配
        [{id: 'info', name: '已分配XX', template: '已分配[dispatch.name]'}, {id: 'revoke', name: '撤回'}], // status: 1 已分配
        [] // status: 2 已完成
      ]
    }
  },
  methods: {
    handleOnClickTalkCard (item) {
      this.$router.push({ name: 'ComplainDetail', params: { id: item.id } })
    },
    handleOnClickBtn (d, btn) {
      complainAction(btn.id, d, { $router: this.$router })
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
