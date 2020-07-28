<template>
  <div class="menu__item">
    <button class="search__btn" @click="isOpen = !isOpen">
      {{ title }}
      <img class="arrow" src="~@/assets/img/home/arrow.png" alt />
    </button>
    <transition name="fade" appear>
      <div class="search__dropdown__modal" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="select-item">
          <router-link :to="item.to">{{ item.title }} ></router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return { isOpen: false };
  }
};
</script>

<style lang="scss" scoped>
.search__btn {
  position: relative;
  margin-left: 20px;
  width: 110px;
  background-color: #f5f6f7;
  border: none;
  border-radius: 10px 0px 0px 10px;
  border-right: 1px solid #e3e4e5;
  color: #a0a0a0;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.arrow {
  width: 15px;
}

.search__btn select {
  display: none;
}
.search__dropdown__modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: max-content;
  box-sizing: border-box;
  padding: 5px;
  box-shadow: 2px 2px 5px #888888;
  background-color: #f5f6f7;
  border-radius: 5px;
  top: 56px;

  .select-item {
    text-decoration: none;
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
