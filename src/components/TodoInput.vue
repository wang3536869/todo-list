<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{ add: [text: string] }>()
const text = ref('')

function submit() {
  const trimmed = text.value.trim()
  if (!trimmed) return
  emit('add', trimmed)
  text.value = ''
}
</script>

<template>
  <form class="add-form" @submit.prevent="submit">
    <label class="sr-only" for="new-todo">添加待办事项</label>
    <span class="add-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg></span>
    <input id="new-todo" v-model="text" type="text" placeholder="添加一项新待办..." autocomplete="off" maxlength="200" />
    <button class="add-button" type="submit" :disabled="!text.trim()">添加任务</button>
  </form>
</template>
