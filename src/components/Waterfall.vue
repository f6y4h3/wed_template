<template>
  <div class="fs-virtual-waterfall-container">
    <div class="fs-virtual-waterfall-list">
      <div class="fs-virtual-waterfall-item">
        <slot name="item"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.fs-virtual-waterfall {
  &-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  &-list {
    position: relative;
    width: 100%;
  }

  &-item {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
}
</style>