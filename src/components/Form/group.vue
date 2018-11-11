<template lang="pug">
.peco-form-group
  slot
</template>

<style lang="scss">
.peco-form-group {
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  & + & {
    margin-top: 3px;
  }
}
</style>
