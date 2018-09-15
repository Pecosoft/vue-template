<template lang="pug">
  .peco-profile-header
    .peco-profile-header_hd
      img.avatar(:src='thisAvatar')
    .peco-profile-header_bd
      h3 {{ thisName }}
      p {{ thisDesc }}
    .peco-profile-header_ft
      i.arrow-right
</template>

<script>
export default {
  name: 'ProfileHeader',
  props: ['name', 'desc', 'avatar'],
  data () {
    return {
      thisName: this.name || '派客软件',
      thisDesc: this.desc || 'http://www.pecosoft.cn/',
      thisAvatar: this.avatar || 'http://iph.href.lu/80x80?text=头像'
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
@import 'style/extend/_layout.scss';

.peco-profile-header {
  @extend %flex-row;
  background: $color-primary;
  color: $white;
  font-size: 2rem; // 20px PC端HTML最小字体为12px 1rem不等于10px而是12px 设置2rem 实际为20px 方便组件设置em
  height: 6em; // 20px * 6 = 120px
  align-items: center;
  .peco-profile-header_hd {
    text-align: center;
    width: 6em;
  }
  .peco-profile-header_bd {
    flex: 1;
  }
  .peco-profile-header_ft {
    text-align: center;
    width: 2em;
  }
  .avatar {
    @include size(80px);
  }
}
.arrow-right {
  display: inline-block;
  @include arrow-right(.5em, $white);
}
</style>
