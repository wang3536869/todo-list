<script setup lang="ts">
defineEmits<{ click: [] }>()
</script>

<template>
  <button class="icon-button delete-button" type="button" title="删除待办" aria-label="删除待办" @click="$emit('click')">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4.5 7h15M9 7V4.5h6V7m-8.5 0 .8 12h9.4l.8-12M10 10.5v5M14 10.5v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </button>
</template>
