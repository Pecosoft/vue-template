<template lang="pug">
  button.peco-btn
    slot
</template>

<script>
export default {
  name: 'Btn'
}
</script>

<style lang="scss">
@import 'style/var/_color.scss';
@import 'style/var/_size.scss';
@import 'style/var/_font.scss';
@import 'style/mixin/_size.scss';
@import 'style/mixin/_arrow.scss';
@import 'style/mixin/_clearfix.scss';
@import 'style/mixin/_mobile.scss';
@import 'style/extend/_layout.scss';

.peco-btn {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  line-height: 46px;
  border-radius: 5px;
  @include setTapColor();
  overflow: hidden;
  &:after {
      content: " ";
      width: 200%;
      height: 200%;
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid rgba(0, 0, 0, .2);
      transform: scale(.5);
      transform-origin: 0 0;
      box-sizing: border-box;
      border-radius: 10px;
  }
  &+& {
    margin-top: 10px;
  }
}

.peco-btn_inline {
  display: inline-block;
}

button, input {
  &.peco-btn {
    width: 100%;
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
    &:focus {
      outline: 0;
    }
  }
  &.peco-btn_inline,&.peco-btn_mini {
    width: auto;
  }
  &.peco-btn_plain-primary,&.peco-btn_plain-default{
    border-width: 1px;
    background-color: transparent;
  }
}

.peco-btn_disabled {
    color: rgba(255,255,255,.6);
    &.peco-btn_default {
        color: rgba(0,0,0,.3);
        background-color: #F7F7F7;
    }
    &.peco-btn_primary {
        background-color: #9ED99D;
    }
    &.peco-btn_warn {
        background-color: #EC8B89;
    }
}

.peco-btn_plain-disabled {
  color:rgba(0,0,0,.2);
  border-color:rgba(0,0,0,.2);
}

.peco-btn_loading {
  .peco-loading {
    margin: -4px 5px 0 0;
  }
  &.peco-btn_primary, &.peco-btn_warn {
    color: rgba(255,255,255,.6);
  }
  &.peco-btn_primary {
    background-color: #179B16;
  }
  &.peco-btn_warn {
    background-color: #CE3C39;
  }
}
</style>
