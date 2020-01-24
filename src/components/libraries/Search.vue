<template>
  <div class="flex flex-wrap justify-between items-stretch search__container">
    <div
      class="relative w-full mx-8 mt-4 sm:w-1/3 inline-block shadow rounded overflow-hidden"
    >
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 custom"
      >
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="fill-current h-4 w-4 pointer-events-none"
        />
      </div>
      <input
        class="block py-2 pl-8 w-full h-full custom text-gray-700"
        type="text"
        v-model="query"
        placeholder="Search for a country"
      />
    </div>
    <div class="inline-block relative mt-4 mx-8 rounded">
      <select
        v-model="region"
        class="block appearance-none custom w-full h-full rounded px-4 py-2 pr-8 shadow focus:outline-none focus:shadow-outline"
      >
        <option value="0">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
export default {
  name: "Search",
  data() {
    return {
      region: 0,
      query: ""
    };
  },
  mounted() {
    if (this.$route.query.search) {
      this.query = this.$route.query.search;
    }
    if (this.$route.query.region) {
      this.region = this.$route.query.region;
    }
  },
  watch: {
    query: _.debounce(function() {
      const route = {
        name: "countries"
      };
      if (this.query !== "") {
        route.query = {
          search: this.query
        };
      }
      this.$router.push(route);
    }, 700),
    region: function() {
      const route = { name: "countries" };
      if (!this.region !== 0) {
        route.query = {
          region: this.region
        };
      }
      this.$router.push(route);
    }
  }
};
</script>

<style>
.search__container {
  background: var(--background-color);
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
</style>
