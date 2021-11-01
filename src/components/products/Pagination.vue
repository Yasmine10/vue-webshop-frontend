<template>
  <div class="pagination" v-if="totalProducts > 0">
    <div class="prev-btn page__item" @click="goToPreviousPage">
      <ph-caret-double-left :size="16" />
    </div>
    <ul v-for="(page, index) in totalPages" :key="index" class="page__items">
      <li
        class="page__item"
        :class="{ 'page__item--selected': page === pagination.pageNumber + 1 }"
        @click="goToSpecificPage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <div class="next-btn page__item" @click="goToNextPage">
      <ph-caret-double-right :size="16" />
    </div>
  </div>
</template>

<script>
import { PhCaretDoubleLeft, PhCaretDoubleRight } from "phosphor-vue";

export default {
  name: "Pagination",
  components: {
    PhCaretDoubleLeft,
    PhCaretDoubleRight,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      pageSize: [10, 25, 50, 100],
    };
  },
  computed: {
    totalProducts() {
      return this.$store.getters.totalProducts;
    },
    pagination() {
      return this.$store.state.products.pagination;
    },
    totalPages() {
      return this.pagination.totalPages;
    },
    currentPage() {
      return this.pagination.pageNumber;
    },
  },
  watch: {
    pagination() {},
  },
  created() {},
  methods: {
    goToSpecificPage(page) {
      // because the first page is 0 in the API, subtract 1 from the selected page
      this.$store.dispatch("getAllFilteredProducts", {
        animal: this.name,
        pageNumber: page - 1,
        categories: this.$store.state.products.selectedCategories,
        brands: this.$store.state.products.selectedBrands,
      });
    },
    goToNextPage() {
      // because the first page is 0 in the API, subtract 1 from the total pages
      if (this.currentPage < this.totalPages - 1) {
        this.$store.dispatch("getAllFilteredProducts", {
          animal: this.name,
          pageNumber: this.currentPage + 1,
          categories: this.$store.state.products.selectedCategories,
          brands: this.$store.state.products.selectedBrands,
        });
      }
    },
    goToPreviousPage() {
      if (this.currentPage > 0) {
        this.$store.dispatch("getAllFilteredProducts", {
          animal: this.name,
          pageNumber: this.currentPage - 1,
          categories: this.$store.state.products.selectedCategories,
          brands: this.$store.state.products.selectedBrands,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../../assets/styles/global" as *;

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
}

.page {
  &__item {
    background-color: var(--clr-neutral-white);
    border: 1px solid var(--clr-primary-independence);
    color: var(--clr-primary-independence);
    width: 2.5rem;
    padding: 0.25rem 0.75rem;
    font-size: map.get($fontsizes-desktop, "h4");
    text-align: center;
    cursor: pointer;
  }
  &__item--selected {
    background-color: var(--clr-primary-independence);
    color: var(--clr-neutral-white);
    font-weight: map.get($fontweights, "bold");
  }
}
</style>
