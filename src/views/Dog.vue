<template>
  <div class="product-view container padding-page">
    <div>
      <ProductsSidebar :name="name" />
    </div>
    <div>
      <h3>Hond</h3>
      <ProductsList :name="name" />
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";
import ProductsSidebar from "@/components/products/ProductsSidebar";

export default {
  name: "Dog",
  components: {
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
  padding-bottom: 1.5em;
}

.product-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @include mq(desktop) {
    flex-direction: row;
  }

    &__sidebar {
      width: 20%;
      flex-grow: 0;
      flex-shrink: 0;
    }

    &__products {
      flex-grow: 2;
      flex-shrink: 1;
    }
}

</style>
