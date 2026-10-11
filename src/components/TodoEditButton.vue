<script setup lang="ts">
withDefaults(defineProps<{ isEditing?: boolean }>(), { isEditing: false })
defineEmits<{ click: [] }>()
</script>

<template>
  <button v-if="isEditing" class="save-button" type="button" aria-label="保存修改" @click="$emit('click')">保存</button>
  <button v-else class="icon-button edit-button" type="button" title="编辑待办" aria-label="编辑待办" @click="$emit('click')">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m14.5 5.5 4 4M4.5 19.5l4.4-.8L19 8.6a2.12 2.12 0 0 0-3-3L5.9 15.7l-1.4 3.8Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </button>
</template>
