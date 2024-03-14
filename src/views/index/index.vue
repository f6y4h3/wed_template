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
      <!-- <el-select v-model="value" multiple clearable collapse-tags placeholder="Select" popper-class="custom-header"
        :max-collapse-tags="1" style="width: 240px">
        <template v-slot:header>
          <span>ALL</span>
        </template>
        <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value" />
        <template v-slot:footer>
          <div>
            11111
          </div>
        </template>
      </el-select> -->
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import myinput from '@/components/input.vue'
// import urlImg from '../../assets/logo.png'
defineOptions({
  name: 'index'
})
defineComponent({
  myinput
})
import router from '@/router';
import api from '@/api';
import { defineComponent, ref } from 'vue';

const toLogin = () => {
  router.push({ path: 'login' })
}
const imgData = ref('')
const getCats = () => {
  api.getCats({ msg: 'xiaomao' }).then((res: any) => {
    console.log(res, 'getCats');
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