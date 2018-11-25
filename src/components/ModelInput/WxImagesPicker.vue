<template lang="pug">
  .peco-model-input.tapable(@click='onClick')
    .peco-model-input_bd
      span {{ label }}
      img(v-for='(img, i) in imgs' :key='i' :src='img')
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'
import { chooseImage, getImgSrcByLocalId, uploadImage } from 'utils/wxsdk'

export default {
  mixins: [model, modelinput],
  data () {
    return {
      imgs: []
    }
  },
  methods: {
    onClick () {
      chooseImage({ count: 9 }).then(localIds => {
        localIds.forEach(localId => {
          getImgSrcByLocalId(localId).then(localData => {
            this.imgs.push(localData)
          })
        })
      })
    }
  }
}
</script>
