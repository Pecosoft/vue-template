import Vue from 'vue'
import Play from 'components/Grid'
import 'style/peco-ui.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Play },
  data: {
    gridData: [
      {id: 1, name: '报修', icon: 'repaire'},
      {id: 2, name: '咨询', icon: 'consult'},
      {id: 3, name: '投诉', icon: 'complain'},
      {id: 4, name: '建议', icon: 'suggest'}
    ]
  },
  methods: {
    handleOnClickGrid: d => {
      console.log('click on grid', d)
    }
  },
  template: '<div class="page"><div class="container"><Play @clickgrid="handleOnClickGrid" :data="gridData" :col-num="2" bg-color="#fff" /></div></div>'
})
