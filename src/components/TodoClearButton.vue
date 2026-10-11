<script setup lang="ts">
defineProps<{ disabled: boolean }>()
defineEmits<{ click: [] }>()
</script>

<template>
  <button class="clear-button" type="button" :disabled="disabled" @click="$emit('click')">
    清除已完成
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-4-4 4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </button>
</template>
