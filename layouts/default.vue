<template>
  <div class="container">
    <header>
      <h1 @click="redirectHome">
        Logo
      </h1>
      <TheNavigation :menu="menu" @close-nav="menu = $event" />
      <IconsMenu class="menu-icon" @click="menu = false" />
    </header>
    <slot />
    <footer>&copy; 2022</footer>
  </div>
</template>

<script setup lang="ts">
const menu = ref<boolean>(true)

const router = useRouter()

const redirectHome = () : void => {
  router.push('/')
}

</script>

<style scoped lang="scss">
.container{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block: 1.37rem;
}
.menu-icon {
  display: none;
}
h1 {
  color: $accent-color;

  text-transform: uppercase;
  text-decoration: underline wavy;

  user-select: none;
  cursor: pointer;

  font-size: clamp(1.15rem, 2.5vw, 2rem);

  margin: 0;
  padding-block: 0.5rem;
  padding-right: 2rem;
  padding-left: clamp(1rem, 2.5vw, 3rem);
}
footer {
  width: 100%;
  height: 3rem;
  padding-inline: 2rem;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: $text-color;
  color: $bg-color;
}

@media (max-width: 64rem) {
  header {
      padding-block: 0.5rem;
  }
  .menu-icon {
      display: inline-block;
      cursor: pointer;

      padding-right: clamp(1rem, 2.5vw, 3rem);
  }
}
</style>
