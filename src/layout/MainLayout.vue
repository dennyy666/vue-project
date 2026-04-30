<script setup lang="ts">
import Sidebar from '@/layout/components/Sidebar.vue'
import Breadcrumb from '@/layout/components/Breadcrumb.vue'
import TagsView from './components/TagsView.vue';
</script>

<template>
    <div class="pags-contain">
        <Sidebar />
        <div class="content-box">
            <Breadcrumb />
            <TagsView />
        </div>
    </div>

</template>

<style scoped lang="less">
.pags-contain {
    height: 100vh;
    display: flex;
    background-color: #eeeeee;

    .content-box {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-width: 0;
    }
}
</style>