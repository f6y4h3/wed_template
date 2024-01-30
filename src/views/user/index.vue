<template>
    <div>
        <!-- <img src="../../assets/logo.svg" alt=""> -->
        <el-button @click="toLogin">
            登录
        </el-button>
    </div>
</template>
<script lang="ts" setup>
import router from '@/router';
defineOptions({
    name: "user"
})
const toLogin = () => {
    router.push({ path: '/login' })
}
</script>
<style lang="scss" scoped></style>