<template>
  <div class="sidebar">
    <button class="btn-primary">Verwijder filters</button>
    <form class="form" @submit.prevent="">
      <section class="sidebar__categories">
        <p class="sidebar__title">Categorieën</p>
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
        <p class="sidebar__title">Merken</p>
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

@use "sass:map";
@use "../../assets/styles/utils" as *;
@use "../../assets/styles/global" as *;

.sidebar {
  //background-color: var(--clr-primary-independence);
  
  &__title {
    font-weight: map.get($fontweights, "bold");
    color: var(--clr-primary-space-cadet);
  }
}
</style>
