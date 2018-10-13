<template lang="pug">
  .peco-chat-sender
    .peco-chat-sender-input
      div
        textarea(v-model='sendContent')
    .peco-chat-sender-btn(@click='$emit("onsend", sendContent)') 发送
</template>

<script>
export default {
  name: 'ChatSender',
  data () {
    return {
      sendContent: ''
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

.peco-chat-sender {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: #F2F2F5;
  border-top: 1px solid #D1D1D4;
  font-size: 16px;
}
.peco-chat-sender-input {
  flex: 1;
  padding: 10px 15px;
  textarea {
    border: 1px solid #D1D1D4;
    background: #fff;
    padding: 10px;
    line-height: 18px;
    font-size: 16px;
    border-radius: 2px;
    height: 40px;
    width: 100%;
  }
}
.peco-chat-sender-btn {
  width: 60px;
  height: 38px;
  margin: 11px 15px 10px 0;
  line-height: 38px;
  font-size: 16px;
  text-align: center;
  border-radius: 2px;
  background: $color-primary;
  color: #fff;
}
</style>
