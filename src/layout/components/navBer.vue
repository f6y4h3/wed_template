<template>
    <div class="container">
        <el-card class="box-card">
            <!-- <el-icon></el-icon> -->
            <div class="nav">
                <div class="icon" @click="handleChange">
                    <el-icon size="20" v-show="!global.shrinkVal">
                        <Fold />
                    </el-icon>
                    <el-icon size="20" v-show="global.shrinkVal">
                        <Expand />
                    </el-icon>
                </div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="(item, index) of list" :key="index" :to="item.path">{{ item.name
                    }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalStore } from '@/stores/global'
const global = useGlobalStore()
const route = useRoute();
const handleChange = () => {
    global.changeShrink()
}
const list = computed(() => {
    let result: any[] = route.matched.filter(item => {
        return item.path != '/index'
    })
    return result
})
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;

    .nav {
        display: flex;
        align-items: center;

        .icon {
            display: flex;
            align-items: center;
            margin-right: 20px;

            &:hover {
                cursor: pointer;
            }
        }
    }

    // background-color: antiquewhite;
}</style>