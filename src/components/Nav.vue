<template>
  <nav
    class="inset-0 absolute flex items-center justify-between shadow"
    id="nav"
  >
    <h3 class="ml-6 font-semibold">Where in the world?</h3>
    <button class="mr-6">
      <font-awesome-icon :icon="['fas', 'moon']" />
      Dark Mode
    </button>
  </nav>
</template>

<script>
export default {
  name: "nav"
};
</script>

<style scoped>
#nav {
  height: 80px;
  background: hsl(0, 0%, 100%);
}
h3 {
  font-family: "Nunito Sans", sans-serif;
}
</style>
