<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <div class="silder_ber">
          <SilderBer />
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

</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;

  .silder_ber {
    width: 100%;
    height: 100%;
    background-color: #545c64;
    overflow-y: scroll;

    /*滚动条里面轨道*/
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0);
      background-color: #545c64;
    }

    /*定义滚动条整体的样式*/
    &::-webkit-scrollbar {
      width: 6px;
      background-color: rgb(20, 19, 19);
    }

    /*滚动条的样式*/
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      height: 20px;
      background-color: #6b7075;
    //   background-image: -webkit-gradient(linear,
    //       left bottom,
    //       left top,
    //       color-stop(0.2, rgb(111, 159, 253)),
    //       color-stop(0.4, rgb(23, 133, 243)),
    //       color-stop(0.8, rgb(111, 159, 253)));
    }
  }
}
</style>