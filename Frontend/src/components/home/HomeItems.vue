<template>
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
</template>

<script>
import CardItem from "@/components/common/CardItem.vue";
export default {
  props: ["items"],
  components: {
    CardItem
  }
};
</script>

<style lang="scss" scoped>
.flexgrid {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
