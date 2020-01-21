<template>
  <div>
    <Search />
    <div class="w-full flex flex-col items-center main__container">
      <div
        v-for="country in countries"
        :key="country.alpha3Code"
        class="bg-white shadow-lg mt-12 w-3/4 text-left rounded-lg overflow-hidden"
      >
        <img class="w-full" :src="country.flag" />
        <h1 class="font-bold ml-4 mt-2 text-2xl tracking-wider">
          {{ country.name }}
        </h1>
        <p class="ml-4 mt-1 text-sm">
          <span class="font-semibold">Population:</span>
          {{ country.population }}
        </p>
        <p class="ml-4 mt-1 text-sm">
          <span class="font-semibold">Region:</span>
          {{ country.region }}
        </p>
        <p class="ml-4 mt-1 text-sm mb-6">
          <span class="font-semibold">Capital:</span>
          {{ country.capital }}
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

<style scoped>
.main__container {
  background: hsl(0, 0%, 98%);
}
</style>
