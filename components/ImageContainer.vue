<template>
  <figure class="image-container">
    <img
      class="img"
      :class="{'img-filter': filter }"

      :srcset="`${small} 480w,
                ${regular} 1024w,`"
      :sizes="`(max-width: 30rem) 30rem,
                  (max-width: 40rem) 40rem,
                  (max-width: 64rem) 64rem`"
      :src="regular"
      :alt="altDesc ? altDesc : 'image desc'"
    >
    <figcaption v-if="user">
      {{ user }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
interface imgInfo {
    small: string
    regular : string
    altDesc: string | null
    filter?: boolean
    user?: string
}
defineProps<imgInfo>()
</script>

<style lang="scss">
figure{
  position: relative;
  margin: 0;
}
figcaption{
  position: absolute;
  inset:0;
  top: unset;

  padding-block: 0.15rem ;
  text-align: center;

  background-color: $text-color;
  color: $bg-color;
}
.img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.img-filter {
    filter: contrast(85%) brightness(60%);
}
</style>
