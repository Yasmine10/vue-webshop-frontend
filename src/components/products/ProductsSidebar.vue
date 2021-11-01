<template>
  <div class="sidebar-wrapper">
    <div class="mobile-toggle">
      <button class="btn-secondary btn--sidebar" @click="toggleFilter">
        <ph-faders-horizontal :size="32" /> Filters
      </button>
    </div>
    <div class="sidebar" :class="{ 'sidebar--show': isToggled }">
      <button
        type="button"
        class="btn-primary btn--remove-filters"
        @click="removeAllFilters($event)"
      >
        Verwijder filters
      </button>
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
          <div
            v-for="(brand, index) in brands"
            :key="index"
            class="form__group"
          >
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
  </div>
</template>

<script>
import { PhFadersHorizontal } from "phosphor-vue";

export default {
  name: "ProductsSidebar",
  components: {
    PhFadersHorizontal,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      isToggled: false,
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
      this.$store.dispatch("saveSelectedCategories", this.selectedCategories);
      this.$store.dispatch("getAllFilteredProducts", {
        animal: this.name,
        categories: this.$store.state.products.selectedCategories,
        brands: this.$store.state.products.selectedBrands,
      });
    },
    selectedBrands() {
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
    toggleFilter() {
      this.isToggled = !this.isToggled;
    },
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

.btn--sidebar {
  display: flex;
  align-items: center;
  gap: 1rem;

  @include mq(desktop) {
    display: none;
  }
}

.sidebar {
  height: 0;
  visibility: hidden;
  position: relative;
  top: 15rem;
  left: 0;
  transition: transform 250ms ease-in;

  @include mq(desktop) {
    height: initial;
    visibility: visible;
    top: 0;
  }

  &--show {
    height: initial;
    visibility: visible;
    z-index: 10;
    position: absolute;
    transform: translatex(15%);
    background-color: var(--clr-primary-isabelline);
    padding: 1.5rem;
  }

  .btn--remove-filters {
    margin-bottom: 1.5rem;
  }

  &__title {
    font-weight: map.get($fontweights, "bold");
    color: var(--clr-primary-space-cadet);
    padding-bottom: 0.25em;
    margin-top: 1em;
  }
}
</style>
