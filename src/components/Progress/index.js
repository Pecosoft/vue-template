import PStatus from './status.vue'
import PHistory from './history.vue'
import PEvent from './event.vue'

/* istanbul ignore next */
const install = function (Vue) {
  Vue.component(PStatus.name, PStatus)
  Vue.component(PHistory.name, PHistory)
  Vue.component(PEvent.name, PEvent)
}

export default install
