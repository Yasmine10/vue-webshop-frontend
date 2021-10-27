<template>
  <div class="total-price-summary">
    <h5 class="summary__title">{{ title }}</h5>
    <div
      v-if="name === 'checkout' && totalCartItems > 0"
      class="summary__items"
    >
      <div class="cart__items">
        <div v-for="(item, index) in cartItems" :key="index" class="cart__item">
          <img
            class="cart__item--image"
            :src="getImagePath(item.product.imageUrl)"
            :alt="item.product.name"
          />
          <p class="cart__item--name">{{ item.product.name }}</p>
          <small class="cart__item--brand">{{ item.product.brand }}</small>
          <p class="cart__item--quantity">Aantal: {{ item.quantity }}</p>
          <p class="cart__item--price">&euro; {{ item.product.price }}</p>
        </div>
      </div>
    </div>
    <div class="summary__subtotal">
      <p>Subtotaal</p>
      <p>&euro; {{ subtotalCartItems }}</p>
    </div>
    <div v-if="name === 'checkout'" class="summary__delivery-costs">
      <p>Verzendkosten</p>
      <p>&euro; {{ deliveryCosts }}</p>
    </div>
    <div class="summary__taxes">
      <p>BTW ({{ tax }}%)</p>
      <p>&euro; {{ taxes }}</p>
    </div>
    <div class="summary__total">
      <h5>Totaal</h5>
      <p class="text-bold">
        &euro; {{ deliveryCosts ? totalPriceOrder : subtotalCartItems }}
      </p>
    </div>
    <a class="btn-primary btn--next" @click.prevent="checkout"
      >Doorgaan met bestellen</a
    >
  </div>
</template>

<script>
import { image } from "@/mixins/image";

export default {
  name: "TotalPriceSummaryCard",
  mixins: [image],
  props: {
    name: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    totalCartItems() {
      return this.$store.getters.totalCartItems;
    },
    subtotalCartItems() {
      return this.$store.getters.subtotalCartItems;
    },
    deliveryCosts() {
      return this.$store.state.cart.deliveryCosts.price;
    },
    tax() {
      return this.$store.state.cart.tax * 100;
    },
    taxes() {
      return this.$store.getters.taxes;
    },
    totalPriceOrder() {
      return this.$store.getters.total;
    },
  },
  watch: {
    deliveryCosts() {},
  },
  methods: {
    checkout() {
      if (this.name === "cart") {
        this.$router.push("/checkout");
      }
      if (this.name === "checkout") {
        this.$emit("checkout");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../assets/styles/global" as *;

.total-price-summary {
  background-color: var(--clr-primary-isabelline);
  padding: 1.5em;
  margin-top: 3rem;

  .btn--next {
    padding: 0.5rem 1rem;
    margin-top: 3rem;
  }

  p {
    color: var(--clr-primary-space-cadet);
  }
}

.cart {
  &__items {
    padding-block: 0.5rem;
    border-bottom: 1px solid var(--clr-primary-space-cadet);
    margin-bottom: 1rem;
  }
  &__item {
    display: grid;
    grid-template-columns: 1fr 0.5rem 1fr 1fr;
    grid-template-rows: 1fr 1.5rem 1.5rem;
    grid-template-areas:
      "image ... name name"
      "image ... brand brand"
      "image ... quantity price ";

    background-color: white;
    margin-bottom: 1rem;
    padding: 1rem;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    &--image {
      grid-area: image;
      width: 80%;
      align-self: center;
      padding: 0.5rem;
      background-color: var(--clr-neutral-white);
    }
    &--name {
      grid-area: name;
      align-self: center;
      line-height: 1.1;
      padding-top: 0.75rem;
    }
    &--brand {
      grid-area: brand;
      align-self: flex-start;
      color: var(--clr-primary-heliotrope-gray);
    }
    &--quantity {
      grid-area: quantity;
    }

    &--price {
      grid-area: price;
      justify-self: flex-end;
    }
  }
}

.summary {
  &__title {
    text-transform: inherit;
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

  &__subtotal,
  &__delivery-costs {
    margin-bottom: 0.5em;
  }

  &__total {
    border-top: 1px solid var(--clr-primary-independence);
    padding-top: 0.75em;
    margin-top: 0.75em;

    p {
      color: var(--clr-primary-space-cadet);
    }
  }
}
</style>
