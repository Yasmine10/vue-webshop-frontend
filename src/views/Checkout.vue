<template>
  <div class="checkout container padding-page">
    <a href="" class="go-back-link" @click.prevent="goBack"
      >Terug naar overzicht</a
    >
    <h2>Checkout</h2>

    <CheckoutForm :title="title" />
    <!--    <section class="checkout__total-container">-->
    <!--      <div-->
    <!--        class="total__order-items"-->
    <!--        v-for="(item, index) in cartItems"-->
    <!--        :key="index"-->
    <!--      >-->
    <!--        <img-->
    <!--          class="total__item&#45;&#45;image"-->
    <!--          :src="getImagePath(item.product.imageUrl)"-->
    <!--          :alt="item.product.name"-->
    <!--        />-->
    <!--        <h4 class="total__item&#45;&#45;name">{{ item.product.name }}</h4>-->
    <!--        <small class="total__item&#45;&#45;brand">{{ item.product.brand }}</small>-->
    <!--        <p class="total__item&#45;&#45;quantity">Aantal: {{ item.quantity }}</p>-->
    <!--        <p class="total__item&#45;&#45;price">&euro; {{ item.product.price }}</p>-->
    <!--      </div>-->
    <!--    </section>-->
    <CheckoutSuccessModal :show-modal="checkoutSuccess" />
  </div>
</template>

<script>
import { image } from "@/mixins/image";

import CheckoutForm from "@/components/cart-checkout/CheckoutForm";
import CheckoutSuccessModal from "@/components/cart-checkout/CheckoutSuccessModal";

export default {
  name: "Checkout",
  components: {
    CheckoutSuccessModal,
    CheckoutForm,
  },
  mixins: [image],
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
  created() {
    this.$store.disp;
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
}

h2 {
  padding-top: 1em;
}

//&__total-container {
//  background-color: var(--clr-primary-isabelline);
//  padding: 1.5em;
//  margin-top: 3rem;
//
//  .btn--checkout {
//    padding: 0.5rem 1rem;
//    margin-top: 3rem;
//  }
//
//  p {
//    color: var(--clr-primary-space-cadet);
//  }
//}

.total__order-items {
  display: grid;
  grid-template-columns: 1fr 0.5rem 1fr 1fr;
  grid-template-rows: 1fr 1.5rem 1.5rem;
  grid-template-areas:
    "image ... name name"
    "image ... brand brand"
    "image ... quantity price ";
  margin-bottom: 1rem;
}

.total {
  &__item {
    border-top: 1px solid var(--clr-primary-heliotrope-gray);
    padding-bottom: 1rem;
  }

  &__item:not(:last-of-type) {
    margin-bottom: 1rem;
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
