<template lang="pug">
  div
    transition(name='peco-mask')
      .peco-mask(v-show='show' @click='hide')
    transition(name='peco-mask')
      .peco-dialog(v-show='show')
        .peco-dialog__hd(v-if='showTitle')
          strong.peco-dialog__title {{ title }}
        .peco-dialog__bd
          slot
        .peco-dialog__ft(v-if='showBtn')
          a.peco-dialog__btn.peco-dialog__btn_default(herf='javascript:;' @click='$emit("oncancel")') {{ cancelText || '取消' }}
          a.peco-dialog__btn.peco-dialog__btn_primary(herf='javascript:;' @click='$emit("onconfirm")') {{ confirmText || '确认' }}
</template>

<script>
import preventBodyScroll from 'mixins/preventBodyScroll'

export default {
  name: 'PDialog',
  mixins: [preventBodyScroll],
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: '对话框'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    show: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    hideOnBlur: Boolean
  },
  watch: {
    show (val) {
      this.$emit('update:show', val)
      this.$emit(val ? 'on-show' : 'on-hide')
      if (val) {
        this.addModalClassName()
      } else {
        this.removeModalClassName()
      }
    }
  },
  methods: {
    shouldPreventScroll () {
      // hard to get focus on iOS device with fixed position, so just ignore it
      const iOS = /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
      const hasInput = this.$el.querySelector('input') || this.$el.querySelector('textarea')
      if (iOS && hasInput) {
        return true
      }
    },
    hide () {
      if (this.hideOnBlur) {
        this.$emit('update:show', false)
        this.$emit('change', false)
        this.$emit('on-click-mask')
      }
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
@import 'style/mixin/_line.scss';
@import 'style/mixin/_mobile.scss';
@import 'style/extend/_layout.scss';

.peco-dialog {
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #FFFFFF;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;

  font-size: $font-size-primary;
}
.peco-dialog__hd {
  padding: 20px 25px 8px;
}
.peco-dialog__title {
  font-weight: 400;
  font-size: $font-size-h3;
}
.peco-dialog__bd {
  word-wrap: break-word;
  word-break: break-all;
  padding: 20px 15px;
}
.peco-dialog__ft {
  position: relative;
  line-height: 48px;
  font-size: $font-size-h3;
  display: flex;
  &:after {
    content: " ";
    @include setTopLine(#D5D5D6);
  }
}
.peco-dialog__btn {
  display: block;
  flex: 1;
  color: #3CC51F;
  text-decoration: none;
  @include setTapColor();
  &:active {
    background-color: #EEEEEE;
  }

  position: relative;
  &:after {
    content: " ";
    @include setLeftLine(#D5D5D6);
  }
  &:first-child {
    &:after {
      display: none;
    }
  }
}

.peco-dialog__btn_default {
  color: #353535 !important;
}
.peco-dialog__btn_primary {
  color: #0BB20C !important;
}

.peco-skin_android{
  .peco-dialog {
    text-align: left;
    box-shadow: 0 6px 30px 0 rgba(0, 0, 0, .1);
  }
  .peco-dialog__title{
    font-size: 21px;
  }
  .peco-dialog__hd{
    text-align: left;
  }
  .peco-dialog__bd{
    color:#999;
    padding:.25em 25px 2em;
    font-size: 17px;
    text-align: left;
    &:first-child{
      padding:1.6em 25px 2em;
      color:#353535;
    }
  }
  .peco-dialog__ft{
    display: block;
    text-align: right;
    line-height: 42px;
    font-size: 16px;
    padding:0 25px .7em;
    &:after{
      display: none;
    }
  }
  .peco-dialog__btn{
    display: inline-block;
    vertical-align: top;
    padding:0 .8em;
    &:after{
      display: none;
    }

    &:active{
      background-color: rgba(0,0,0,.06);
    }
    &:visited{
      background-color: rgba(0,0,0,.06);
    }
    &:last-child{
      margin-right: -.8em;
    }
  }
  .peco-dialog__btn_default {
    color: #808080;
  }
}

@media screen and (min-width: 1024px) {
  .peco-dialog {
    width: 35%;
  }
}
</style>
