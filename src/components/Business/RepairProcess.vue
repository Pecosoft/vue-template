<template lang="pug">
.peco-repair-process
  .peco-repair-btn.peco-repair-take(v-if='status==2' @click='process("take")') 受理
  template(v-else-if='status==3')
    .peco-repair-btn(@click='process("process")') 到场维修
    .peco-repair-btn(@click='process("reject2")') 驳回
  template(v-else-if='status==4')
    .peco-repair-btn(v-if='tag==1' @click='process("continue")') 继续维修
    .peco-repair-help(v-else @click='process("help2")') 我要协助
    .peco-repair-btn(@click='process("complete")') 结案
</template>

<script>
import repairAction from '@/flow/repair/action'
import model from 'mixins/model'

export default {
  mixins: [model],
  computed: {
    status () {
      return this.thisValue.status
    },
    tag () {
      return this.thisValue.tag || 0
    }
  },
  methods: {
    process (action) {
      if (action === 'process') {
        return this.$emit('process')
      }
      if (action === 'help1' || action === 'help2') {
        return this.$emit('help')
      }
      if (action === 'continue') {
        return this.$emit('continue')
      }
      repairAction(action, this.thisValue, { $router: this.$router, $store: this.$store, $vm: this })
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

.peco-repair-process {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  background-color: #fff;
  border-top: 1px solid #D1D1D4;
  font-size: 16px;
  display: flex;
}

.peco-repair-btn {
  flex: 1;
  text-align: center;
  height: 100%;
  line-height: 60px;
  background: $color-primary;
  color: #fff;
}

.peco-repair-help {
  text-align: center;
  height: 100%;
  line-height: 60px;
  width: 40%;
}
</style>
