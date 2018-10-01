<template lang="pug">
  .peco-model-inputs
    template(v-for='(attr, field) in model')
      p-text(v-if='attr.input==="Text"' :label='attr.name' :attr='attr')
      p-textarea(v-else-if='attr.input==="Textarea"' :label='attr.name' :rows='attr.rows || 3' :attr='attr')
      mobile(v-else-if='attr.input==="Mobile"' :label='attr.name' :attr='attr')
      email(v-else-if='attr.input==="Email"' :label='attr.name' :attr='attr')
      product-picker(v-else-if='attr.input==="ProductPicker"' :label='attr.name' :attr='attr')
      wx-images-picker(v-else-if='attr.input==="WxImagesPicker"' :label='attr.name' :attr='attr')
      wx-voice-recoder(v-else-if='attr.input==="WxVoiceRecoder"' :label='attr.name' :attr='attr')
</template>

<script>
import { Text, Textarea, Mobile, Email, ProductPicker, WxImagesPicker, WxVoiceRecoder } from './input'
import model from '@/mixins/model'

export default {
  name: 'ModelInput',
  mixins: [model],
  props: ['model'],
  components: {
    PText: Text,
    PTextarea: Textarea,
    Mobile,
    Email,
    ProductPicker,
    WxImagesPicker,
    WxVoiceRecoder
  }
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_line.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/extend/_layout.scss';

.peco-model-inputs {
  background: $color-pannel-bg;
  font-size: $font-size-primary;
  position: relative;
  &:before {
      @include setTopLine($color-border);
      z-index: 2;
  }
  &:after {
      @include setBottomLine($color-border);
      z-index: 2;
  }
}

.peco-model-input {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  position: relative;
  &:before {
    @include setTopLine($color-border);
    left: 15px;
    z-index: 2;
  }
  &:first-child {
    &:before {
      display: none;
    }
  }
}

.peco-model-input_bd {
  flex: 1;
}

.peco-model-input_ft {
  width: 30px;
  font-size: 2rem;
  text-align: center;
}

.peco-input {
  width: 100%;
  border: 0;
  outline: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  height: 25px;
  line-height: 25px;
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
}

.peco-textarea {
  display: block;
  border: 0;
  resize: none;
  width: 100%;
  color: inherit;
  font-size: 1em;
  line-height: inherit;
  outline: 0;
}
</style>
