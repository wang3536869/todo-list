<script setup lang="ts">
const today = new Intl.DateTimeFormat('zh-CN', {
  month: 'long', day: 'numeric', weekday: 'long',
}).format(new Date())
</script>

<template>
  <header class="page-header">
    <div>
      <p class="eyebrow">{{ today }}</p>
      <h1 id="page-title">把今天，安排妥当<span class="title-period">.</span></h1>
      <p class="page-subtitle">记下要做的事，然后一件一件完成。</p>
    </div>
    <div class="header-decoration" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="48" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 7" /><circle cx="60" cy="60" r="33" fill="currentColor" fill-opacity=".1" /><path d="m43 60 12 12 24-26" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </div>
  </header>
</template>
