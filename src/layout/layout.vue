<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <div class="silder_ber">
          <SilderBer :router-data="router.routers.list" />
        </div>
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
import { useRoutersStore } from '@/stores/router'
const router = useRoutersStore()

</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;

  .silder_ber {
    width: 100%;
    height: 100%;
    background-color: aliceblue;

  }
}
</style>