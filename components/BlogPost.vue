<template>
  <div class="info-container">
    <p class="headline">
      travel
    </p>
    <h3>charming evening field</h3>
    <p class="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magne aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <NuxtLink :to="`blog/${id}`">
      Read More
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{id: string}>()
</script>

<style scoped lang="scss">
.info-container {
  color: $text-color;
  width: 100%;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.headline {
  text-transform: uppercase;
  font-weight: 400;

  margin: 0;
  margin-bottom: 0.5rem;

  color: $text-color-lighten;
  text-align: center;
}
h3 {
  padding-bottom: 1.8rem;

  font-weight: bold;
  font-size: clamp(1.25rem, 2vw, 2rem);

  line-height: clamp(1.35rem, 2vw, 2.25rem);
  letter-spacing: -0.5px;

  text-transform: capitalize;
  margin: 0;
}
.paragraph {
  margin: 0;
  padding-top: 1.8rem;

  line-height: 1.35rem;

  color: $text-color-lighten;
  text-align: center;

  position: relative;
}
.paragraph::after {
  content: "";
  position: absolute;
  top: -0.0625rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: $text-color-lighten;

  width: 6rem;
  height: 0.125rem;
}
a {
  @extend %buttons;
  border: solid 1px $bg-color;
  color: $text-color-lighten;

  margin-top: 1rem;
  font-weight: bold;
}
a::after {
  @extend %hoverPseudoElEffect;

  width: 100%;
  height: 0.125rem;
  left: 0;
  bottom: 0;
}
a:is(:hover, :active)::after {
  transform: scaleX(100%);
}

@media (max-width: 64rem) {
  .info {
      margin-bottom: 2rem;
  }
}
</style>
