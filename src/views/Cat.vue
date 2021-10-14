<template>
  <div class="container padding-page">
    <h2>Kat</h2>
    <ProductsList :name="name" />
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";

export default {
  name: "Cat",
  components: {
    ProductsList
  },
  data() {
    return {
      name: "cat"
    };
  }
};
</script>

<style scoped></style>
