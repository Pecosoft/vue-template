import LoadingComponent from 'components/Loading'
import mergeOptions from 'utils/pluginMergeOptions'

let $vm
let watcher
let delayTime = null

const plugin = {
  install (Vue, options) {
    const Loading = Vue.extend(LoadingComponent)

    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const loading = {
      show (options = {}) {
        // destroy watcher
        watcher && watcher()
        if (typeof options === 'string') {
          $vm.text = options
        } else if (typeof options === 'object') {
          mergeOptions($vm, options)
        }
        if (typeof options === 'object' && (options.onShow || options.onHide)) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        delayTime && clearTimeout(delayTime)
        delayTime = setTimeout(() => {
          $vm.show = true
        }, options.delay || 0)
      },
      hide () {
        if (delayTime) {
          clearTimeout(delayTime)
          delayTime = null
        }
        $vm.show = false
      },
      isVisible () {
        return $vm.show
      }
    }

    // all peco's plugins are included in this.$peco
    if (!Vue.$peco) {
      Vue.$peco = {
        loading
      }
    } else {
      Vue.$peco.loading = loading
    }

    Vue.mixin({
      created: function () {
        this.$peco = Vue.$peco
      }
    })
  }
}

export default plugin
