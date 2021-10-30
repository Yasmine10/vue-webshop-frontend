<template>
  <div class="sidebar">
    <button type="button" class="btn-primary btn--remove-filters" @click="removeAllFilters($event)">Verwijder filters</button>
    <form class="form" @submit.prevent="">
      <section class="sidebar__categories">
        <p class="sidebar__title">Categorieën</p>
        <div
          v-for="category in categories"
          :key="category.id"
          class="form__group"
        >
          <label :for="'category'[category.id]">
            <input
              :id="'category'[category.id]"
              v-model="selectedCategories"
              type="checkbox"
              name="category"
              :value="category.name"
            />
            <span>{{ category.name }}</span>
          </label>
        </div>
      </section>
      <section class="sidebar__brands">
        <p class="sidebar__title">Merken</p>
        <div v-for="(brand, index) in brands" :key="index" class="form__group">
          <label :for="'brand_'[index]">
            <input
              :id="'brand_'[index]"
              v-model="selectedBrands"
              type="checkbox"
              name="brand"
              :value="brand"
            />
            <span>{{ brand }}</span>
          </label>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProductsSidebar",
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      selectedCategories: [],
      selectedBrands: [],
    };
  },
  computed: {
    categories() {
      return this.$store.state.products.categories;
    },
    brands() {
      return this.$store.state.products.brands;
    },
  },
  watch: {
    selectedCategories() {
      console.log(this.selectedCategories);
      this.$store.dispatch("saveSelectedCategories", this.selectedCategories);
      this.$store.dispatch("getAllFilteredProducts", {
        animal: this.name,
        categories: this.$store.state.products.selectedCategories,
        brands: this.$store.state.products.selectedBrands,
      });
    },
    selectedBrands() {
      console.log(this.selectedBrands);
      console.log(this.name);
      this.$store.dispatch("saveSelectedBrands", this.selectedBrands);
      this.$store.dispatch("getAllFilteredProducts", {
        animal: this.name,
        categories: this.$store.state.products.selectedCategories,
        brands: this.$store.state.products.selectedBrands,
      });
    },
  },
  created() {
    this.$store.dispatch("getAllCategoriesByAnimal", { name: this.name });
    this.$store.dispatch("getAllBrandsByAnimal", { name: this.name });
  },
  methods: {
    removeAllFilters(event) {
      event.preventDefault();
      this.selectedCategories = [];
      this.selectedBrands = [];
      this.$store.dispatch("resetSelectedCategories");
      this.$store.dispatch("resetSelectedBrands");
      this.$store.dispatch("getAllFilteredProducts", { animal: this.name });
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../../assets/styles/utils" as *;
@use "../../assets/styles/global" as *;

.sidebar {
  //background-color: var(--clr-primary-independence);
  
  .btn--remove-filters {
    margin-bottom: 1rem;
  }

  &__title {
    font-weight: map.get($fontweights, "bold");
    color: var(--clr-primary-space-cadet);
  }
}
</style>
