<template>
  <div class="image-container">
    <img
      class="img"
      :class="{'img-filter': filter }"
      loading="lazy"
      :srcset="`${small} 480w,
                ${regular} 1024w,`"
      :sizes="`(max-width: 30rem) 30rem,
                  (max-width: 40rem) 40rem,
                  (max-width: 64rem) 64rem`"
      :src="regular"
      :alt="altDesc ? altDesc : 'image desc'"
    >
  </div>
</template>

<script setup lang="ts">
interface imgInfo {
    small: string
    regular : string
    altDesc: string | null
    filter?: boolean
}
defineProps<imgInfo>()
</script>

<style>
.img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.img-filter {
    filter: contrast(85%) brightness(60%);
}
</style>
