<template>
  <div>
    <p v-if="!searchImages?.length" class="images-count">
      Could not find the Image.
    </p>
    <p v-else class="images-count">
      ({{ searchImages?.length }}) Image<span v-if="searchImages?.length! > 1">s</span>
    </p>
  </div>
  <ul class="lists-wrapper">
    <li v-for="img in searchImages" :key="img.id">
      <ImageContainer :small="img.urls.small" :regular="img.urls.regular" :alt-desc="img.alt_description" :user="img.user.name" />
      <BlogPost :id="img.id" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ImagesData } from '@/typeScriptTypes/types'
defineProps<{searchImages: ImagesData[] | undefined}>()
</script>

<style scoped lang="scss">
.lists-wrapper {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(min(40%),1fr)) ;
  column-gap: 2rem;

  list-style: none;
  margin: 0;
  padding: 0;
}
li{
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
}
.images-count{
 text-align: center;
 margin-block: 1rem;
}
@media (max-width: 113.75rem) {

}
@media (max-width: 101.25rem) {

  .lists-wrapper {
    column-gap: 1.5rem;
  }
}
@media (max-width: 48rem) {

  .lists-wrapper {
    column-gap: 1rem;
  }

}
@media (max-width: 40rem) {
  .lists-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
