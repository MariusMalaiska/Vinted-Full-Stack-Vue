<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__content__header">Atėjo metas atlaisvinti vietos spintoje?</div>
      <router-link class="btn btn-primary btn-lg" to="/about">About</router-link>
    </div>
    <div class="hero__bg">
      <img src="~@/assets/img/home/home-hero.jpg" alt />
      <div class="hero__bg__overlay"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-between;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__header {
      font-size: 3rem;
    }
    .btn {
      align-self: start;
      margin-top: 2rem;
      background-color: $green;
      color: $white;
    }
  }
  &__bg {
    height: 600px;
    width: 160%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__overlay {
      position: absolute;
      bottom: -1px;
      left: -1px;
      height: 100%;
      width: 100%;
      background-image: url(~@/assets/img/home/home-svg.svg);
      background-position: left;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>







