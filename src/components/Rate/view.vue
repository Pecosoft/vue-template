<template lang="pug">
.peco-rate-view
  .peco-rate-view__hd
    cell
      .peco-rate-user-avatar(slot='prefix')
        img(:src='thisData.user.avatar')
      p {{ thisData.user.name }}
      p.aux.gray(style='margin-top: 5px;') {{ thisData.create_time|timestamp-to-text }}
  .peco-rate-view__bd
    section
      .peco-rate-stars-cell
        .peco-rate-stars-cell__hd 响应速度
        .peco-rate-stars-cell__bd
          stars(:data='thisData.sudu_stars')
      .peco-rate-stars-cell
        .peco-rate-stars-cell__hd 服务态度
        .peco-rate-stars-cell__bd
          stars(:data='thisData.taidu_stars')
      .peco-rate-stars-cell
        .peco-rate-stars-cell__hd 维修技术
        .peco-rate-stars-cell__bd
          stars(:data='thisData.jishu_stars')
  .peco-rate-view__ft
    p.gray {{ thisData.content }}
</template>

<script>
import Stars from './stars'
import data from 'mixins/data'
import { timestampToText } from '@/filters'

export default {
  name: 'RateView',
  mixins: [data],
  filters: {
    timestampToText
  },
  components: {
    Stars
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.peco-rate-view {
  font-size: 16px;
  background: #fff;
}
.peco-rate-user-avatar {
  padding: 10px;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 30px;
  }
}

.peco-rate-stars-cell {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  display: flex;
}

.peco-rate-stars-cell__bd {
  padding: 0 10px;
  flex: 1;
}

.peco-rate-view__bd, .peco-rate-view__ft {
  padding: 10px 15px 10px 95px;
}
</style>
