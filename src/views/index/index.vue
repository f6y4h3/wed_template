<template>
  <div>
    <el-card>
      <img :src="urlImg" alt="">
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import urlImg from '../../assets/logo.png'
defineOptions({
  name: 'index'
})
</script>
<style lang="scss" scoped></style>