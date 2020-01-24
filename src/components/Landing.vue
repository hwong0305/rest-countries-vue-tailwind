<template>
  <div class="mt-20 overflow-auto h-full">
    <Search />
    <div class="w-full flex flex-wrap justify-center main__container">
      <div
        v-for="country in countries"
        :key="country.alpha3Code"
        class="element flex flex-col shadow-lg mt-12 w-full mx-12 sm:w-3/12 md:w-2/12 sm:mx-1/12 text-left rounded-lg pb-24 cursor-pointer"
      >
        <div @click="navigate(country.alpha3Code)" role="button">
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
    let response;
    if (this.$route.query.search) {
      response = await fetch(
        `https://restcountries.eu/rest/v2/name/${this.$route.query.search}`
      );
    } else if (this.$route.query.region && this.$route.query.region !== "0") {
      response = await fetch(
        `https://restcountries.eu/rest/v2/region/${this.$route.query.region}`
      );
    } else {
      response = await fetch("https://restcountries.eu/rest/v2/all");
    }
    const data = await response.json();
    this.countries = data;
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    }
  },
  watch: {
    "$route.query.search": async function() {
      let response;
      if (this.$route.query.search) {
        response = await fetch(
          `https://restcountries.eu/rest/v2/name/${this.$route.query.search}`
        );
      } else {
        response = await fetch("https://restcountries.eu/rest/v2/all");
      }
      if (response.status === 404) {
        this.data = null;
        return;
      }
      const data = await response.json();
      this.countries = data;
    },
    "$route.query.region": async function() {
      console.log(this.$route.query);
      let response;
      if (!this.$route.query.region || this.$route.query.region === "0") {
        response = await fetch("https://restcountries.eu/rest/v2/all");
      } else {
        response = await fetch(
          `https://restcountries.eu/rest/v2/region/${this.$route.query.region}`
        );
      }
      if (response.status === 404) {
        this.data = null;
        return;
      }
      const data = await response.json();
      this.countries = data;
    }
  }
};
</script>

<style scoped>
body {
  font-size: 14px;
}
.main__container {
  background: var(--background-color);
  height: 340px;
}
.card__img {
  height: 50%;
}
</style>
