<template>
  <div>
    <img
      loading="lazy"
      class="img"
      :srcset="`https://ik.imagekit.io/nollume/tr:w-480/geran-de-klerk-WJkc3xZjSXw-unsplash_At_phX5wT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669043507954 480w,
                https://ik.imagekit.io/nollume/tr:w-640/geran-de-klerk-WJkc3xZjSXw-unsplash_At_phX5wT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669043507954 640w,
                https://ik.imagekit.io/nollume/tr:w-1024/geran-de-klerk-WJkc3xZjSXw-unsplash_At_phX5wT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669043507954 1024w,
                https://ik.imagekit.io/nollume/tr:w-1280/geran-de-klerk-WJkc3xZjSXw-unsplash_At_phX5wT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669043507954 1280w`"
      :sizes="`(max-width: 30rem) 30rem,
                (max-width: 40rem) 40rem,
                (max-width: 64rem) 64rem,
                (max-width: 80rem) 80rem`"
      src="https://ik.imagekit.io/nollume/tr:w-640/geran-de-klerk-WJkc3xZjSXw-unsplash_At_phX5wT.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669043507954"
      alt="some img"
    >
  </div>
</template>

<style scoped lang="scss">
div {
  aspect-ratio: 2/0.83;

  display: flex;
}
img {
  width: 100%;
  object-fit: cover;
}
</style>
