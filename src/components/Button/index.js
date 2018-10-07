import Area from './area.vue'
import Button from './button.vue'
import ButtonDefault from './default.vue'
import ButtonPrimary from './primary.vue'
import ButtonWarn from './warn.vue'

/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Area.name, Area)
  Vue.component(ButtonDefault.name, ButtonDefault)
  Vue.component(ButtonPrimary.name, ButtonPrimary)
  Vue.component(ButtonWarn.name, ButtonWarn)
}

export default Button
