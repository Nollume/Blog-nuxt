<template>
  <div class="search-container">
    <div class="search-relative">
      <label class="input-label" for="name"><IconsSearch /></label>
      <input id="name" v-model="search" type="text" placeholder="Search by User" @input="searchImages">
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ setSearch: string}>()
const emit = defineEmits<{(e: 'sendSearchResut', value: string) : void}>()

const search = ref<string>('')
const debounceTimer = ref< ReturnType<typeof setTimeout>>()

const searchImages = () => {
  clearTimeout(debounceTimer.value)
  debounceTimer.value = setTimeout(() => {
    emit('sendSearchResut', search.value)
  }, 400)
}

onMounted(() => {
  search.value = props.setSearch
})
</script>

<style scoped lang="scss">
.search-container{
 display: flex;
 justify-content: flex-end;

 margin-bottom: 2rem ;
}
.search-relative{
  position: relative;
}

input{
  width: 20rem;
  padding-block: 0.25rem;
  padding-right: 0.5rem;
  padding-left: 2.25rem;

  border: 1px solid rgba($text-color, 0.2);
  border-radius: 0.125rem;
  background-color: $bg-color;

  outline: none;
}
label{
  position: absolute;
  top: 50%;
  left: 0;

  transform: translateY(-50%);
  border-right: 1px solid rgba($text-color, 0.2);

  padding-inline: 0.25rem ;

}
@media (max-width: 64rem) {
  .search-container{
    justify-content: center;
  }
  .search-relative{
    width: 80%;
  }
  input{
    width: 100%;
  }
}
@media (max-width: 48rem) {
  .search-relative{
    width: 100%;
  }
}
</style>
