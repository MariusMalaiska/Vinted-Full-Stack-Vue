<template>
  <div class="menu__item">
    <button class="search__btn" @click="toggle">{{ title }}</button>
    <transition name="fade" appear>
      <div class="search__dropdown__modal" v-if="isOpen">
        <div class="select__item">
          <div v-for="(item, i) in items" :key="i" class="search__dropdown__categories">
            <img v-bind:src="item.svg" class="categorie__img" alt="..." />
            <a class="select__item__option" :href="item.link">
              {{
              item.title
              }}
            </a>
          </div>
        </div>
        <div class="select__catalog">
          <div v-for="( catalogItem, i) in catalog" :key="i" class="search__dropdown__catalog">
            <a class="select__catalog__option" :href="catalogItem.link">{{catalogItem.title}}</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "dropdown",
  props: ["title", "items", "open"],
  created() {
    console.log(this.catalog);
  },
  data() {
    return { isOpen: this.open };
  },
  // computed: {
  //   catalog() {
  //     return this.$store.getters.getCatalog;
  //   }
  // }
  computed: {
    ...mapGetters({
      catalog: "shop/getCatalog"
    })
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.$emit("opened", this.isOpen ? this.title : "");
    }
  }
};
</script>

<style lang="scss" scoped>
.search__btn {
  position: relative;
  margin-left: 20px;
  width: 110px;
  border: none;
  color: #a0a0a0;
  background-color: transparent;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  //   display: inline-block;
  font-size: 16px;
}

.search__btn select {
  display: none;
}
.search__dropdown__modal {
  position: absolute;
  display: flex;
  // flex-direction: column;
  text-align: left;
  width: max-content;
  box-sizing: border-box;
  padding: 5px;
  box-shadow: 2px 2px 5px #888888;
  background-color: #fff;
  //   background-color: gray;
  border-radius: 5px;
  width: 700px;
  top: 45px;

  .select__item {
    background-color: white;
    text-decoration: none;
    margin-top: 0px;
    width: min-content;
    margin-bottom: 20px;
    border-right: 1px solid #ececec;
    box-sizing: border-box;
    padding: 10px;

    .search__dropdown__categories {
      //   height: 100%;
      margin-top: 20px;

      width: 250px;
      .categorie__img {
        width: 30px;
        margin-right: 20px;
      }
      .select__item__option {
        font-size: 20px;
        font-weight: 500;
        color: #a0a0a0;
      }
    }
  }
  .select__catalog {
    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    width: 100%;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    // transform: translateX(100vw);
  }
}
</style>
