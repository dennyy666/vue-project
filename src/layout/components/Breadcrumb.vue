<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import avatarImg from '@/assets/avatar.png'
const isCollapsed = ref(false)
const user = ref<{ username: string } | null>({ username: 'Admin' })
const toggle = () => {
    isCollapsed.value = !isCollapsed.value
}
const router = useRouter()
const route = useRoute()
const activeUrl = computed(() => route.path)
const openGithub = () => {
    window.open('https://github.com/dennyy666/manage-angular', '_blank')
}
const loginOut = async () => {
    try {
        await ElMessageBox.confirm('您确定要退出Angular admin', '提示', {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'warning',
        })
        user.value = null
        await router.push('/login')
        ElMessage.success('退出登录成功')
    } catch {
        // User cancelled logout.
    }
}

</script>

<template>
    <header>
        <div class="left">
            <button class="fold" type="button" @click="toggle">{{ isCollapsed ? '展开' : '折叠' }}</button>
            <span class="breadcrumb">{{ activeUrl }}</span>
        </div>
        <div v-if="user" class="right">
            <el-dropdown trigger="click">
                <div class="user-menu">
                    <img :src="avatarImg" alt="avatar" />
                    <span>{{ user.username }}</span>
                    <span class="menu-down-icon">▼</span>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="openGithub">github地址</el-dropdown-item>
                        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>

<style scoped lang="less">
header {
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .left {
        display: flex;
        align-items: center;
        gap: 8px;

        .fold {
            border: 1px solid #d9d9d9;
            background: #fff;
            height: 30px;
            border-radius: 4px;
            cursor: pointer;
        }

        .breadcrumb {
            color: #666;
            font-size: 13px;
        }
    }

    .right {
        display: flex;
        align-items: center;
        height: 100%;
        color: #001529;

        .user-menu {
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;

            img {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: inline-block;
            }

            .menu-down-icon {
                font-size: 12px;
                color: #666;
            }
        }
    }
}
</style>