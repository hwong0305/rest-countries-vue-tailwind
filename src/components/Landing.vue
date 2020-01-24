<template>
  <div class="mt-20">
    <Search />
    <div class="w-full flex flex-wrap justify-center main__container">
      <div
        v-for="country in countries"
        :key="country.alpha3Code"
        class="bg-white flex flex-col shadow-lg mt-12 w-full mx-12 sm:w-3/12 md:w-2/12 sm:mx-1/12 text-left rounded-lg mb-12 cursor-pointer"
      >
        <div @click="navigate(country.alpha3Code)">
          <img
            class="w-full object-scale-down object-center card__img"
            :src="country.flag"
          />
          <h1 class="font-bold mx-4 mt-4 text-xl">
            {{ country.name }}
          </h1>
          <p class="ml-4 mt-4 text-sm">
            <span class="font-semibold">Population:</span>
            {{ country.population }}
          </p>
          <p class="ml-4 mt-1 text-sm">
            <span class="font-semibold">Region:</span>
            {{ country.region }}
          </p>
          <p class="ml-4 mt-1 mb-6 text-sm">
            <span class="font-semibold">Capital:</span>
            {{ country.capital }}
          </p>
        </div>
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
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
body {
  font-size: 13px;
}
.main__container {
  background: hsl(0, 0%, 98%);
  height: 340px;
}
.card__img {
  height: 50%;
}
</style>
