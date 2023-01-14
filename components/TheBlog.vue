<template>
  <section class="blog-container">
    <p v-if="error" class="error">
      {{ error }}
    </p>
    <div v-else>
      <p v-if="pending" class="loading">
        Loading...
      </p>
      <div>
        <SearchInput :set-search="search" @send-search-resut="search = $event" />
        <div v-if="!searchImages" class="lists-wrapper">
          <BlogList :images="getImagesFirstColumn" :list-class="'first-list'" />
          <BlogList :images="getImagesSecondColumn" :list-class="'second-list'" />
          <BlogList :images="getImagesThirdColumn" :list-class="'third-list'" />
        </div>
        <SearchedResult v-else :search-images="searchImages" :search="search" />
      </div>
      <PagePagination
        v-if="!searchImages"
        :pagination-page="paginationPage"
        :refresh="refresh"
        @send-page-number="paginationPage = $event"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ImagesData } from '@/typeScriptTypes/types'
const quantityOfImages = ref<number>(13)
//
// Handle Pagination + Fetch Data
//
const paginationPage = ref<number>(1)

const { data: images, error, pending, refresh } = useLazyAsyncData<ImagesData[]>('images', () =>
  $fetch(`/api/images?quantity=${quantityOfImages.value}&paginationPage=${paginationPage.value}`))

watch(paginationPage, () => {
  refresh()
})

const { query } = useRoute()
onMounted(() => {
  if (query.page) {
    paginationPage.value = +query.page!
  }
})
//
// fill lists
//
const getImagesFirstColumn = computed<ImagesData[]>(() => {
  return images.value!.slice(0, 4).concat(images.value!.slice(9, 11))
})

const getImagesSecondColumn = computed<ImagesData[]>(() => {
  return images.value!.slice(4, 9).concat(images.value!.slice(11, 13))
})

const getImagesThirdColumn = computed<ImagesData[]>(() => {
  return images.value!.slice(9, 13)
})

//
// Handle Search
//
const search = ref<string>('')

const searchImages = computed<ImagesData[] | undefined>(() => {
  if (search.value) {
    return images.value?.filter(img =>
      img.user.name.toLowerCase().includes(search.value.toLowerCase()))
  }
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
