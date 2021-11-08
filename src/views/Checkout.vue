<template>
  <div class="checkout container padding-page">
    <a href="" class="go-back-link" @click.prevent="goBack"
      >Terug naar overzicht</a
    >
    <h3 class="h3">Checkout</h3>
    <CheckoutForm :title="title" />
    <CheckoutSuccessModal :show-modal="checkoutSuccess" />
  </div>
</template>

<script>
import CheckoutForm from "@/components/cart-checkout/CheckoutForm";
import CheckoutSuccessModal from "@/components/cart-checkout/CheckoutSuccessModal";

export default {
  name: "Checkout",
  components: {
    CheckoutSuccessModal,
    CheckoutForm,
  },
  data() {
    return {
      title: "Overzicht bestelling",
    };
  },
  computed: {
    checkoutSuccess() {
      return this.$store.state.cart.checkoutSuccess;
    },
  },
  watch: {
    checkoutSuccess() {},
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
.go-back-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--clr-primary-heliotrope-gray);
  font-size: var(--fs-16pt);

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

h3 {
  padding-top: 1em;
  padding-bottom: 1.25em;
}

.total {
  &__item {
    border-top: 1px solid var(--clr-primary-heliotrope-gray);
    padding-bottom: 1rem;
  }

  &__item--image {
    grid-area: image;
    width: 80%;
    align-self: center;
    padding: 0.5rem;
    background-color: var(--clr-neutral-white);
  }
  &__item--name {
    grid-area: name;
    align-self: center;
    color: var(--clr-primary-independence);
    font-size: var(--fs-16pt);
    line-height: 1.1;
    padding-top: 0.75rem;
  }
  &__item--brand {
    grid-area: brand;
    align-self: flex-start;
    color: var(--clr-primary-heliotrope-gray);
  }
  &__item--quantity {
    grid-area: quantity;
  }

  &__item--price {
    grid-area: price;
    justify-self: flex-end;
    color: var(--clr-primary-space-cadet);
  }

  &__item--remove-btn {
    all: unset;
    grid-area: remove;
    justify-self: flex-end;
    color: var(--clr-primary-space-cadet);

    &:hover,
    &:focus {
      color: var(--clr-primary-heliotrope-gray);
    }
  }

  &__title {
    border-bottom: 1px solid var(--clr-primary-independence);
    padding-bottom: 0.75em;
    margin-bottom: 0.75em;
  }

  &__subtotal,
  &__delivery-costs,
  &__taxes,
  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__subtotal {
    border-top: 1px solid var(--clr-primary-independence);
    padding-top: 0.75rem;
    margin-top: 0.75rem;
  }

  &__subtotal,
  &__delivery-costs {
    margin-bottom: 0.5em;
  }

  &__total {
    text-transform: uppercase;
    border-top: 1px solid var(--clr-primary-independence);
    padding-top: 0.75em;
    margin-top: 0.75em;

    p {
      color: var(--clr-primary-space-cadet);
      font-weight: var(--fw-bold);
    }
  }
}
</style>
