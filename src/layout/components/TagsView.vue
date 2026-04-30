<script setup lang="ts">

</script>

<template>
    <main>
        <div class="card">
            <router-view />
        </div>
    </main>
</template>

<style scoped lang="less">
main {
    height: calc(100vh - 50px);
    overflow: auto;
    padding: 10px;

    .card {
        width: 100%;
        min-height: 100%;
        border-radius: 4px;
        border: 1px solid #ebeef5;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
    }
}
</style>