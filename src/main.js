import Vue from 'vue'
import Play from 'components/ProfileHeader'
import 'style/pui.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Play },
  template: '<div class="page"><div class="container"><Play/></div></div>'
})
