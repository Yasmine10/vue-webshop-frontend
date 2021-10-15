<template>
  <header>
    <div class="header__content container">
      <router-link to="/home" class="header__logo header__link">
        <img src="../../assets/images/logo.png" alt="Pet World" />
      </router-link>
      <router-link to="/cart" class="header__link">
        <ph-shopping-cart size="32" />
      </router-link>
    </div>
  </header>
</template>

<script>
import { PhShoppingCart } from "phosphor-vue";
import { image } from "@/mixins/image";

export default {
  name: "Header",
  mixins: [image],
  components: {
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
    align-items: center;
    padding-block: 0.5rem;
  }

  &__link {
    text-decoration: none;
    color: var(--clr-primary-space-cadet);

    &:nth-child(2),
    &:nth-child(2) {
      padding-top: 0.5em;
    }

    &:nth-child(2):hover,
    &:nth-child(2):focus {
      color: var(--clr-primary-heliotrope-gray);
    }
  }

  &__logo {
    display: flex;
    width: 12rem;
    height: 100%;
  }
}
</style>
