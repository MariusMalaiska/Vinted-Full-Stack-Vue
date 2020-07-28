<template>
  <div class="search__header">
    <h1>{{name}}</h1>
    <div class="line"></div>
    <div class="check__box">
      <div v-for="({name, display}, index) in filters" :key="index" class="check__box__group">
        <input
          type="checkbox"
          class="form__check__input"
          :checked="display"
          @change="toggleFilter(name)"
        />
        <label class="form-check-label" for="bracelets">{{name}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["name"],
  computed: {
    ...mapGetters({
      filters: "shop/getFilters"
    })
  },
  methods: {
    ...mapActions({
      toggleFilter: "shop/filterItems"
    })
  }
};
</script>

//
<style lang="scss" scoped>
.search__header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  height: 100px;
  background-color: $white;

  .line {
    height: 2px;
    width: 100%;
    background-color: $darkGray;
  }
  .check__box {
    display: flex;
    width: 100%;
    .check__box__group {
      margin: 0px 30px;
      .form__check__input {
        margin: 5px;
      }
    }
  }
}
</style>
