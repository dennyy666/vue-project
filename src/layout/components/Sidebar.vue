<script setup lang="ts">
import { computed, ref } from 'vue'
import logoImg from '@/assets/mlogo.png'
import { useRoute, useRouter } from 'vue-router'

const isCollapsed = ref(false)
const router = useRouter()
const route = useRoute()
const activeUrl = computed(() => route.path)
const isHomeManageActive = computed(() => activeUrl.value.includes('/pages/homeManage'))
const isExampleManageActive = computed(() => activeUrl.value.includes('/pages/exampleManage'))
const baidu = () => {
  window.open('https://www.baidu.com', '_blank')
}
const jumpNotFound = () => {
  router.push('/pages/homeManage/notFound')
}
const openGithub = () => {
  window.open('https://github.com/dennyy666/manage-angular', '_blank')
}

</script>

<template>
    <aside :class="{ collapsed: isCollapsed }">
      <div class="head">
        <img :src="logoImg" alt="logo" />
        <span>Angular admin</span>
      </div>
      <div class="line"></div>
      <ul class="menu-list">
        <li class="menu-group">
          <div class="group-title" :class="{ open: isHomeManageActive }">首页配置</div>
          <ul class="group-items">
            <li :class="{ selected: isHomeManageActive }">
              <router-link to="/pages/homeManage/heroManage">英雄管理</router-link>
            </li>
            <li @click="baidu">百度一下啦</li>
            <li @click="jumpNotFound">404 页面</li>
          </ul>
        </li>
        <li class="menu-group">
          <div class="group-title" :class="{ open: isExampleManageActive }">示例页栏目</div>
          <ul class="group-items">
            <li :class="{ selected: isExampleManageActive }">
              <router-link to="/pages/exampleManage/exampleForm">表单验证</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-item">svg-图标</li>
        <li class="menu-item" @click="openGithub">项目地址</li>
      </ul>
    </aside>  
</template>

<style scoped lang="less">
  aside {
    flex-shrink: 0;
    width: 220px;
    background-color: #001529;
    overflow: hidden auto;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: 1;

    &.collapsed {
      width: 0;
      opacity: 0;
    }

    .head {
      display: flex;
      align-items: center;
      height: 50px;

      img {
        width: 50px;
        height: 50px;
        margin-left: 15px;
        margin-right: 10px;
      }

      span {
        font-size: 20px;
        color: #fff;
        white-space: nowrap;
      }
    }

    .line {
      border-top: 1px solid hsla(0, 0%, 100%, 0.05);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .menu-list {
      list-style: none;
      margin: 0;
      padding: 8px 0;
      color: #d5d5d5;

      li {
        cursor: pointer;
      }

      .menu-group {
        margin-bottom: 4px;
      }

      .group-title {
        padding: 10px 16px;
        color: #fff;
      }

      .group-title.open {
        background: rgba(255, 255, 255, 0.08);
      }

      .group-items {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          padding: 8px 24px;
        }

        li.selected {
          background: #1677ff;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      }

      .menu-item {
        padding: 10px 16px;
      }
    }
  }  
</style>