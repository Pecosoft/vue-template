<template lang="pug">
.peco-form-row
  slot
</template>

<style lang="scss">
.peco-form-row {
  padding: 10px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
}
.peco-form-row + .peco-form-row {
  border-top: 1px solid #f5f5f5;
}
</style>
