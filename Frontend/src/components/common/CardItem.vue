<template>
  <div class="item__card" @click="$router.push({ path: 'item/' + id })">
    <div class="user__info">
      <img v-bind:src="user.img" class="user__img" />
      <h6 class="user__name">{{ user.username }}</h6>
    </div>
    <div>
      <img class="item__img" :src="img[0]" />
    </div>
    <div>
      <div class="card__price">{{ price }}</div>
      <div class="text-muted">{{ size }} / {{ width }} / {{ height }}</div>
      <div class="card__brand">{{ brand }}</div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  props: ["id", "img", "price", "size", "height", "width", "brand"],
  computed: {
    user() {
      return this.$store.getters["shop/getUserById"](this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.item__card {
  margin: 10px;
  display: flex;
  flex-direction: column;
  // height: 200px;
  width: 190px;
  margin-top: 2rem;
  background-color: $white;
  // width: 100%;
  // margin: 10px;
  // grid-template-rows: 7fr 2fr;
  cursor: pointer;

  .user__info {
    display: flex;
    align-content: center;
    padding: 7px;
    box-sizing: border-box;
    .user__img {
      border-radius: 100%;
      margin-right: 5px;
      height: 20px;
      width: 20px;
    }
    .user__name {
      display: flex;
      align-items: center;
      color: lightgrey;
      margin: unset;
    }
  }
  .item__img {
    object-fit: cover;
    min-height: 280px;
    height: 100%;
    width: 100%;
  }
  &__price {
    font-weight: bold;
    font-size: 1.17rem;
    &:after {
      content: " €";
    }
  }
  .price + * {
    font-style: italic;
  }
  &__brand {
    font-weight: bold;
  }
  .card__price {
    font-weight: 600;
  }
}
</style>
