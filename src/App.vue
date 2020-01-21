<template>
  <div id="app">
    <Nav />
    <Landing />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";
import Nav from "./components/Nav.vue";
import "@/assets/css/tailwind.css";

export default {
  name: "app",
  components: {
    Landing,
    Nav
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
