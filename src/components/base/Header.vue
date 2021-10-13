<template>
  <header>
    <div class="header__content container">
      <router-link to="/home" class="header__logo header__link">
        <ph-paw-print size="64" />
        <h1>Pet world</h1>
      </router-link>
      <router-link to="/cart" class="header__link">
        <ph-shopping-cart size="32" />
      </router-link>
    </div>
  </header>
</template>

<script>
import { PhPawPrint, PhShoppingCart } from "phosphor-vue";

export default {
  name: "Header",
  components: {
    PhPawPrint,
    PhShoppingCart,
  },
};
</script>

<style scoped lang="scss">
header {
  position: relative;
  padding-block: 0.5rem;
}

.header {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__link {
    text-decoration: none;
    color: var(--clr-primary-space-cadet);

    &:nth-child(2):hover,
    &:nth-child(2):focus {
      color: var(--clr-accent-mellow-apricot);
    }
  }

  &__logo {
    display: flex;
    align-items: flex-end;
    gap: 0.5em;
    h1 {
      font-family: var(--ff-logo);
      font-size: var(--fs-30pt);
      font-weight: 600;
      text-transform: capitalize;
    }
  }
}
</style>
