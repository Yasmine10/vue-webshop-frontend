<template>
  <div class="product-view container padding-page">
    <div class="product-view__sidebar">
      <ProductsSidebar :name="name" />
    </div>
    <div class="product-view__products">
      <div class="products__header">
        <h3>Knaagdier</h3>
<!--        <ProductsSorter />-->
      </div>
      <ProductsList :name="name" />
      <Pagination :name="name" />
    </div>
  </div>
</template>

<script>
import ProductsSidebar from "@/components/products/ProductsSidebar";
// import ProductsSorter from "@/components/products/ProductsSorter";
import ProductsList from "@/components/products/ProductsList";
import Pagination from "@/components/products/Pagination";

export default {
  name: "Rodent",
  components: {
    ProductsSidebar,
    // ProductsSorter,
    ProductsList,
    Pagination,
  },
  data() {
    return {
      name: "rodent",
    };
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

.product-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @include mq(desktop) {
    flex-direction: row;
  }

  &__sidebar {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .products__header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;

    @include mq(tablet) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
