<template lang="pug">
  page
    tab(:tabs='tabs' v-model='tabIndex')
    keep-alive
      template(v-if='tabIndex == 0')
        talk-card(v-for='item in list0' :key='item.id' :header='item.user' :btns='btns' @click.native='handleOnClickTalkCard(item)' @clickbtn='handleOnClickBtn')
          template(v-if='item.cate==1')
            p 产品型号：
              span.gray {{ item.product_model }}
            p 机台编号：
              span.gray {{ item.machine_sn }}
          p 投诉描述：
            span.gray {{ item.description }}
          p(style='margin-top: 15px') 联系电话：
            span.link {{ item.contact }}
      template(v-else-if='tabIndex == 1')
        talk-card(v-for='item in list1' :key='item.id' :header='item.user' :btns='btns' @click.native='handleOnClickTalkCard(item)' @clickbtn='handleOnClickBtn')
          template(v-if='item.cate==1')
            p 产品型号：
              span.gray {{ item.product_model }}
            p 机台编号：
              span.gray {{ item.machine_sn }}
          p 投诉描述：
            span.gray {{ item.description }}
          p(style='margin-top: 15px') 联系电话：
            span.link {{ item.contact }}
      template(v-else)
        talk-card(v-for='item in list2' :key='item.id' :header='item.user' :btns='btns' @click.native='handleOnClickTalkCard(item)' @clickbtn='handleOnClickBtn')
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('complain')

export default {
  components: {
    TalkCard
  },
  data () {
    return {
      tabIndex: 0,
      tabs: ['未分配', '已分配', '已完成'],
      btns: [
        {
          id: 2,
          name: '分配/撤回'
        },
        {
          id: 1,
          name: '联系客户'
        }
      ]
    }
  },
  computed: {
    ...mapState(['list']),
    list0 () {
      let list = this.list
      return list.filter(item => {
        if (item.status === 0) {
          return true
        }
        return false
      })
    },
    list1 () {
      let list = this.list
      return list.filter(item => {
        let status = item.status
        if (status === 1) {
          return true
        }
        return false
      })
    },
    list2 () {
      let list = this.list
      return list.filter(item => {
        let status = item.status
        if (status === 2) {
          return true
        }
        return false
      })
    }
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickTalkCard (item) {
      this.$router.push({ name: 'ComplainDetail', params: { id: item.id } })
    },
    handleOnClickBtn (btn) {
      console.log(btn)
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
@import 'dsclerk/style.scss'
</style>
