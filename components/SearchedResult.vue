<template>
  <div>
    <div class="lists-wrapper">
      <BlogList :images="firstColumn" :list-class="'first-list'" />
      <BlogList :images="secondColumn" :list-class="'second-list'" />
      <BlogList :images="thirdColumn" :list-class="'third-list'" />
      <p v-if="!length" class="no-image">
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

const firstColumn = ref<ImagesData[]>([])
const secondColumn = ref<ImagesData[]>([])
const thirdColumn = ref<ImagesData[]>([])

const divisionImagesToColumns = () : void => {
  if (!length.value) {
    firstColumn.value.length = 0
    secondColumn.value.length = 0
    thirdColumn.value.length = 0
    return
  }
  firstColumn.value = props.searchImages!.slice(0, divide.value)
  secondColumn.value = props.searchImages!.slice(divide.value, divide.value * 2)
  thirdColumn.value = props.searchImages!.slice(divide.value * 2, divide.value * 2 + divide.value)

  if (remainder.value === 1) {
    firstColumn.value.push(props.searchImages![length.value - 1])
  }
  if (remainder.value === 2) {
    firstColumn.value.push(props.searchImages![length.value - 2])
    secondColumn.value.push(props.searchImages![length.value - 1])
  }
  if (window.matchMedia('(max-width: 64rem)').matches) {
    if (!thirdColumn.value.length) { return }
    const columnThreeLength : number = thirdColumn.value.length
    const columnThreeDivide : number = columnThreeLength / 2
    const columnThreeReminder : number = columnThreeLength % 2

    firstColumn.value = firstColumn.value.concat(thirdColumn.value.slice(0, columnThreeDivide))
    secondColumn.value = secondColumn.value.concat(thirdColumn.value.slice(columnThreeDivide, columnThreeDivide * 2))
    if (columnThreeReminder === 1) {
      secondColumn.value.push(thirdColumn.value[columnThreeLength - 1])
    }
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
.no-image{
 text-align: center;
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
