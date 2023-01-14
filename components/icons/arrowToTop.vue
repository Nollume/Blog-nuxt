<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="8" y2="12" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="16" y1="12" x2="12" y2="8" />
  </svg>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.icon {
  fill: currentColor;
  stroke: $text-color;
  width: 2rem;
  aspect-ratio: 1;
}
</style>
