<template lang="pug">
  .peco-talk-card
    .peco-talk-card__hd
      .peco-talk-card-avatar
        img(:src='thisData.user.avatar')
      div(style='margin-left: 10px')
        h3.peco-talk-card-name {{ thisData.user.name }}
        p.peco-talk-card-intro {{ thisData.user.intro }}
    .peco-talk-card__bd
      slot
    .peco-talk-card__ft(v-if='btns && btns.length')
      span.frt.link(v-for='btn in btns' v-if='btnHide[btn.id]' :key='btn.id' @click.stop='$emit("clickbtn", thisData, btn)') {{ btnTpls[btn.id] || btn.name }}
    .peco-talk-card-rtfixed {{ thisData.create_time|timestamp-to-text }}
</template>

<script>
import { timestampToText } from '@/filters'
import data from 'mixins/data'

export default {
  name: 'TalkCard',
  mixins: [data],
  filters: {
    timestampToText
  },
  props: {
    privs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      btnTpls: {},
      btnHide: {}
    }
  },
  computed: {
    btns () {
      let status = parseInt(this.thisData.status)
      let privs = this.privs
      if (!privs || !privs.length) return []
      let privBtns = privs[status]
      privBtns.forEach(item => {
        if (item.template) {
          let template = item.template
          let templateRegx = /\[(.+)\]/
          let matches = template.match(templateRegx)
          let replace = matches[0]
          let fields = matches[1]
          if (fields.indexOf('.') === -1) {
            // eslint-disable-next-line
            this.btnTpls[item.id] = template.replace(replace, this.thisData[fields])
          } else {
            let fieldsArr = fields.split('.')
            let d0 = this.thisData[fieldsArr[0]]
            if (d0) {
              let d1 = d0[fieldsArr[1]]
              // eslint-disable-next-line
              if (d1) { this.btnTpls[item.id] = template.replace(replace, d1) }
            }
          }
        }
        if (item._if) {
          let [_ifkey, _ifval] = item._if.split('=')
          let _ifdataval = this.thisData[_ifkey]
          if (_ifdataval != _ifval) {
            this.btnHide[item.id] = true
          }
        }
      })
      return privBtns
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

.peco-talk-card {
  background: #fff;
  position: relative;
}
.peco-talk-card__hd {
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $color-border;
}

.peco-talk-card-avatar {
  padding: 10px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    object-fit: cover;
  }
}

.peco-talk-card-name {
  font-size: 16px;
}

.peco-talk-card-intro {
  margin-top: 5px;
  font-size: 12px;
  color: $color-text3;
}

.peco-talk-card__ft {
  padding: 10px;
  @include clearfix;
  span.frt {
    display: inline-block;
    position: relative;
    padding-left: 6px;
    &+span.frt {
      padding-right: 7px;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 3px;
        right: 0;
        height: 12px;
        width: 1px;
        background: $color-border;
      }
    }
  }
}
.peco-talk-card__bd {
  padding: 10px 15px;
  font-size: 14px;
  &+.peco-talk-card__ft {
    border-top: 1px solid $color-border;
  }
}
.peco-talk-card-rtfixed {
  position: absolute;
  right: 15px;
  top: 10px;
  color: $color-text3;
  font-size: $font-size-aux;
}
</style>
