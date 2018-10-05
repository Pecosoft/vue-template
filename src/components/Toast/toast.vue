<template lang="pug">
  div
    .peco-mask_transparent(v-show='isShowMask && show')
    transition(:name='currentTransition')
      .peco-toast(:style='{width: width}' :class='toastClass' v-show='show')
        i.peco-icon-success-no-circle.peco-icon_toast(v-show='type !== "text"')
        p.peco-toast__content(v-if="text" :style="style" v-html="text")
        p.peco-toast__content(v-else :style='style')
          slot
</template>

<script>
import SafariFixIssue from 'mixins/safariFix'

export default {
  name: 'Toast',
  mixins: [SafariFixIssue],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data () {
    return {
      show: false
    }
  },
  created () {
    if (this.value) {
      this.show = true
    }
  },
  computed: {
    currentTransition () {
      if (this.transition) {
        return this.transition
      }
      if (this.position === 'top') {
        return 'peco-slide-from-top'
      }
      if (this.position === 'bottom') {
        return 'peco-slide-from-bottom'
      }
      return 'peco-fade'
    },
    toastClass () {
      return {
        'peco-toast_forbidden': this.type === 'warn',
        'peco-toast_cancel': this.type === 'cancel',
        'peco-toast_success': this.type === 'success',
        'peco-toast_text': this.type === 'text',
        'peco-toast-top': this.position === 'top',
        'peco-toast-bottom': this.position === 'bottom',
        'peco-toast-middle': this.position === 'middle'
      }
    },
    style () {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' }
      }
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.$emit('input', true)
        this.$emit('on-show')
        this.fixSafariOverflowScrolling('auto')

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.show = false
          this.$emit('input', false)
          this.$emit('on-hide')
          this.fixSafariOverflowScrolling('touch')
        }, this.time)
      }
    },
    value (val) {
      this.show = val
    }
  }
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/extend/_layout.scss';

.peco-toast.peco-toast-top {
  top: 10px;
}
.peco-toast.peco-toast-bottom {
  top: auto;
  bottom: 10px;
  transform: translateX(-50%);
}
.peco-toast.peco-toast-middle {
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.peco-slide-from-top-enter, .peco-slide-from-top-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%)!important;
}
.peco-slide-from-bottom-enter, .peco-slide-from-bottom-leave-active {
  opacity: 0;
  transform: translateX(-50%) translateY(100%)!important;
}
.peco-slide-from-top-enter-active,
.peco-slide-from-top-leave-active,
.peco-slide-from-bottom-enter-active,
.peco-slide-from-bottom-leave-active {
  transition: all 400ms cubic-bezier(.36,.66,.04,1);
}
.peco-toast {
  transform: translateX(-50%);
  margin-left: 0 !important;
}
.peco-toast.peco-toast_forbidden {
  color: #F76260;
}
.peco-toast.peco-toast_forbidden .peco-toast__content {
  margin-top: 10px;
}
.peco-toast.peco-toast_text{
  min-height: 0;
}
.peco-toast_text .peco-toast__content {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
}
.peco-toast__content {
  font-size: 16px;
}
.peco-loading_toast .peco-toast__content {
  margin-top: 0;
}
.peco-toast_success .peco-icon_toast:before {
  content: "\EA08";
}
.peco-toast_cancel .peco-icon_toast:before {
  content: "\EA0D";
}
.peco-toast_forbidden .peco-icon_toast.peco-icon-success-no-circle:before {
  content: "\EA0B";
  color: #F76260;
}
</style>
