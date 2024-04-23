<template>
  <div class="login_content">
    <el-card class="card_box">
      <div class="box">
        <div class="box_left"></div>
        <div class="box_right" body-class="box_right">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleChange">
            <el-tab-pane label="login" name="1">
              <el-form label-suffix=":" label-width="80px">
                <el-form-item label="账号">
                  <el-input v-model.trim="registerQuery.account"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model.trim="registerQuery.password" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="loginRequst" type="primary">登录</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="register" name="2">
              <el-form label-suffix=":" label-width="80px">
                <el-form-item label="账号">
                  <el-input v-model.trim="registerQuery.account"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input v-model.trim="registerQuery.password" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                  <el-input v-model.trim="registerQuery.password" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button @click="toRegister" type="primary">注册</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useUserStore } from "@/stores/user"
import api from '@/api';
const { login } = useUserStore()
const registerQuery = reactive({
  account: 'xiaoluo',
  password: '123456',
  sex: 1,
  name: 'xiaoluo'
})
const activeName = ref('1')

const loginRequst = () => {
  login(registerQuery)
}
const handleChange = () => {
}
const toRegister = () => {
  api.userRegister(registerQuery).then((res: any) => {
    console.log(res, '注册结果');
  })
}
</script>
<style lang="scss" scoped>
.login_content {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../../assets/img/login_left.png');
  background-size: cover;
}

.card_box {
  width: 50vw;
  height: 50vh;
  // border-radius: 50px 20px 50px 4px;
}

.box {
  height: 100%;
  display: flex;
  background-image: url('../../assets/img/login_left.png');
  background-size: cover;
  // border-radius: 30px 20px 30px 4px;

  &_left {
    flex: 1;
  }

  &_right {
    flex: 1;
    padding: 30px;
    background-color: #fff;
    border-radius: 50px 0px 0px 50px;
    // box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, .2);
  }
}

:deep(.el-card__body) {
  width: 100%;
  height: 100%;
}
</style>