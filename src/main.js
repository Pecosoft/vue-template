import Vue from 'vue'
import Play from 'components/OrderList'
import 'style/peco-ui.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Play },
  data: {
    listData: [
      {id: 1, name: '报修', icon: 'repaire'},
      {id: 2, name: '咨询', icon: 'consult'},
      {id: 3, name: '投诉', icon: 'complain'},
      {id: 4, name: '建议', icon: 'suggest'}
    ]
  },
  methods: {
    handleOnClickList (d) {
      console.log('click list item', d.id)
      //this.$refs.list.remove(d)
    }
  },
  template: '<div class="page"><div class="container"><Play ref=list @clicklist="handleOnClickList" :data="listData" /></div></div>'
})
