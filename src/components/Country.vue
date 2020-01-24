<template>
  <div
    class="main__container mt-20 w-full text-left overflow-hidden px-12 flex flex-wrap"
  >
    <div class="w-full">
      <button
        class="mt-6 shadow border border-solid border-gray-400 w-16 h-8 rounded"
      >
        Back
      </button>
    </div>
    <div class="w-full px-12 md:w-1/2">
      <img :src="flag" :alt="name" class="w-full mt-6" />
    </div>
    <div class="block md:flex md:w-1/2 md:flex-wrap">
      <h2 class="font-bold text-3xl mt-6 mb-4 md:mb-0 w-full flex-grow-0">
        {{ name }}
      </h2>
      <div class="w-1/3">
        <p><strong>Native Name:</strong> {{ nativeName }}</p>
        <p><strong>Population</strong> {{ population }}</p>
        <p><strong>Region</strong> {{ region }}</p>
        <p><strong>Sub Region:</strong> {{ subRegion }}</p>
        <p><strong>Capital:</strong> {{ capital }}</p>
      </div>
      <div class="w-1/2">
        <p class="mt-6 md:mt-0 md:pl-24">
          <strong>Top Level Domain:</strong> {{ domain }}
        </p>
        <p class="md:pl-24"><strong>Currencies</strong> {{ currency }}</p>
        <p class="md:pl-24"><strong>Languages</strong> {{ language }}</p>
      </div>
    </div>
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
* {
  box-sizing: border-box;
}
p {
  line-height: 30px;
}
</style>
