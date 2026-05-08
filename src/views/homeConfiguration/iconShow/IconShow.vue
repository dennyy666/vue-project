<script setup lang="ts">
import { ref, computed } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

type IconItem = { name: string; comp: any }

const search = ref('')
const iconList: IconItem[] = Object.keys(Icons)
	.sort()
	.map(name => ({ name, comp: (Icons as any)[name] }))

const filtered = computed(() => {
	if (!search.value) return iconList
	const term = search.value.toLowerCase()
	return iconList.filter(i => i.name.toLowerCase().includes(term))
})

const dialogVisible = ref(false)
const selected = ref<IconItem | null>(null)

function showIcon(item: IconItem) {
	selected.value = item
	dialogVisible.value = true
}

async function copyName(name: string) {
	try {
		if (navigator && 'clipboard' in navigator) {
			await navigator.clipboard.writeText(name)
		} else {
			const ta = document.createElement('textarea')
			ta.value = name
			document.body.appendChild(ta)
			ta.select()
			document.execCommand('copy')
			document.body.removeChild(ta)
		}
		ElMessage({ message: `已复制: ${name}`, type: 'success' })
	} catch (err) {
		ElMessage({ message: `复制失败`, type: 'error' })
	}
}
</script>

<template>
	<div class="icon-show-root">
		<div class="toolbar">
			<el-input v-model="search" placeholder="搜索图标名称" clearable style="max-width:420px">
				<template #prefix>
					<i class="el-icon-search" />
				</template>
			</el-input>
			<div class="count">共 {{ filtered.length }} 个图标</div>
		</div>

		<div class="grid">
			<div v-for="item in filtered" :key="item.name" class="card">
				<div class="preview" @click="showIcon(item)">
					<component :is="item.comp" class="icon" />
				</div>
				<div class="meta">
					<div class="name">{{ item.name }}</div>
					<el-button size="mini" @click="copyName(item.name)">复制名称</el-button>
				</div>
			</div>
		</div>

		<el-dialog v-model:visible="dialogVisible" width="360px" :close-on-click-modal="true">
			<template #title>
				<span>{{ selected?.name }}</span>
			</template>

			<div class="dialog-body" v-if="selected">
				<component :is="selected.comp" class="icon-large" />
				<div class="dialog-actions">
					<el-button type="primary" @click="copyName(selected.name)">复制名称</el-button>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<style scoped lang="less">
.icon-show-root {
	padding: 16px;
}

.toolbar {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 12px;
}

.count {
	color: #606266;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
	gap: 12px;
}

.card {
	background: #fff;
	border: 1px solid #ebeef5;
	border-radius: 6px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.preview {
	width: 56px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.icon {
	font-size: 28px;
	color: #409eff;
}

.meta {
	margin-top: 8px;
	display: flex;
	gap: 8px;
	align-items: center;
}

.name {
	font-size: 12px;
	color: #606266;
	word-break: break-all;
}

.dialog-body {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	padding: 18px 24px;
}

.icon-large {
	font-size: 96px;
	color: #409eff;
}

.dialog-actions {
	width: 100%;
	display: flex;
	justify-content: center;
}

</style>