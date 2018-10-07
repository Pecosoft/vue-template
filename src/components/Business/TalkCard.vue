<template lang="pug">
  .peco-talk-card
    .peco-talk-card__hd
      .peco-talk-card-avatar
        img(:src='header.avatar')
      div(style='margin-left: 10px')
        h3.peco-talk-card-name {{ header.name }}
        p.peco-talk-card-intro {{ header.intro }}
    .peco-talk-card__bd
      slot
    .peco-talk-card__ft(v-if='btns && btns.length')
      span.frt.link(v-for='btn in btns' :key='btn.id' @click.stop='$emit("clickbtn", btn)') {{ btn.name }}
    .peco-talk-card-rtfixed {{ header.datetime|timestamp-to-text }}
</template>

<script>
import { timestampToText } from '@/filters'

export default {
  name: 'TalkCard',
  filters: {
    timestampToText
  },
  props: {
    header: {
      type: Object,
      default () {
        return {
          name: '',
          avatar: '/static/logo.png',
          intro: '',
          datetime: new Date().getTime()
        }
      }
    },
    btns: {
      type: Array,
      default () {
        return []
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
