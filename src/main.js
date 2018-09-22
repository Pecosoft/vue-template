/* eslint-disable */
import Vue from 'vue'
import Play from 'components/Pannel'
import 'style/peco-ui.scss'

new Vue({
  el: '#app',
  components: { Play },
  template: '<div class="page"><div class="container"><Play :gutter="15" title="订单数（50）">asfd</Play></div></div>'
})
