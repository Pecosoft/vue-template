import dom from 'utils/dom'

const BODY_CLASS_NAME = 'peco-modal-open'
const CONTAINER_CLASS_NAME = 'peco-modal-open-for-container'
const PECO_PAGE = '.peco-page'

export default {
  methods: {
    // some plugin may be imported before configPlugin, so we cannot get gloal config when component is created
    getLayout () {
      if (typeof window !== 'undefined') {
        // if (window.VUX_CONFIG && window.VUX_CONFIG.$layout === 'PECO_PAGE') {
        return 'PECO_PAGE'
        // }
      }
      return ''
    },
    addModalClassName () {
      if (typeof this.shouldPreventScroll === 'function' && this.shouldPreventScroll()) {
        return
      }
      if (this.getLayout() === 'PECO_PAGE') {
        dom.addClass(document.body, BODY_CLASS_NAME)
        dom.addClass(document.querySelector(PECO_PAGE), CONTAINER_CLASS_NAME)
      }
    },
    removeModalClassName () {
      if (this.getLayout() === 'PECO_PAGE') {
        dom.removeClass(document.body, BODY_CLASS_NAME)
        dom.removeClass(document.querySelector(PECO_PAGE), CONTAINER_CLASS_NAME)
      }
    }
  },
  beforeDestroy () {
    this.removeModalClassName()
  },
  deactivated () {
    this.removeModalClassName()
  }
}
