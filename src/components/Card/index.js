import Card from './card.vue'
import InfoCard from './info.vue'

/* istanbul ignore next */
Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

InfoCard.install = function (Vue) {
  Vue.component(InfoCard.name, InfoCard)
}

export {
  Card,
  InfoCard
}
