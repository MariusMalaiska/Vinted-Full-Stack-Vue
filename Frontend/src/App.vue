<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo-list">Todo List</router-link>
    </div>-->
    <navbar-main />
    <navbar-following />
    <router-view />
  </div>
</template>

<script>
import NavbarMain from "@/components/partials/NavbarMain.vue";
import NavbarFollowing from "@/components/partials/NavbarFollowing.vue";
export default {
  components: {
    NavbarFollowing,
    NavbarMain
  }
};
</script>

<style lang="scss">
//
</style>
