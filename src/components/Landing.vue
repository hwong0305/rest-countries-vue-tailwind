<template>
  <div>
    <Search />
  </div>
</template>

<script>
import Search from './libraries/Search.vue';
export default {
  name: 'Landing',
  components: {
    Search,
  },
  data() {
    return {
      countries: null,
    };
  },
  async mounted() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    this.countries = data;
  },
};
</script>

<style scoped></style>
