<template>
  <section class="blog-container">
    <p v-if="error" class="error">
      {{ error }}
    </p>
    <div v-else>
      <p v-if="pending" class="loading">
        Loading...
      </p>
      <div v-else class="lists-wrapper">
        <BlogList :images="getImagesFirstColumn" :list-class="'first-list'" />
        <BlogList :images="getImagesSecondColumn" :list-class="'second-list'" />
        <BlogList :images="getImagesThirdColumn" :list-class="'third-list'" />
      </div>
      <!-- <div>
        <button>{{ paginationPage }}</button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { ImagesData } from '@/typeScriptTypes/types'

const quantityOfImages = ref<number>(13)
const paginationPage = ref<number>(1)

const { data: images, error, pending } =
    useFetch<ImagesData[]>(`/api/images?quantity=${quantityOfImages.value}&paginationPage=${paginationPage.value}`)

const getImagesFirstColumn = computed<ImagesData[]>(() => {
  return images.value!.slice(0, 4).concat(images.value!.slice(9, 11))
})

const getImagesSecondColumn = computed<ImagesData[]>(() => {
  return images.value!.slice(4, 9).concat(images.value!.slice(11, 13))
})

const getImagesThirdColumn = computed<ImagesData[]>(() => {
  return images.value!.slice(9, 13)
})

</script>

<style scoped lang="scss">
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;
}
.blog-container {
  margin: 0 auto;

  width: 58%;
  margin-bottom: 4.25rem;
}
.lists-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
}

@media (max-width: 113.75rem) {
  .blog-container {
    width: 65%;
  }
}
@media (max-width: 101.25rem) {
  .blog-container {
    width: 75%;
  }
  .lists-wrapper {
    column-gap: 1.5rem;
  }
}
@media (max-width: 64rem) {
  .lists-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 48rem) {
  .blog-container {
    width: 85%;
  }
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
