<template lang="pug">
  .peco-page
    slot
</template>

<script>
export default {
  name: 'Page'
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

//page
.peco-page, .page, .view {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

//page transition
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
}
.slide-enter {
  opacity: 0;
  transform: translate3d(70%, 0, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate3d(-70%, 0, 0);
}

.transition-reverse {
  .slide-enter {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }
  .slide-leave-active {
    opacity: 0;
    transform: translate3d(70%, 0, 0);
  }
}

// page content
.page-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.content-padded {
  margin: .5rem;
}
</style>
