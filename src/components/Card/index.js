import InfoCard from './info.vue'

/* istanbul ignore next */
InfoCard.install = function (Vue) {
  Vue.component(InfoCard.name, InfoCard)
}

export {
  InfoCard
}
