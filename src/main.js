import Vue from 'vue'
import Play from 'components/OrderList'
import 'style/peco-ui.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Play },
  data: {
    listData: [
      {id: 1, sn: '2018050210524290585581', status: 1, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()},
      {id: 2, sn: '2017110810335533171752', status: 1, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()},
      {id: 3, sn: '2017110810320688829954', status: 1, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()},
      {id: 4, sn: '2017102621550936318893', status: 1, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()}
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
