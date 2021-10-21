<template>
  <span v-if="totalCartItems > 0" class="badge">{{ totalCartItems }}</span>
</template>

<script>
export default {
  name: "CartBadge",
  computed: {
    totalCartItems() {
      return this.$store.getters.totalCartItems;
    },
  },
};
</script>

<style scoped lang="scss">
.badge {
  background-color: var(--clr-primary-silver-pink);
  color: var(--clr-primary-space-cadet);
  font-weight: bold;
  font-size: var(--fs-14pt);
  border-radius: 100%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.25rem;
  right: -1rem;
}
</style>
