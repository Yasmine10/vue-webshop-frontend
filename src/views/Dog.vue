<template>
  <div class="container padding-page">
    <h2>Hond</h2>
    <ProductsList :name="name" />
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";

export default {
  name: "Dog",
  components: {
    ProductsList
  },
  data() {
    return {
      name: "dog"
    };
  }
};
</script>

<style scoped></style>
