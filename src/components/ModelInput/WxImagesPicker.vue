<template lang="pug">
  .peco-model-input.tapable
    .peco-model-input_bd
      .peco-uploader
        .peco-uploader__hd
          p.peco-uploader__title {{ label }}
          .peco-uploader__info {{ thisValue.length }}/9
        .peco-uploader__bd
          ul.peco-uploader__files
            li.peco-uploader__file(v-for='(img, i) in thisValue' :key='i')
              img(:src='img' @click='onPreviewImg(img)')
          .peco-uploader__input-box.del(v-if='thisValue.length' @click='onPopImg')
          .peco-uploader__input-box(v-if='thisValue.length < 9' @click='onClick')
</template>

<script>
import model from '@/mixins/model'
import modelinput from '@/mixins/modelinput'
import { chooseImage, getImgSrcByLocalId, previewImage } from 'utils/wxsdk'

export default {
  mixins: [model, modelinput],
  methods: {
    onClick () {
      let count = this.thisValue.length
      if (count >= 9) return
      chooseImage({ count: 9 - count }).then(localIds => {
        localIds.forEach(localId => {
          getImgSrcByLocalId(localId).then(localData => {
            this.thisValue.push(localData)
          })
        })
      })
    },
    onDeleteImg (idx) {
      this.thisValue.splice(idx, 1)
    },
    onPopImg () {
      this.thisValue.pop()
    },
    onPreviewImg (img) {
      previewImage(img, this.thisValue)
    }
  }
}
</script>

<style lang="scss">
.peco-uploader {
  input {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}

.peco-uploader__hd {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  padding-bottom: 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.peco-uploader__title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

.peco-uploader__info {
    color: #B2B2B2;
}

.peco-uploader__bd {
  margin-bottom: -4px;
  margin-right: -9px;
  overflow: hidden;
}

ul.peco-uploader__files {
  list-style: none;
}

.peco-uploader__file {
  float: left;
  margin-right: 9px;
  margin-bottom: 9px;
  width: 79px;
  height: 79px;
  background: no-repeat center center;
  background-size: cover;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.peco-uploader__input-box {
  float: left;
  position: relative;
  margin-right: 9px;
  margin-bottom: 9px;
  width: 79px;
  height: 79px;
  border: 1px solid #D9D9D9;
  &:before, &:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #D9D9D9;
  }
  &:not(.del):before {
    width: 2px;
    height: 39.5px;
  }
  &:after {
    width: 39.5px;
    height: 2px;
  }
}

.peco-uploader__input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
