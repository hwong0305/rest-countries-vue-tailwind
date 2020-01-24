<template>
  <div id="app">
    <nav
      class="inset-0 absolute flex items-center justify-between shadow"
      id="nav"
    >
      <h3
        @click="goHome"
        class="ml-6 font-semibold custom cursor-pointer"
        role="button"
      >
        Where in the world?
      </h3>
      <button class="mr-6 custom" @click="updateCSS">
        <font-awesome-icon :icon="['fas', 'moon']" />
        Dark Mode
      </button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import "@/assets/css/tailwind.css";

export default {
  name: "app",
  data() {
    return {
      dark: false
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    updateCSS() {
      if (!this.dark) {
        this.dark = true;
        this.$el.style.setProperty("--background-color", "hsl(209, 23%, 22%)");
        this.$el.style.setProperty("--element-color", "hsl(209, 23%, 22%)");
        this.$el.style.setProperty("--text-color", "hsl(0, 0%, 100%)");
        this.$el.style.setProperty("--element-color", "hsl(209, 23%, 22%)");
      } else {
        this.dark = false;
        this.$el.style.setProperty("--background-color", "hsl(0, 0%, 98%)");
        this.$el.style.setProperty("--element-color", "hsl(0, 0%, 100%)");
        this.$el.style.setProperty("--text-color", "hsl(200, 15%, 8%)");
        this.$el.style.setProperty("--element-color", "hsl(0, 0%, 98%)");
      }
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--background-color);
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
.custom {
  color: var(--text-color);
  background: var(--background-color);
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.element {
  color: var(--text-color);
  background: var(--element-color);
}
#nav {
  height: 80px;
  background: var(--background-color);
}
h3 {
  font-family: "Nunito Sans", sans-serif;
}
</style>
