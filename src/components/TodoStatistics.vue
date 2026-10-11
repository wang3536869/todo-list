<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ total: number; completed: number }>()
const remaining = computed(() => props.total - props.completed)
const percentage = computed(() => (props.total ? Math.round((props.completed / props.total) * 100) : 0))
</script>

<template>
  <div class="statistics" aria-live="polite">
    <div class="statistics-copy">
      <span><strong>{{ remaining }}</strong> 项待完成</span>
      <span class="statistics-separator" aria-hidden="true">·</span>
      <span>已完成 {{ completed }} 项</span>
    </div>
    <div class="progress-track" role="progressbar" :aria-valuenow="completed" :aria-valuemin="0" :aria-valuemax="total" :aria-label="`已完成 ${completed} 项，共 ${total} 项`">
      <span :style="{ width: `${percentage}%` }"></span>
    </div>
  </div>
</template>
