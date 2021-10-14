<template>
  <div class="container padding-page">
    <h2>Knaagdier</h2>
    <ProductsList :name="name" />
  </div>
</template>

<script>
import ProductsList from "@/components/products/ProductsList";

export default {
  name: "Rodent",
  components: {
    ProductsList,
  },
  data() {
    return {
      name: "rodent",
    };
  },
};
</script>

<style scoped></style>
