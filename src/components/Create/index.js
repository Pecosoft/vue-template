import Create from './create.vue'

/* istanbul ignore next */
Create.install = function (Vue) {
  Vue.component(Create.name, Create)
}

export default Create
