<template>
  <div class="info">
    <p class="headline">
      lifestyle
    </p>
    <h2>Organize Your Life With 10</h2>
    <h3>Simple rule</h3>
    <NuxtLink :to="`/blog/${id}`">
      Read More
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{id: string}>()
</script>

<style scoped lang="scss">
.info {
    width: 100%;
    margin-bottom: 3rem;

    color: $bg-color;

    display: flex;
    flex-direction: column;
    align-items: center;
}
.headline {
    text-transform: uppercase;
    font-weight: 100;
    margin: 0;

    margin-bottom: 1rem;
    font-size: 0.875rem;
}
h2,
h3 {
    font-weight: normal;
    font-size: clamp(1.25rem, 2vw, 2rem);

    line-height: clamp(1.35rem, 2vw, 2.25rem);
    letter-spacing: -0.5px;

    margin: 0;
}

a {
    @extend %buttons;

    border: solid 1px $bg-color;
    margin-top: 1.55rem;
    margin-bottom: 0.75rem;

    color: $bg-color;
}

a::after {
    @extend %hoverPseudoElEffect;

    opacity: 0.5;
    inset: 0;
    z-index: -1;
}

a:is(:hover, :active)::after {
    transform: scaleX(100%);
}

@media (max-width: 80rem) {
  .info {
    margin-bottom: 2rem;
  }
}
</style>
