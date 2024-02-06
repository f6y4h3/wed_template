<template>
  <div>
    <el-card>
      <!-- <img :src="urlImg" alt=""> -->
      <el-button @click="toLogin">登录</el-button>
      <el-button @click="getCats">猫</el-button>
      <el-upload class="avatar-uploader" action="" :show-file-list="false" :http-request="customUpload">
        <template #trigger>
          <el-button type="primary">select file</el-button>
        </template>
      </el-upload>
      <el-button @click="uploadImg">上传</el-button>
      <el-button @click="getUser">User</el-button>
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
import { ref } from 'vue';
// import { ajaxUpload } from 'element-plus/es/components/upload/src/ajax.mjs';
const toLogin = () => {
  router.push({ path: 'login' })
}
// const imageUrl = ref('')
const imgData = ref('')
const getCats = () => {
  api.getCats({ msg: 'xiaomao' }).then((res: any) => {
    console.log(res);
  })
}
const customUpload = (e: any) => {
  imgData.value = e.file
}

const uploadImg = () => {
  // ajaxUpload()
  // console.log(imgData.value);
  const formData = new FormData()
  formData.append('file', imgData.value)
  // console.log(formData);

  api.uploadImg(formData).then((res: any) => {
    console.log(res);
  })
}
const getUser = () => {
  api.getUser().then((res: any) => {
    console.log(res, '用户信息');
  })
}
</script>
<style lang="scss" scoped></style>