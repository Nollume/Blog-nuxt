<template>
  <div class="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  max-width: 120rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 0 auto;
}

.pageAnimate-enter-active,
.pageAnimate-leave-active {
  transition: all 0.4s;
}
.pageAnimate-enter-from,
.pageAnimate-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
