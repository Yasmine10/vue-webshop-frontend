<template>
  <div class="sidebar">
    <h3>Filter</h3>
    <form class="form" @submit.prevent="">
      <section class="sidebar__categories">
        <h4>Categorieën</h4>
        <div
          class="form__group"
          v-for="category in categories"
          :key="category.id"
        >
          <label :for="'category'[category.id]">
            <input
              type="checkbox"
              :id="'category'[category.id]"
              name="category"
              :value="category"
              v-model="selectedCategories"
            />
            <span>{{ category.name }}</span>
          </label>
        </div>
      </section>
      <section class="sidebar__brands">
        <h4>Merken</h4>
        <div class="form__group" v-for="(brand, index) in brands" :key="index">
          <label :for="'brand_'[index]">
            <input
              type="checkbox"
              :id="'brand_'[index]"
              name="brand"
              :value="brand"
              v-model="selectedBrands"
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
  created() {
    this.$store.dispatch("getAllCategoriesByAnimal", { name: this.name });
    this.$store.dispatch("getAllBrandsByAnimal", { name: this.name });
  },
  computed: {
    categories() {
      return this.$store.state.products.categories;
    },
    brands() {
      return this.$store.state.products.brands;
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  //background-color: var(--clr-primary-independence);
}
</style>
