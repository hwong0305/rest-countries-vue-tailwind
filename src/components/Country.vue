<template>
  <div class="mt-20 w-full h-full text-left px-12 overflow-auto">
    <div class="w-full top">
      <button
        class="mt-6 shadow border border-solid border-gray-400 w-16 h-8 rounded"
        @click="back"
      >
        Back
      </button>
    </div>
    <img :src="flag" :alt="name" class="w-full mt-6 lg:w-1/2 lg:float-left" />
    <div class="lg:w-1/2 lg:float-right mt-8">
      <h2 class="font-bold text-3xl w-full lg:pl-24 tracking-wider">
        {{ name }}
      </h2>
      <div class="w-full lg:w-1/2 lg:pl-24 mt-8 lg:float-left">
        <p class="leading-loose">
          <strong>Native Name:</strong> {{ nativeName }}
        </p>
        <p class="leading-loose">
          <strong>Population</strong> {{ population }}
        </p>
        <p class="leading-loose"><strong>Region</strong> {{ region }}</p>
        <p class="leading-loose">
          <strong>Sub Region:</strong> {{ subRegion }}
        </p>
        <p class="leading-loose"><strong>Capital:</strong> {{ capital }}</p>
      </div>
      <div class="w-full lg:w-1/2 mt-8 lg:pl-24 lg:float-right">
        <p class="leading-loose">
          <strong>Top Level Domain:</strong> {{ domain }}
        </p>
        <p class="leading-loose"><strong>Currencies:</strong> {{ currency }}</p>
        <p class="leading-loose"><strong>Languages:</strong> {{ language }}</p>
      </div>
      <div class="lg:w-1/2 mt-8 lg:ml-24 mb-24 custom">
        <div class="flex flex-wrap w-full">
          <span class="leading-loose"><strong>Borders:</strong></span>
          <span v-for="cn in border" :key="cn">
            <router-link
              :to="cn"
              class="ml-2 border border-solid border-gray-400 px-2 leading-loose"
              >{{ cn }}</router-link
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Country",
  methods: {
    back() {
      this.$router.back();
    }
  },
  data() {
    return {
      name: "",
      flag: "",
      nativeName: "",
      population: null,
      region: "",
      subRegion: "",
      capital: "",
      language: "",
      domain: "",
      currency: "",
      border: []
    };
  },
  watch: {
    async $route(to) {
      const { id } = to.params;
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${id}`
      );
      const {
        name,
        capital,
        region,
        subregion,
        population,
        nativeName,
        flag,
        languages,
        topLevelDomain,
        currencies,
        borders
      } = await response.json();

      this.name = name;
      this.flag = flag;
      this.nativeName = nativeName;
      this.population = population;
      this.region = region;
      this.subRegion = subregion;
      this.capital = capital;
      this.language = languages.map(e => e.name).toString();
      this.domain = topLevelDomain.toString();
      this.currency = currencies.map(e => e.name).toString();
      this.border = borders;
    }
  },
  async mounted() {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${this.$route.params.id}`
    );

    const {
      name,
      capital,
      region,
      subregion,
      population,
      nativeName,
      flag,
      languages,
      topLevelDomain,
      currencies,
      borders
    } = await response.json();

    this.name = name;
    this.flag = flag;
    this.nativeName = nativeName;
    this.population = population;
    this.region = region;
    this.subRegion = subregion;
    this.capital = capital;
    this.language = languages.map(e => e.name).toString();
    this.domain = topLevelDomain.toString();
    this.currency = currencies.map(e => e.name).toString();
    this.border = borders;
  }
};
</script>

<style scoped>
body {
  font-size: 16px;
  background: var(--background-color);
}
.top {
  height: 80px;
}
button,
h2,
p {
  color: var(--text-color);
}
* {
  box-sizing: border-box;
}
</style>
