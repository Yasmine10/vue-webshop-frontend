<template>
  <div class="cart container padding-page">
    <h2>Winkelwagen</h2>
    <div>
      <ul class="cart__list">
        <li class="cart__item--header">
          <p></p>
          <p>Product</p>
          <p>Prijs</p>
          <p>Stuks</p>
          <p></p>
        </li>
        <li class="cart__item" v-for="(item, index) in cartItems" :key="index">
          <img
            class="cart__item--image"
            :src="getImagePath(item.product.imageUrl)"
            :alt="item.product.name"
          />
          <h4 class="cart__item--name">{{ item.product.name }}</h4>
          <small class="cart__item--brand">{{ item.product.brand }}</small>
          <p class="cart__item--quantity">{{ item.quantity }}</p>
          <p class="cart__item--price">&euro; {{ item.product.price }}</p>
          <a
            class="cart__item--remove-btn"
            @click.prevent="removeProduct(item.product.id)"
          >
            <ph-trash class="icon" :size="24" />
          </a>
        </li>
      </ul>
    </div>
    <div class="cart__total-container">
      <h5 class="cart__title">{{ totalCartItems }} product(en)</h5>
      <div class="cart__subtotal">
        <p>Subtotaal</p>
        <p>&euro; {{ subtotalCartItems }}</p>
      </div>
      <div class="cart__taxes">
        <p>BTW ({{ tax }}%)</p>
        <p>&euro; {{ taxes }}</p>
      </div>
      <div class="cart__total">
        <h5>Totaal</h5>
        <p>&euro; {{ subtotalCartItems }}</p>
      </div>
      <a class="btn btn--order" @click.prevent="checkout"
        >Doorgaan met bestellen</a
      >
    </div>
  </div>
</template>

<script>
import { PhTrash } from "phosphor-vue";
import { image } from "@/mixins/image";

export default {
  name: "Cart",
  mixins: [image],
  components: {
    PhTrash,
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
    tax() {
      return this.$store.state.cart.tax * 100;
    },
    taxes() {
      return this.$store.getters.taxes;
    },
  },
  methods: {
    removeProduct(productId) {
      this.$store.dispatch("removeFromCart", { id: productId });
    },
    checkout() {
      this.$router.push("/checkout");
    },
  },
};
</script>

<style scoped lang="scss">
.cart {
  &__list {
  }
  
  &__item--header {
    display: none;
  }

  &__item {
    display: grid;
    grid-template-columns: 1fr 0.5rem 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.5rem 1.5rem;
    grid-template-areas:
      "image ... name name name"
      "image ... brand brand brand"
      "image ... quantity price remove";
    //align-items: center;
    //grid-gap: 0.5rem;
  }

  &__item {
    border-top: 1px solid var(--clr-primary-heliotrope-gray);
    padding-bottom: 0.5rem;
  }

  &__item:last-child {
    border-bottom: 1px solid var(--clr-primary-heliotrope-gray);
  }

  &__item--image {
    grid-area: image;
    width: 80%;
    align-self: center;
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

  &__total-container {
    background-color: var(--clr-primary-isabelline);
    padding: 1.5em;
    margin-top: 3rem;

    .btn--order {
      padding: 0.5rem 1rem;
      margin-top: 3rem;
    }

    p {
      color: var(--clr-primary-space-cadet);
    }
  }

  &__title {
    border-bottom: 1px solid var(--clr-primary-independence);
    padding-bottom: 0.75em;
    margin-bottom: 0.75em;
  }

  &__subtotal,
  &__taxes,
  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__subtotal {
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
