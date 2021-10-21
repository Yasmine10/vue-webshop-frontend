<template>
  <div class="total-price-summary">
    <h5 class="summary__title">{{ title }}</h5>
    <div class="summary__subtotal">
      <p>Subtotaal</p>
      <p>&euro; {{ subtotalCartItems }}</p>
    </div>
    <div class="summary__delivery-costs" v-if="name === 'checkout'">
      <p>Verzendkosten</p>
      <p>&euro; {{ deliveryCosts }}</p>
    </div>
    <div class="summary__taxes">
      <p>BTW ({{ tax }}%)</p>
      <p>&euro; {{ taxes }}</p>
    </div>
    <div class="summary__total">
      <h5>Totaal</h5>
      <p>&euro; {{ subtotalCartItems }}</p>
    </div>
    <a class="btn btn--next" @click.prevent="checkout"
      >Doorgaan met bestellen</a
    >
  </div>
</template>

<script>
export default {
  name: "TotalPriceSummaryCard",
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

.summary {
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
