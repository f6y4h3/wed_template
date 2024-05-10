<template>
    <div style="height: 100%;">
        <el-card class="card_box">
            <el-container style="height: 100%;">
                <!-- <el-header>Header</el-header> -->
                <el-aside class="msgbox">
                    <el-scrollbar>
                        <div class="msgItem" v-for="item in friendList" :key="item.id">
                            <div class="msgItem-left">
                                <div class="msgItem-left--avatar"></div>
                            </div>
                            <div class="msgItem-right">
                                <div class="msgItem-right--name">{{ item.name }}</div>
                                <div class="msgItem-right--msg">消息消息消息消息消息</div>
                            </div>
                        </div>
                    </el-scrollbar>
                </el-aside>
                <el-main>
                    <div class="msgcontent">
                        <div class="msgcontent-body" ref="scrollEl">
                            <div class="msgcontent-body--item" v-for="item in 20" :key="item">
                                <div class="avatar">{{ item }}</div>
                                <div class="info">
                                    <div class="info-name">name</div>
                                    <div class="info-msg">msg</div>
                                </div>
                            </div>
                        </div>
                        <div class="msgcontent-footer">
                            <el-input v-model="textarea" maxlength="30" style="width: 240px" placeholder="Please input"
                                show-word-limit type="textarea" />
                            <el-button type="primary" @click="submit">发</el-button>
                            <el-button type="primary" @click="lian">连</el-button>
                            <el-button type="primary" @click="duan">端</el-button>
                            <div style="width: 50px;display: inline-block;"></div>
                            <el-input v-model="searchText" style="width: 240px" placeholder="加好友" type="text" />
                            <el-button type="primary" @click="handleSearch">搜索</el-button>
                            <el-button type="primary" @click="handleAddFriend">加好友</el-button>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
defineOptions({
    name: "user"
})
import { ref, onMounted } from 'vue';
import { ElScrollbar } from 'element-plus'
import getInstance from '@/utils/websocket';
import ajax from '@/api'
import { ElMessage } from 'element-plus'
// const scrollbar = ref<InstanceType<typeof ElScrollbar>>();
// const scorllH = ref(0);
const scrollEl = ref()
const textarea = ref('');
const searchText = ref('');
const msgList = ref([])
const friendId = ref(0);
const friendList = ref([]);
// const socket = getInstance("ws://8.137.114.187:8080");
const socket = getInstance("ws://localhost:8080");

onMounted(() => {
    ajax.getFriends().then(res => {
        console.log(res, 'getFriends');
        friendList.value = res.list;
    })
    console.log(scrollEl.value.scrollHeight, 'scrollEl');

})

// socket.connect()
console.log(socket, 'socket');
socket.onMessage(({data})=>{
    console.log(data.content);
    
})

const submit = () => {
    // if(socket.)
    // console.log(socket.isConnect());
    if (!socket.isConnect()) {
        ElMessage({
            message: '连接超时，请重新连接',
            type: 'warning',
        })
        return
    }
    scrollEl.value.scrollTop = scrollEl.value.scrollHeight + 100
    socket.send(JSON.stringify({
        event: 'message',
        data: {
            to: 5,
            message: textarea.value,
            messageType: 2,
        }
    }));
    textarea.value = ''
}
const lian = () => {
    socket.connect()
}
const duan = () => {
    socket.close()
}
const handleSearch = () => {
    ajax.getSearchUser({ account: searchText.value }).then(res => {
        friendId.value = res.id
    })
}
const handleAddFriend = () => {
    ajax.handleAddFriend({ friendId: friendId.value }).then(res => {
        console.log(res);
    })
}
</script>
<style lang="scss" scoped>
// --el-main-padding: 0px;

.card_box {
    height: 100%;
}

.msgbox {
    border-radius: 10px;
    overflow: hidden;
    background-color: antiquewhite;
}

.msgItem {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    &-left {
        &--avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: aliceblue;
        }
    }

    &-right {
        color: #333;
        margin-left: 10px;

        &--name {
            font-weight: bold;
        }

        &--msg {
            font-size: 14px;
        }
    }
}

.msgcontent {
    width: 100%;
    height: 100%;
    position: relative !important;

    &-body {
        height: calc(100% - 100px);
        transition: all .5s;
        overflow-y: scroll;
        padding: 20px;
        background-color: #ebebeb;
        scroll-behavior: smooth;

        // 滚动条宽度
        &::-webkit-scrollbar {
            width: 6px;
        }

        // 滚动条轨道
        &::-webkit-scrollbar-track {
            background: rgb(239, 239, 239);
            border-radius: 2px;
        }

        // 小滑块
        &::-webkit-scrollbar-thumb {
            background: #40a0ff49;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #40a0ff;
        }

        &--item {
            height: auto;
            display: flex;
            align-items: center;

            .avatar {
                width: 35px;
                height: 35px;
                background-color: red;
                border-radius: 50%;
            }

            .info {
                margin-left: 5px;

                &-msg {
                    padding: 5px;
                    border-radius: 10px;
                    background-color: #fff;
                }

                &-name {
                    font-size: 14px;
                    font-weight: bold;
                }
            }

        }

        &--item:not(:nth-of-type(1)) {
            margin-top: 20px;
        }
    }

    &-footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-color: #eee;
    }
}

:deep(.el-card__body) {
    height: 100%;
}

:deep(.el-main) {
    padding: 0;
}
</style>