<template>
  <ul :class="listClass">
    <li v-for="img in images" :key="img.id">
      <ImageContainer :small="img.urls.small" :regular="img.urls.regular" :alt-desc="img.alt_description" :user="img.user.name" />
      <BlogPost :id="img.id" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ImagesData } from '@/typeScriptTypes/types'
defineProps<{
    images: ImagesData[];
    listClass: string;
  }>()
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
}
.first-list {
  li:first-child {
      .image-container {
      aspect-ratio: 1/1.425;
      }
  }
  li:nth-child(2) {
      .image-container {
      aspect-ratio: 1/1.27;
      }
  }
  li:nth-child(3) {
      .image-container {
      aspect-ratio: 1/1.425;
      }
  }
  li:nth-child(4) {
      .image-container {
      aspect-ratio: 1/0.68;
      }
  }
  li:nth-child(5) {
      display: none;
      .image-container {
      aspect-ratio: 1/1.08;
      }
  }
  li:nth-child(6) {
      display: none;
      .image-container {
      aspect-ratio: 1/1.08;
      }
  }
}

.second-list {
  li:first-child {
      .image-container {
      aspect-ratio: 1/0.68;
      }
  }
  li:nth-child(2) {
      .image-container {
      aspect-ratio: 1/0.68;
      }
  }
  li:nth-child(3) {
      .image-container {
      aspect-ratio: 1/1.08;
      }
  }
  li:nth-child(4) {
      .info-container {
      display: none;
      }
      .image-container {
      aspect-ratio: 1/1.03;
      }
  }
  li:nth-child(5) {
      .image-container {
      aspect-ratio: 1/1.08;
      }
  }
  li:nth-child(6) {
      display: none;
      .image-container {
      aspect-ratio: 1/1.27;
      }
  }
  li:nth-child(7) {
      display: none;
      .image-container {
      aspect-ratio: 1/1.22;
      }
  }
}
.third-list {
  li:first-child {
      .image-container {
      aspect-ratio: 1/1.08;
      }
  }
  li:nth-child(2) {
      .image-container {
      aspect-ratio: 1/1.27;
      }
  }
  li:nth-child(3) {
      .image-container {
      aspect-ratio: 1/1.08;
      }
  }
  li:nth-child(4) {
      .image-container {
      aspect-ratio: 1/1.22;
      }
  }
}
li {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.75rem;

  width: 100%;
}
.image-container {
    width: 100%;
    overflow: hidden;
    display: flex;
}
@media (max-width: 64rem) {
  .first-list,
  .second-list {
      li:nth-child(5),
      li:nth-child(6),
      li:nth-child(7) {
        display: flex;
      }
  }
  .third-list {
      display: none;
  }
}
</style>
