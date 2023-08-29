<template>
  <div class="layout">
    <el-container >
      <el-aside width="200px">
        <SilderBer />
      </el-aside>
      <el-container>
        <el-header>
            <NavBer />
        </el-header>
        <el-main>
            <Content />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { NavBer, Content, SilderBer } from './components'

</script>
<style lang="scss" scoped>
.layout{
    width: 100%;
    height: 100%;
    display: flex;
}
</style>