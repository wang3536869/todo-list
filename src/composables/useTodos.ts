import { computed, ref, watch } from 'vue'
import type { Todo } from '../types/todo'

const STORAGE_KEY = 'todo-list-items'

function loadTodos(): Todo[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return []

    const parsed: unknown = JSON.parse(saved)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(
      (item): item is Todo =>
        typeof item === 'object' && item !== null &&
        typeof item.id === 'string' && typeof item.text === 'string' &&
        typeof item.completed === 'boolean',
    )
  } catch {
    return []
  }
}

export function useTodos() {
  const todos = ref<Todo[]>(loadTodos())
  const completedCount = computed(() => todos.value.filter((todo) => todo.completed).length)

  watch(todos, (items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // 本地存储不可用时，当前页面仍可继续使用。
    }
  }, { deep: true })

  function addTodo(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    todos.value.unshift({
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
      text: trimmed,
      completed: false,
    })
  }

  function toggleTodo(id: string) {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    )
  }

  function editTodo(id: string, text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, text: trimmed } : todo,
    )
  }

  function deleteTodo(id: string) {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  function clearCompleted() {
    todos.value = todos.value.filter((todo) => !todo.completed)
  }

  return { todos, completedCount, addTodo, toggleTodo, editTodo, deleteTodo, clearCompleted }
}
