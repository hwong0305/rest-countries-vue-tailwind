<template>
  <div class="flex flex-wrap justify-around items-center search__container">
    <div
      class="relative w-full mx-8 mt-4 sm:w-1/3 inline-block shadow rounded overflow-hidden"
    >
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 bg-white"
      >
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="fill-current h-4 w-4 pointer-events-none"
        />
      </div>
      <input
        class="block py-2 pl-8 w-full h-full bg-white text-gray-700"
        type="text"
        placeholder="Search for a country"
      />
    </div>
    <div class="inline-block relative mt-4 rounded">
      <select
        class="block appearance-none bg-white w-full h-full rounded px-4 py-2 pr-8 shadow focus:outline-none focus:shadow-outline"
      >
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
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
export default {
  name: "Search"
};
</script>

<style scoped>
.search__container {
  background: hsl(0, 0%, 98%);
}
</style>
