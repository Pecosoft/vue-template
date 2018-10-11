<template lang="pug">
page
  profile-header(:name='name' :desc='desc' :avatar='avatar')
  grid(:data='gridData' :col-num="2" bg-color="#fff")
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repair')

export default {
  name: 'index',
  data () {
    return {
<<<<<<< HEAD
      name: '台群精机',
      desc: '台群阳光服务，在线报修',
=======
      name: '客服XXX',
      desc: '广东省 东莞市',
>>>>>>> dsclerk
      avatar: 'static/logo.png',
      gridData: [
        {id: 1, name: '报修', icon: 'repaire', url: '/dsclerk/repair'},
        {id: 2, name: '咨询', icon: 'consult', url: '/dsclerk/consult'},
        {id: 3, name: '投诉', icon: 'complain', url: '/dsclerk/complain'},
        {id: 4, name: '建议', icon: 'suggest', url: '/dsclerk/suggest'}
<<<<<<< HEAD
      ],
      privs: [
        [{id: 0, name: '查看'}],
        [{id: 0, name: '查看'}],
        [{id: 0, name: '查看'}, {id: 3, name: '接单'}, {id: -4, name: '驳回'}],
        [{id: 0, name: '查看'}, {id: 4, name: '结案'}, {id: -6, name: '协助'}],
        [{id: 0, name: '查看'}, {id: 5, name: '评论'}],
        [{id: 0, name: '查看'}]
      ]
    }
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    ...mapActions(['fetch']),
    handleOnClickGrid: gd => {
      console.log('click on grid', gd.id)
    },
    handleOnClickList (d) {
      this.$router.push({name: 'RepairDetail', params: {id: d.id}})
    },
    handleOnClickBtn (d, btn) {
      switch (btn.id) {
        case 0:
          this.$router.push({name: 'RepairView', params: {id: d.id}})
          break
      }
=======
      ]
>>>>>>> dsclerk
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
