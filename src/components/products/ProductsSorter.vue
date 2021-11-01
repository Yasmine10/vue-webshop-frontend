<template>
  <form>
    <select v-model="selectedSortOption">
      <option
        v-for="(option, index) in sortOptions"
        :key="index"
        :value="option"
      >
        {{ option.name }}
      </option>
    </select>
  </form>
</template>

<script>
export default {
  name: "ProductsSorter",
  data() {
    return {
      sortOptions: [
        {
          name: "Prijs van laag naar hoog",
          value: "p.price ASC",
        },
        {
          name: "Prijs van hoog naar laag",
          value: "p.price DESC",
        },
      ],
      selectedSortOption: {},
    };
  },
  watch: {
    selectedSortOption(value) {
      console.log(value);
      this.getSortedProducts(value);
    },
  },
  created() {
    this.selectedSortOption = this.sortOptions[0];
  },
  methods: {
    getSortedProducts(value) {
      this.$store.dispatch("setSortOption", { sortOption: value});
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../../assets/styles/global" as *;

select {
  padding-block: 0.75rem;
  font-size: map.get($fontsizes-desktop, "body");
}

option {
  padding-block: 0.5rem;
}
</style>
