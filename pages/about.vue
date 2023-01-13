<template>
  <article class="about">
    <div class="title-wrapper">
      <h2>This is an about page</h2>
    </div>
    <div class="content-container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, numquam
        libero omnis deserunt debitis itaque consequuntur quam voluptates
        possimus commodi tempora sapiente quas, earum maiores ipsum cumque
        corrupti? Quas reprehenderit est repudiandae quasi blanditiis quisquam,
        consequatur in? Perferendis nostrum eligendi nisi cumque repudiandae
        voluptate aliquam placeat magni ratione hic repellendus adipisci quis
        accusamus sunt dicta, nemo sequi officia vel dolores! Pariatur, minima
        magni illum ipsum nobis consequuntur ipsa facere? Unde accusamus minima
        cupiditate, molestias rerum molestiae eligendi suscipit exercitationem
        eum corporis fugiat odio explicabo assumenda recusandae debitis ratione
        omnis voluptatem! Aperiam a praesentium possimus nemo dignissimos eos,
        temporibus fugiat autem qui maiores? Incidunt laborum ea odio,
        architecto dignissimos autem perferendis harum quod magni tempore ad
        quia, adipisci officia? Deserunt eaque temporibus, ducimus enim placeat
        omnis.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, numquam
        libero omnis deserunt debitis itaque consequuntur quam voluptates
        possimus commodi tempora sapiente quas, earum maiores ipsum cumque
        corrupti? Quas reprehenderit est repudiandae quasi blanditiis quisquam,
        consequatur in? Perferendis nostrum eligendi nisi cumque repudiandae
        voluptate aliquam placeat magni ratione hic repellendus adipisci quis
        accusamus sunt dicta, nemo sequi officia vel dolores! Pariatur, minima
        magni illum ipsum nobis consequuntur ipsa facere? Unde accusamus minima
        cupiditate, molestias rerum molestiae eligendi suscipit exercitationem
        eum corporis fugiat odio explicabo assumenda recusandae debitis ratione
        omnis voluptatem! Aperiam a praesentium possimus nemo dignissimos eos,
        temporibus fugiat autem qui maiores? Incidunt laborum ea odio,
        architecto dignissimos autem perferendis harum quod magni tempore ad
        quia, adipisci officia? Deserunt eaque temporibus, ducimus enim placeat
        omnis.
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.title-wrapper {
  @extend %title;
}
h2{
  @extend %headlineSecondary;
}
.about {
  margin-bottom: 4.25rem;
}
.content-container {
  width: 40%;
  margin-inline: auto;
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
    h2 {
      margin-left: 0;
    }
  }
}
@media (max-width: 48rem) {
  .content-container {
    width: 75%;
  }
}
@media (max-width: 40rem) {
  .content-container {
    width: 85%;
  }
}
</style>
