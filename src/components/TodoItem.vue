<script setup lang="ts">
import { nextTick, ref } from 'vue'
import TodoDeleteButton from './TodoDeleteButton.vue'
import TodoEditButton from './TodoEditButton.vue'
import type { Todo } from '../types/todo'

const props = defineProps<{ todo: Todo }>()
const emit = defineEmits<{
  toggle: []
  edit: [text: string]
  delete: []
}>()

const isEditing = ref(false)
const draftText = ref('')
const editInput = ref<HTMLInputElement | null>(null)

async function startEdit() {
  draftText.value = props.todo.text
  isEditing.value = true
  await nextTick()
  editInput.value?.focus()
  editInput.value?.select()
}

function saveEdit() {
  const text = draftText.value.trim()
  if (!text) {
    editInput.value?.focus()
    return
  }
  if (text !== props.todo.text) {
    emit('edit', text)
  }
  isEditing.value = false
}

function cancelEdit() {
  isEditing.value = false
  draftText.value = ''
}
</script>

<template>
  <li class="todo-item" :class="{ 'todo-item--completed': todo.completed }">
    <template v-if="isEditing">
      <div class="edit-row">
        <label class="sr-only" :for="`edit-${todo.id}`">编辑待办事项</label>
        <input :id="`edit-${todo.id}`" ref="editInput" v-model="draftText" class="edit-input" type="text" maxlength="200" @keydown.enter.prevent="saveEdit" @keydown.esc="cancelEdit" />
        <TodoEditButton :is-editing="true" @click="saveEdit" />
        <button class="cancel-button" type="button" @click="cancelEdit">取消</button>
      </div>
    </template>
    <template v-else>
      <label class="todo-check-label">
        <input class="todo-checkbox" type="checkbox" :checked="todo.completed" :aria-label="`${todo.completed ? '标记为未完成' : '标记为已完成'}：${todo.text}`" @change="emit('toggle')" />
        <span class="custom-checkbox" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
        <span class="todo-text">{{ todo.text }}</span>
      </label>
      <div class="item-actions">
        <TodoEditButton @click="startEdit" />
        <TodoDeleteButton @click="emit('delete')" />
      </div>
    </template>
  </li>
</template>
