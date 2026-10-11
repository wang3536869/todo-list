<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import type { Todo } from '../types/todo'

defineProps<{ todos: Todo[] }>()
const emit = defineEmits<{
  toggle: [id: string]
  edit: [id: string, text: string]
  delete: [id: string]
}>()
</script>

<template>
  <div class="list-heading">
    <h2 id="todo-list-title">我的待办 <span>{{ todos.length }}</span></h2>
    <span class="list-heading-hint">{{ todos.length ? '从这里开始，逐个完成' : '你的清单正等着第一项任务' }}</span>
  </div>
  <ul v-if="todos.length" class="todo-list" aria-labelledby="todo-list-title">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="emit('toggle', todo.id)"
      @edit="(text) => emit('edit', todo.id, text)"
      @delete="emit('delete', todo.id)"
    />
  </ul>
  <div v-else class="empty-state">
    <div class="empty-illustration" aria-hidden="true">
      <svg viewBox="0 0 96 96" fill="none"><rect x="23" y="17" width="50" height="64" rx="8" fill="white" stroke="currentColor" stroke-width="2" /><path d="M35 35h26M35 47h26M35 59h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" /><circle cx="70" cy="68" r="14" fill="#6558E8" /><path d="M70 62v12M64 68h12" stroke="white" stroke-width="2.5" stroke-linecap="round" /></svg>
    </div>
    <h3>清单还是空的</h3>
    <p>添加一项待办，让今天有个好开始。</p>
  </div>
</template>
