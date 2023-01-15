<template>
  <div class="pagination-wrapper">
    <button
      class="pagination-button back"
      :disabled="paginationPage === 1"
      :class="{'disable' : paginationPage === 1}"
      @click="goBack"
    >
      <IconsPaginationArrow class="arrow" />
    </button>
    <button
      v-for="page in amountOfPage"
      :key="page"
      class="pagination-button"
      :class="{'active': page === paginationPage }"
      @click.prevent="changePage($event, page)"
    >
      {{ page }}
    </button>
    <button
      class="pagination-button forward"
      :disabled="paginationPage === amountOfPage"
      :class="{'disable' : paginationPage === amountOfPage}"
      @click="goForward"
    >
      <IconsPaginationArrow class="arrow arrow-forward" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{paginationPage: number}>()
const emit = defineEmits<{(e: 'sendPageNumber', value : number): void}>()

const amountOfPage = ref<number>(5)
const currentPage = ref<number>(1)

const router = useRouter()

const addQuery = (val : number) : void => {
  router.push({
    query: {
      page: val.toString()
    }
  })
}
const { goToTop } = useToTop()

const scrollOnTopContainer = (e : MouseEvent) => {
  const target = e.target as HTMLElement
  const container = target.closest('section')

  goToTop(container!.offsetTop)
}

const changePage = (e : MouseEvent, page : number) : void => {
  currentPage.value = page
  emit('sendPageNumber', currentPage.value)
  addQuery(currentPage.value)
  scrollOnTopContainer(e)
}
const goForward = (e : MouseEvent) : void => {
  if (props.paginationPage !== amountOfPage.value) {
    currentPage.value = props.paginationPage
    emit('sendPageNumber', currentPage.value + 1)
    addQuery(currentPage.value + 1)
    scrollOnTopContainer(e)
  }
}
const goBack = (e : MouseEvent) : void => {
  if (props.paginationPage !== 1) {
    currentPage.value = props.paginationPage
    emit('sendPageNumber', currentPage.value - 1)
    addQuery(currentPage.value - 1)
    scrollOnTopContainer(e)
  }
}

</script>

<style scoped lang="scss">
.pagination-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.pagination-button{
  width: 1.5rem;
  aspect-ratio: 1;
  appearance: none;

  background-color: $accent-color;
  color: $bg-color;
  border: 1px solid rgba($text-color, 0.2);

  transition: all 0.3 ease-in-out;

  text-decoration: none;
  display: grid;
  place-items: center;
}

.pagination-button:is(:hover,:active){
  background-color: lighten($accent-color, 15%);
}
.active{
  background-color: darken($accent-color, 15%)
}
.forward,
.back{
display: flex;
align-items: center;
justify-content: center;
}
.back{
  margin-right: 0.5rem;
}
.forward{
  margin-left: 0.5rem;
}

.arrow{
 scale: 1.5;
}
.arrow-forward{
  rotate: -180deg;
}
.disable{
  background-color: lighten($accent-color, 40%);
}
.disable:is(:hover,:active){
  background-color: lighten($accent-color, 40%);
}

</style>
