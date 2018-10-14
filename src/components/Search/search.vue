<template lang="pug">
div
  .peco-search-bar(:class='{focus: isSearchFocus}')
    .peco-search
      .peco-search-icon
        i.peco-icon.peco-icon-searchx
      input.peco-search-input(@focus='isSearchFocus=true' v-model='searchKeyword' placeholder='输入关键字')
      .peco-clear-icon(v-show='searchKeyword' @click='searchKeyword=""')
        i.peco-icon.peco-icon-clear
    .peco-search-cancel(@click='isSearchFocus=false') 取消

  .peco-search-result(v-show='searchKeyword && isSearchFocus')
    ul.peco-searchlist
      li(v-for='item in searchResults' :class='{checked: isChecked(item), "has-avatar": item.avatar}' @click='$emit("onchecked", item)')
        div(v-if='item.avatar')
          img(:src='item.avatar')
          p {{ item.cnPathName || item.name }}
          i.peco-icon.peco-icon-checked
          i.peco-icon.peco-icon-uncheck
        div(v-else)
          p {{ item.cnPathName || item.name }}
          i.peco-icon.peco-icon-checked
          i.peco-icon.peco-icon-uncheck
    div(v-show='!searchResults.length')
      .peco-search-empty
        p(style='text-align: center; font: 14px/20px PingFangSC-Regular,sans-serif;color: #C1C1C1;') 查询不到相关信息
</template>

<script>
import data from 'mixins/data'

export default {
  name: 'Search',
  mixins: [data],
  props: ['checked'],
  data () {
    return {
      isSearchFocus: true,
      searchKeyword: '',
      thisChecked: this.checked || false
    }
  },
  watch: {
    checked (newVal) {
      this.thisChecked = newVal
    }
  },
  computed: {
    searchResults () {
      let kw = this.searchKeyword
      if (!kw) return []
      let thisData = this.thisData
      return thisData.filter(item => {
        return item.name.indexOf(kw) !== -1
      })
    }
  },
  methods: {
    isChecked (item) {
      return item.id === this.thisChecked.id
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
@import 'style/extend/_layout.scss';

.peco-search-bar {
  height: 56px;
  padding: 8px 12px;
  position: fixed;
  background: #f6f6f6;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  &.focus {
    .peco-search {
      margin-right: 45px;
    }
    .peco-search-cancel {
      display: block;
    }
  }
}

.peco-search-result {
  position: fixed;
  z-index: 10;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  padding-bottom: 50px;
  background: #f6f6f6;
}

.peco-searchlist {
  padding-left: 15px;
  background: #fff;
  li {
    color: #666666;
    position: relative;
    height: 44px;
    font: 14px/44px PingFangSC-Regular,sans-serif;
    &+li {
      border-top: 1px solid #f6f6f6;
    }
    .peco-icon {
      position: absolute;
      right: 15px;
      top: 10px;
    }
    &.has-avatar {
      height: 80px;
      padding-top: 10px;
      &>div {
        display: flex;
      }
      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
      p {
        flex: 1;
        padding: 0 54px 0 10px;
      }
      .peco-icon {
        top: 28px;
      }
    }
    .peco-icon-checked {
      display: none;
    }
    &.checked {
      .peco-icon-uncheck {
        display: none;
      }
      .peco-icon-checked {
        display: block;
      }
    }
  }
}

.peco-search {
  background: #FFFFFF;
  border: 1px solid #F3F3F3;
  border-radius: 20px;
  height: 40px;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
  transition: margin .5s;
}

.peco-search-cancel {
  position: absolute;
  right: 12px;
  top: 18px;
  font: 15px/20px PingFangSC-Regular,sans-serif;
  color: $color-primary;
  transition: transform .5s;
  display: none;
}

.peco-search-icon {
  position: absolute;
  left: 14px;
  top: 11px;
  @include size(16px);
}

.peco-clear-icon {
  position: absolute;
  right: 15px;
  top: 10px;
  width: 16px;
  height: 16px;
}

.peco-search-input {
  box-sizing: border-box;
  width: 100%;
  padding-left: 23px;
  padding-right: 18px;
  border: 0;
  float: left;
  height: 20px;
  color: #666;
  font: 14px/20px PingFangSC-Regular,sans-serif;
  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: #999;
  }
  &:-moz-placeholder {
    color: #999;
  }
  &::-moz-placeholder {
    color: #999;
  }
  &:-ms-input-placeholder {
    color: #999;
  }
}

.peco-search-empty {
  width: 70%;
  margin: 40px auto 0;
}
</style>
