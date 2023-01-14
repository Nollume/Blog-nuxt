<template>
  <div class="main-container">
    <NuxtLayout>
      <NuxtLoadingIndicator :height="2" color="#e00430" :duration="3000" :throttle="400" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.main-container{
  max-width: 120rem;
  min-height: 100vh;
  margin: 0 auto;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
