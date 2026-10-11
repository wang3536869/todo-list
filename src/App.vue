<script setup lang="ts">
import TodoBrandBar from './components/TodoBrandBar.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoIntro from './components/TodoIntro.vue'
import TodoList from './components/TodoList.vue'
import { useTodos } from './composables/useTodos'

const { todos, completedCount, addTodo, toggleTodo, editTodo, deleteTodo, clearCompleted } = useTodos()
</script>

<template>
  <main class="app-shell">
    <TodoBrandBar />
    <section class="page-content" aria-labelledby="page-title">
      <TodoIntro />
      <div class="todo-card">
        <TodoInput @add="addTodo" />
        <TodoList :todos="todos" @toggle="toggleTodo" @edit="editTodo" @delete="deleteTodo" />
        <TodoFooter :total="todos.length" :completed="completedCount" @clear-completed="clearCompleted" />
      </div>
      <p class="page-tip">小提示：按 Enter 快速添加，编辑时按 Esc 取消。</p>
    </section>
  </main>
</template>
