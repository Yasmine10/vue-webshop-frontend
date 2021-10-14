<template>
  <div class="product-view container padding-page">
<!--    <div>-->
<!--      <ProductsSidebar :name="name" />-->
<!--    </div>-->
    <div>
      <h2>Hond</h2>
      <ProductsList :name="name" />
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";
// import ProductsSidebar from "@/components/products/ProductsSidebar";

export default {
  name: "Dog",
  components: {
    // ProductsSidebar,
    ProductsList,
  },
  data() {
    return {
      name: "dog",
    };
  },
};
</script>

<style scoped></style>
