/* eslint-disable */
import Vue from 'vue'
import { ModelInput as Play } from 'components/ModelInput'
import Page from 'components/Page'
import repair from '@/models/repair'
import 'style/peco-ui.scss'

new Vue({
  el: '#app',
  components: { Page, Play },
  data: {
    model: repair
  },
  template: '<page><Play :model="model"></Play></page>'
})
