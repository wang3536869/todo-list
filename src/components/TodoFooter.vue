<script setup lang="ts">
import TodoClearButton from './TodoClearButton.vue'
import TodoStatistics from './TodoStatistics.vue'

defineProps<{ total: number; completed: number }>()
defineEmits<{ clearCompleted: [] }>()
</script>

<template>
  <footer class="todo-footer">
    <TodoStatistics :total="total" :completed="completed" />
    <TodoClearButton :disabled="completed === 0" @click="$emit('clearCompleted')" />
  </footer>
</template>
