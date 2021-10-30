<template>
  <div class="product-view container padding-page">
    <div class="product-view__sidebar">
      <ProductsSidebar :name="name" />
    </div>
    <div class="product-view__products">
      <div class="products__header">
        <h3>Hond</h3>
        <ProductsSorter />
      </div>
      <ProductsList :name="name" />
      <Pagination />
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";
import ProductsSidebar from "@/components/products/ProductsSidebar";
import ProductsSorter from "@/components/products/ProductsSorter";

export default {
  name: "Dog",
  components: {
    ProductsSorter,
    ProductsSidebar,
    ProductsList,
  },
  data() {
    return {
      name: "dog",
    };
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

h3 {
  //padding-bottom: 1.5em;
}

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
