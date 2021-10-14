<template>
  <div>
    {{ cartItems }}
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
  },
};
</script>

<style scoped></style>
