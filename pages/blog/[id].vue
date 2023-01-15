<template>
  <section>
    <div v-if="error" class="error">
      {{ error }}.
      <button class="error-button" @click="clearError({ redirect: '/' })">
        Back Home
      </button>
    </div>
    <div v-else>
      <div class="title-wrapper">
        <h2>
          As a Designer,<br>
          I Refuse to Call People 'Users'
        </h2>
      </div>
      <div v-if="!pending" class="content-container">
        <ImageContainer
          :small="image?.urls.small!"
          :regular="image?.urls.regular!"
          :alt-desc="image?.alt_description!"
        />
        <article>
          <p>
            {{ text }}
          </p>
          <p>
            {{ text }}
          </p>
          <p class="italic-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            atque officiis culpa doloribus doloremque nisi ratione omnis tenetur
            accusantium aliquam veritatis exercitationem harum quae, possimus hic.
            Voluptate provident fuga quo sequi, distinctio cumque consequuntur
            pariatur, nam quasi molestiae explicabo.
          </p>
        </article>
        <BlogDetailPicture />
        <p>
          {{ text }}
        </p>
      </div>
      <p v-else class="loading">
        Loading...
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Image } from '@/typeScriptTypes/standaloneImage'

const route = useRoute()

const id : string | string[] = route.params.id

const { data: image, pending, error } = useFetch<Image>(`/api/image/${id}`)

const text =
  ref<string>('Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem vero, voluptates vel laudantium quibusdam officia rem quae asperiores deserunt quasi? Voluptatum corrupti eius minima itaque, temporibus atque mollitia. Quod provident amet, nihil recusandae assumenda nesciunt soluta consequatur natus itaque blanditiis corrupti! Mollitia eum dicta sequi consectetur sit adipisci ullam optio minima quia cupiditate beatae, id exercitationem, nemo atque ut aspernatur nulla autem quidem recusandae. Perspiciatis, error praesentium eveniet libero similique soluta odit ipsum minus totam! Iure omnis in eius sequi. Nostrum esse architecto cupiditate voluptatibus possimus commodi. Voluptatem quisquam, ea voluptatum quam, eveniet et nostrum enim explicabo, corporis sed tempora laborum? Distinctio, amet neque. Ipsam magni ex reiciendis ab illo omnis numquam saepe dolor, praesentium at incidunt totam id fugit neque. Voluptatibus eaque in consequatur reprehenderit quos dicta natus assumenda repellat quo. Officia excepturi alias, quam tempora ducimus necessitatibus.')

</script>

<style scoped lang="scss">
section {
  width: 100%;
  margin-bottom: 4.25rem;
}
.loading,
.error {
  padding-block: 2rem;
  text-align: center;
  font-size: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.error-button {
  @extend %buttons;
  margin-top: 1.5rem;
  margin-bottom: 4.25rem;
  &::after {
    @extend %hoverPseudoElEffect;
    opacity: 0.5;
    inset: 0;
    z-index: -1;
  }
  &:is(:hover, :active) {
  &::after {
    transform: scaleX(100%);
  }
  }
}
.title-wrapper {
  @extend %title;
}
h2{
  @extend %headlineSecondary;
}

br {
  display: none;
}

.content-container {
  width: 40%;
  margin: 0 auto;

  display: grid;
  gap: 1.5rem;
}

article {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.image-container {
  aspect-ratio: 2/0.83;
  display: flex;
}
img {
  width: 100%;
  object-fit: cover;
}

p {
    margin: 0;
    line-height: 1.38rem;
}
.italic-text{
  font-style: italic;
  font-weight: bold;

  padding: 1.3rem;
  background-color: $blog-accent-color;
}

@media (max-width: 80rem) {
  .content-container {
    width: 55%;
  }
}
@media (max-width: 64rem) {
  .content-container {
    width: 65%;
  }
  .title-wrapper {
    justify-content: center;
  }
  h2 {
    margin-left: 0;
  }
}
@media (max-width: 48rem) {
  .content-container {
    width: 75%;
  }
}
@media (max-width: 40rem) {
  br {
    display: inline;
  }
  .content-container {
    width: 85%;
  }
}
</style>
