<template>
    <div class="container">
        <el-card class="box-card">
            <div class="nav_box">
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
                        <el-breadcrumb-item v-for="(item, index) of list" :key="index" :to="item.path">
                            {{ item.name }}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="user">
                    <el-dropdown trigger="hover" @command="handleCommand">
                        <div class="user_avatar">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        </div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item command="1">我的信息</el-dropdown-item>
                                <el-dropdown-item command="2">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
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
const handleCommand = (e: string | number | object) => {
    console.log(e,'e');

}
</script>
<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;

    .nav_box {
        display: flex;
        justify-content: space-between;

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

        .user {
            .user_avatar {
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

}
</style>