<template>
  <header>
    <div class="header__content container">
      <router-link to="/home" class="header__logo header__link">
        <img src="../../assets/images/logo.png" alt="Pet World" />
      </router-link>
      <router-link to="/login" class="header__user header__link">
        <ph-user :size="32" />
      </router-link>
      <router-link to="/cart" class="header__cart header__link">
        <ph-shopping-cart size="32" />
        <CartBadge />
      </router-link>
    </div>
  </header>
</template>

<script>
import { PhUser, PhShoppingCart } from "phosphor-vue";
import { image } from "@/mixins/image";
import CartBadge from "@/components/cart-checkout/CartBadge";

export default {
  name: "Header",
  components: {
    CartBadge,
    PhUser,
    PhShoppingCart,
  },
  mixins: [image],
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
    align-items: center;
    padding-block: 0.5rem;
  }

  &__link {
    text-decoration: none;
    color: var(--clr-primary-space-cadet);

    &:nth-child(2),
    &:nth-child(2) {
      margin-left: auto;
      padding-right: 0.75rem;
    }

    &:not(:first-child) {
      padding-top: 0.5em;
    }

    &:not(:first-child):hover,
    &:not(:first-child):focus {
      color: var(--clr-primary-heliotrope-gray);
    }
  }

  &__logo {
    display: flex;
    width: 12rem;
    height: 100%;
  }

  &__cart {
    position: relative;
  }
}
</style>
