<template lang="pug">
page
  p-status(v-model='status')
  p-history
    p-event(v-for='event in events' :key='event.id')
      template
        p {{ event.datetime }} {{ event.who }} {{ event.do }}
        p asfasdfaasdasdf
</template>

<script>
export default {
  data () {
    return {
      status: 3,
      events: [
        {
          id: 1,
          who: '张三',
          do: '受理订单',
          datetime: new Date().getTime()
        },
        {
          id: 2,
          who: '张三',
          do: '受理订单',
          datetime: new Date().getTime()
        },
        {
          id: 3,
          who: '张三',
          do: '受理订单',
          datetime: new Date().getTime()
        }
      ]
    }
  }
}
</script>
