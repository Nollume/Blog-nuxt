<template>
  <nav :class="menu ? 'hiddenNav' : ''">
    <NuxtLink class="home-link" to="/" @click="closeNavigation">
      Home
    </NuxtLink>
    <NuxtLink to="/about" @click="closeNavigation">
      About
    </NuxtLink>
    <NuxtLink to="/blog" @click="closeNavigation">
      Blog
    </NuxtLink>
    <NuxtLink to="/contact" @click="closeNavigation">
      Contact
    </NuxtLink>
    <IconsClose class="close-menu" @click="closeNavigation" />
  </nav>
</template>

<script setup lang="ts">
defineProps<{ menu: boolean }>()
const emit = defineEmits<{(event: 'closeNav', value: boolean) : void}>()

const closeNavigation = () : void => emit('closeNav', true)

</script>

<style scoped lang="scss">
.router-link-exact-active::before {
    transform: scaleX(100%);
}
nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-right: 14%;
  text-transform: uppercase;
}
.close-menu {
    display: none;
}
a {
  color: $text-color;

  text-decoration: none;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;

  position: relative;

}
a::before {
  @extend %hoverPseudoElEffect;
  bottom: 0;
  left: 0;

  height: 0.125rem;
  width: 100%;
}
a:is(:hover, :active)::before {
  transform: scaleX(100%);
}
.home-link {
  padding-right: 1.25rem;

}
.home-link::after {
  content: "";

  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 0;
  height: 0;

  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid $text-color;
}

@media (max-width: 64rem) {
  nav {
    flex-direction: column;
    justify-content: center;

    position: fixed;
    inset: 0;
    z-index: 50;

    margin-right: 0;

    background-color: $bg-color;

    transition: all 0.3s ease-in-out;
  }
  .close-menu {
      display: inline-block;
      cursor: pointer;

      position: absolute;
      top: 1rem;
      right: 0;
      padding-inline: clamp(1rem, 2.5vw, 3rem);
    }
  .hiddenNav {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
