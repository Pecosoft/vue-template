import Check from './check.vue'
import Complain from './complain.vue'
import Suggest from './suggest.vue'

export default function (Vue) {
  Vue.component(Check.name, Check)
  Vue.component(Complain.name, Complain)
  Vue.component(Suggest.name, Suggest)
}
