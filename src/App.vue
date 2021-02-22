<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<style></style>
<script>
import Nav from "./components/Nav.vue";
export default {
  components: {
    Nav
  }
};
</script>
