<template>
  <main>
    <p v-if="error" class="error">
      {{ error }}.
    </p>
    <div v-else>
      <section class="wrapper">
        <ul v-if="!pending">
          <li v-for="img in images" :key="img.id">
            <ImageContainer
              :small="img.urls.small"
              :regular="img.urls.regular"
              :alt-desc="img.alt_description"
              :filter="true"
            />
            <HomePost :id="img.id" />
          </li>
        </ul>
        <p v-else class="loading">
          Loading...
        </p>
      </section>
      <TheBlog />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ImagesData } from '@/typeScriptTypes/types'

const quantityOfImages = ref<number>(4)
const paginationPage = ref<number>(1)
const { data: images, error, pending } =
useFetch<ImagesData[]>(`/api/images?quantity=${quantityOfImages.value}&=paginationPage=${paginationPage.value}`)

</script>

<style scoped lang="scss">
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;
}
.wrapper {
  margin-bottom: 5.65rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

}
li {
  width: 100%;
  aspect-ratio: 6/7.17;
  position: relative;

  display: flex;
  align-items: flex-end;
}
.image-container {
  position: absolute;
  z-index: -1;
  inset: 0;
  display: flex;
}

@media (max-width: 64rem) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 40rem) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>
