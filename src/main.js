/* eslint-disable */
import Vue from 'vue'
import { InfoCard as Play } from 'components/Card'
import 'style/peco-ui.scss'

new Vue({
  el: '#app',
  components: { Play },
  data: {
    infos: [
      {style: 'height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: '张三'}, {style: 'margin-left: 10px', value: '15988888888'}]},
      {style: 'height: 22px; line-height: 22px; margin-bottom: 10px', row: [{style: '', value: '深圳市XXXXxxxxxxxx公司'}]},
      {style: 'height: 22px; line-height: 22px; ', row: [{style: '', value: '深圳市南山区高新科技园高新南四路'}]},
      {style: 'height: 22px; line-height: 22px; ', row: [{style: '', value: 'T栋XXXXXX'}]},
    ],
    editUrl: '/edit'
  },
  template: '<Play :infos="infos" :editUrl="editUrl"></Play>'
})
