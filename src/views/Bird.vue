<template>
  <div class="container padding-page">
    <h2>Vogel</h2>
    <ProductsList :name="name" />
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";

export default {
  name: "Bird",
  components: {
    ProductsList,
  },
  data() {
    return {
      name: "bird",
    };
  },
};
</script>

<style scoped></style>
