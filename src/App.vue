<template>
  <div id="app">
    <Nav />
    <Landing />
    <Test />
  </div>
</template>

<script>
import Landing from './components/Landing.vue';
import Nav from './components/Nav.vue';
import Test from './components/Test.vue';
import '@/assets/css/tailwind.css';

export default {
  name: 'app',
  components: {
    Landing,
    Nav,
    Test,
  },
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
