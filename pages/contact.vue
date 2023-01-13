<template>
  <section>
    <div class="title-wrapper">
      <h2>Contact</h2>
    </div>
    <form>
      <div>
        <label class="input-label" for="name">Name</label>
        <input id="name" type="text">
      </div>
      <div>
        <label class="input-label" for="email">Email</label>
        <input id="email" type="email" name="email">
      </div>
      <div>
        <label class="input-label" for="msg">Message</label>
        <textarea id="msg" name="msg" />
      </div>
      <div class="terms-container">
        <label for="terms">Accept the terms</label>
        <input id="terms" type="checkbox" name="terms">
      </div>
      <button>Send</button>
    </form>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.title-wrapper {
  @extend %title;
}
h2{
  @extend %headlineSecondary;
}
form {
  width: 40%;
  margin-inline: auto;
  margin-bottom: 7.25rem;

  display: grid;
  gap: 0.5rem;

}
input:not(input[type="checkbox"]),
textarea {
  width: 100%;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;

  border: 1px solid rgba($text-color, 0.2);
  background-color: $bg-color;

  outline: none;
  resize: none;
}
label{
  cursor: pointer;
}
.input-label {
  display: inline-block;
  margin-bottom: 0.25rem;
}

.terms-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row-reverse;
  gap: 0.5rem;
}

button {
  @extend %buttons;

  width: 8rem;
  border: 1px solid rgba($text-color, 0.2);

}

button::after {
  @extend %hoverPseudoElEffect;
  inset: 0;
  opacity: 0.5;
  z-index: -1;
}

button:is(:hover, :active)::after {
  transform: scaleX(100%);
}

@media (max-width: 80rem) {
  form {
    width: 55%;
  }
}
@media (max-width: 64rem) {
  form {
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
  form {
    width: 75%;
  }
}
@media (max-width: 40rem) {
  form {
    width: 85%;
  }
}
</style>
