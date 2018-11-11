<template lang="pug">
  .peco-model-inputs
    template(v-for='(attr, field) in model')
      p-text(v-if='attr.input==="Text"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
      p-textarea(v-else-if='attr.input==="Textarea"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
      mobile(v-else-if='attr.input==="Mobile"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
      email(v-else-if='attr.input==="Email"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
      product-picker(v-else-if='attr.input==="ProductPicker"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
      wx-images-picker(v-else-if='attr.input==="WxImagesPicker"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
      wx-voice-recoder(v-else-if='attr.input==="WxVoiceRecoder"' :label='attr.name' :attr='attr' v-model='thisValue[field]' @input='$emit("input", thisValue)')
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
</style>
