<template>
  <div>
    <Search />
    <div class="w-full container">
      <div
        v-for="country in countries"
        :key="country.alpha3Code"
        class="mx-auto bg-white shadow-lg w-1/2 mt-12"
      >
        <img class="w-full" :src="country.flag" />
        <p>
          <strong>Name:</strong>
          {{ country.name }}
        </p>
        <p>
          <strong>Region:</strong>
          {{ country.region }}
        </p>
        <p>
          <strong>Population</strong>
          {{ country.population }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./libraries/Search.vue";
export default {
  name: "Landing",
  components: {
    Search
  },
  data() {
    return {
      countries: null
    };
  },
  async mounted() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const data = await response.json();
    this.countries = data;
  }
};
</script>

<style scoped></style>
