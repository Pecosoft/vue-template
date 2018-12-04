<template lang="pug">
  .peco-model-input
    .peco-model-input_bd
      .peco-uploader
        .peco-uploader__hd
          p.peco-uploader__title {{ label }}
          .peco-uploader__info
            span.link(v-if='seconds' @click='onPlay' style='margin-right: 10px') 播放
            span {{ seconds }}/60 秒
        .peco-uploader__bd
          .peco-recorder(@touchstart='onStart' @touchend='onEnd' :class='{active: recording}')
            i.peco-icon.peco-icon-microphone(style='margin-top: 20px')
            br
            span {{ recording ? '正在录音...' : '开始录音' }}
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'
// eslint-disable-next-line
import { startRecord, stopRecord, onVoiceRecordEnd, playVoice, pauseVoice, stopVoice, onVoicePlayEnd, uploadVoice } from 'utils/wxsdk'

export default {
  mixins: [model, modelinput],
  data () {
    return {
      recording: false,
      seconds: 0,
      timerId: null
    }
  },
  methods: {
    saveRecord () {
      if (this.timerId) {
        clearTimeout(this.timerId)
      }
      stopRecord().then(localId => {
        this.recording = false
        this.thisValue = localId
      })
    },
    startCount () {
      this.timerId = setTimeout(_ => {
        this.seconds++
        if (this.seconds < 60) {
          this.startCount()
        } else {
          this.saveRecord()
        }
      }, 1000)
    },
    onStart () {
      if (!this.recording) {
        this.recording = true
        this.seconds = 0
        this.startCount()
        startRecord()
      }
    },
    onEnd () {
      if (this.recording) {
        this.saveRecord()
      }
    },
    onPlay () {
      if (this.thisValue) {
        playVoice(this.thisValue)
      }
    }
  }
}
</script>

<style lang="scss">
.peco-recorder {
  text-align: center;
  margin: 20px auto;
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  &.active {
    border: 2px solid #0769ad;
  }
  -webkit-touch-callout: none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
</style>
