<template>
  <div>
    <div class="lists-wrapper">
      <BlogList :images="getImagesFirstColumn" :list-class="'first-list'" />
      <BlogList :images="getImagesSecondColumn" :list-class="'second-list'" />
      <BlogList :images="getImagesThirdColumn" :list-class="'third-list'" />
      <p v-if="!length">
        Could not find the Image.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ImagesData } from '@/typeScriptTypes/types'
const props = defineProps<{searchImages: ImagesData[] | undefined, search : string}>()

const length = ref<number>(0)
const divide = ref<number>(0)
const remainder = ref<number>(0)

const getImagesFirstColumn = ref<ImagesData[]>([])
const getImagesSecondColumn = ref<ImagesData[]>([])
const getImagesThirdColumn = ref<ImagesData[]>([])

const divisionImagesToColumns = () : void => {
  if (!length.value) { return }
  getImagesFirstColumn.value = props.searchImages!.slice(0, divide.value)
  getImagesSecondColumn.value = props.searchImages!.slice(divide.value, divide.value * 2)
  getImagesThirdColumn.value = props.searchImages!.slice(divide.value * 2, divide.value * 2 + divide.value)

  if (remainder.value === 1) {
    getImagesFirstColumn.value.push(props.searchImages![length.value - 1])
  }
  if (remainder.value === 2) {
    getImagesFirstColumn.value.push(props.searchImages![length.value - 2])
    getImagesSecondColumn.value.push(props.searchImages![length.value - 1])
  }
}

watchEffect(() => {
  length.value = props.searchImages!.length
  divide.value = Math.floor(length.value / 3)
  remainder.value = length.value % 3
})
watch(length, () => {
  divisionImagesToColumns()
})
onMounted(() => {
  divisionImagesToColumns()
})

</script>

<style scoped lang="scss">

.lists-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
}
@media (max-width: 113.75rem) {

}
@media (max-width: 101.25rem) {

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
