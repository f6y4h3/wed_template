<template>
  <div>
    <el-card>
      <!-- <img :src="urlImg" alt=""> -->
      <el-button @click="toLogin">登录</el-button>
      <el-button @click="getCats">猫</el-button>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
// import urlImg from '../../assets/logo.png'
defineOptions({
  name: 'index'
})
import router from '@/router';
import api from '@/api';
const toLogin = () => {
  router.push({ path: 'login' })
}
const getCats = () => {
  api.getCats({msg:'xiaomao'}).then((res: any) => {
    console.log(res);

  })
}
</script>
<style lang="scss" scoped></style>