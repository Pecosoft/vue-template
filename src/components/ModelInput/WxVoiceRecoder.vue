<template lang="pug">
  .peco-model-input.tapable(@click='onClick')
    .peco-model-input_bd
      .peco-input {{ label }}
    .peco-model-input_ft
      i.arrow-right-gray
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'
import { startRecord, stopRecord, onVoiceRecordEnd, playVoice, pauseVoice, stopVoice, onVoicePlayEnd, uploadVoice } from 'utils/wxsdk'

export default {
  mixins: [model, modelinput],
  data () {
    return {
      recording: false
    }
  },
  methods: {
    onClick () {
      if (!this.recording) {
        this.recording = true
        return startRecord()
      }
      stopRecord().then(localId => {
        this.recording = false
      })
    }
  }
}
</script>
