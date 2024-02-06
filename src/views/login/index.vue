<template>
  <div class="login_content">
    <div class="login_content-content">
      <div class="login_content-content--left">
        <p>登录</p>
      </div>
      <div class="login_content-content--right">
        <el-form label-suffix=":">
          <el-form-item label="账号">
            <el-input v-model.trim="registerQuery.account"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model.trim="registerQuery.password" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="loginRequst">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="toRegister">注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="getUser">User</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
// import { setToken } from '@/utils/auth'
// import router from "@/router";
import { useUserStore } from "@/stores/user"
import api from '@/api';
// const loginQuery = reactive({
//   account:"",
//   password:""
// })
const { login } = useUserStore()
const registerQuery = reactive({
  account: 'xiaoluo',
  password: '123456',
  sex: 1,
  name: 'xiaoluo'
})

const loginRequst = () => {
  login(registerQuery)
  // api.userLogin(registerQuery).then((res: any) => {
  //   setToken(res.data.access_token)
  //   router.replace({ path: '/' })
  // })
}

const toRegister = () => {
  api.userRegister(registerQuery).then((res: any) => {
    console.log(res, '注册结果');
  })

}
const getUser = () => {
  api.getUser().then((res: any) => {
    console.log(res, '用户信息');
  })
}
</script>
<style lang="scss" scoped>
.login_content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: #fff;
    background: url(../../assets/img/bg.jpg) no-repeat;
    background-size: 100% 100%;
    filter: blur(5px);
    z-index: -1;
  }

  box-shadow:inset 0px 0px 5px 1px #000;
  overflow: hidden;

  &-content {
    display: flex;
    width: 100%;
    height: 100%;

    &--left {
      flex: 2;
      display: flex;
      align-items: center;
    }

    &--right {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
}

:deep(.el-form-item__label) {
  color: #e9e0e0;
}
</style>