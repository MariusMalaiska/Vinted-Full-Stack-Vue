<template>
  <div class="pagination">
    <div
      class="btn btn-primary btn__pagination"
      v-for="({number}, i ) in pagination.pages"
      :class="{active: number == pagination.currentPage}"
      :key="i"
      @click="setPage(number)"
    >{{number}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("shop", {
    pagination: "getPagination"
  }),
  methods: mapActions("shop", {
    setPage: "setPage"
  })
};
</script>


<style lang="scss" scoped>
.pagination {
  background-color: $white;
  margin-top: 0.5rem;
  margin: 20px 0;
}
.btn__pagination {
  margin: 5px 0.5rem;
  background-color: transparent;
  border: none;
  text-align: center;
  line-height: 1.5rem;
}
</style>
