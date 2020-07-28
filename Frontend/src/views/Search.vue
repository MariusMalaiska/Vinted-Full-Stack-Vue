<template>
  <div class="search">
    <div class="container">
      <search-header :name="name" />
      <sorting />
      <div class="flexgrid">
        <card-item
          v-for="{ id, img, price, size, height, width, brand } in items"
          :key="id"
          :img="img"
          :id="id"
          :price="price"
          :size="size"
          :height="height"
          :width="width"
          :brand="brand"
        />
      </div>
      <pagination />
    </div>
    <!-- <shop-items /> -->
  </div>
</template>




<script>
import Sorting from "@/components/shop/Sorting.vue";
import SearchHeader from "@/components/shop/SearchHeader.vue";
import Pagination from "@/components/shop/Pagination.vue";
import CardItem from "@/components/common/CardItem.vue";
import { mapGetters } from "vuex";

export default {
  props: { name: { default: "Drabužiai" } },
  created() {
    this.$store.dispatch("shop/fetchItems");
  },
  name: "Search",
  components: {
    SearchHeader,
    CardItem,
    Pagination,
    Sorting
    // setSearchQuery
  },
  computed: {
    // ...mapGetters({
    //   items: "shop/getHomeItems"
    // })
    ...mapGetters({
      items: "shop/getSelectedItems"
    })
  }
  // methods: {
  //   ...mapActions({
  //     setSearchQuery: "shop/setSearchQuery"
  //   })
  // }
};
</script>

<style lang="scss" scoped>
.search {
  overflow: auto;
  background-color: $darkGray;
  .flexgrid {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
