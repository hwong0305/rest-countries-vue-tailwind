<template>
  <div class="main__container mt-20 w-full text-left overflow-hidden">
    <button>Back</button>
    <div class="w-full px-12">
      <img :src="flag" :alt="name" class="w-full" />
    </div>
    <h2>{{ name }}</h2>
    <p><strong>Native Name:</strong> {{ nativeName }}</p>
    <p><strong>Population</strong> {{ population }}</p>
    <p><strong>Region</strong> {{ region }}</p>
    <p><strong>Sub Region:</strong> {{ subRegion }}</p>
    <p><strong>Capital:</strong> {{ capital }}</p>
    <p><strong>Top Level Domain:</strong> {{ domain }}</p>
    <p><strong>Currencies</strong> {{ currency }}</p>
    <p><strong>Languages</strong> {{ language }}</p>
  </div>
</template>

<script>
export default {
  name: "Country",
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
* {
  box-sizing: border-box;
}
</style>
