/* eslint-disable */
import Vue from 'vue'
import Play from 'components/OrderList'
import 'style/peco-ui.scss'

new Vue({
  el: '#app',
  components: { Play },
  data: {
    listData: [
      {id: 1, sn: '2018050210524290585581', addr: '广东省深圳市南山区', status: 0, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()},
      {id: 2, sn: '2017110810335533171752', addr: '广东省深圳市南山区', status: 1, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()},
      {id: 3, sn: '2017110810320688829954', addr: '广东省深圳市南山区', status: 2, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()},
      {id: 4, sn: '2017102621550936318893', addr: '广东省深圳市南山区', status: 3, product: {name: 'T-500H', avatar: 'http://iph.href.lu/80x80?text=产品图片'}, desc: '故障', create_time: new Date().getTime()}
    ],
    privs: [
      [{id: 0, name: '查看'}],
      [{id: 0, name: '查看'}],
      [{id: 0, name: '查看'}, {id: 3, name: '接单'}, {id: -4, name: '驳回'}],
      [{id: 0, name: '查看'}, {id: 4, name: '结案'}, {id: -6, name: '协助'}],
      [{id: 0, name: '查看'}, {id: 5, name: '评论'}],
      [{id: 0, name: '查看'}]
    ]
  },
  methods: {
    handleOnClickList (d) {
      console.log('click list item', d.id)
      // this.$refs.list.remove(d)
    },
    handleOnClickBtn (d, btn) {
      console.log('click btn', d.id, btn.id, btn.name)
    }
  },
  template: '<div class="page"><div class="container"><Play style="margin: 20px 0;" ref=list @clicklist="handleOnClickList" @clickbtn="handleOnClickBtn" :data="listData" :privs="privs" /></div></div>'
})
