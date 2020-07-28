<template>
  <div class="Sort__header">
    <select
      class="custom-select custom-select-sm mr-2"
      @change="changeItemsPerPageOption($event.target.value)"
    >
      <option
        v-for="({count, selected}, i) in itemsPerPageOptions"
        :key="i"
        :value="count"
        :selected="selected"
      >{{count}}</option>
    </select>
    <select
      v-if="count > 1"
      class="custom-select custom-select-sm"
      @change="changeSortOption($event.target.value)"
    >
      <option
        v-for="({name, selected}, i) in sortOptions"
        :key="i"
        :value="name"
        :selected="selected"
      >{{name}}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("shop", {
      count: "getItemCount",
      searchQuery: "getSearchQuery",
      itemsPerPageOptions: "getItemsPerPageOptions",
      sortOptions: "getSortOptions"
    })
  },
  methods: mapActions("shop", ["changeItemsPerPageOption", "changeSortOption"])
};
</script>

<style lang="scss" scoped>
.Sort__header {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  .custom-select {
    width: min-content;
  }
}
</style>