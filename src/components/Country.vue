<template>
  <div class="main__container mt-20 w-full text-left px-12 flex flex-wrap">
    <div class="w-full">
      <button
        class="mt-6 shadow border border-solid border-gray-400 w-16 h-8 rounded"
        @click="back"
      >
        Back
      </button>
    </div>
    <img :src="flag" :alt="name" class="w-full mt-6 lg:w-1/2" />
    <div class="lg:w-1/2 mt-8">
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
        <p class="leading-loose"><strong>Currencies</strong> {{ currency }}</p>
        <p class="leading-loose"><strong>Languages</strong> {{ language }}</p>
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
        currencies
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
      currencies
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
  }
};
</script>

<style scoped>
.main__container {
  background: hsl(0, 0%, 98%);
}
body {
  font-size: 16px;
}
* {
  box-sizing: border-box;
}
</style>
