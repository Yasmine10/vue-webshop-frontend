<template>
  <div class="cart container padding-page">
    <h3>Winkelwagen</h3>
    <div v-if="totalCartItems === 0">
      <p>Nog geen items in winkelmandje</p>
    </div>
    <div v-else class="cart__container">
      <ul class="cart__list">
        <li class="cart__item--header">
          <p></p>
          <p>Product</p>
          <p>Prijs</p>
          <p>Stuks</p>
          <p></p>
        </li>
        <li v-for="(item, index) in cartItems" :key="index" class="cart__item">
          <img
            class="cart__item--image"
            :src="getImagePath(item.product.imageUrl)"
            :alt="item.product.name"
          />
          <p class="cart__item--name">{{ item.product.name }}</p>
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
      <div class="cart__summary">
        <TotalPriceSummaryCard
          name="cart"
          :title="`${totalCartItems} ${title}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { PhTrash } from "phosphor-vue";
import { image } from "@/mixins/image";
import TotalPriceSummaryCard from "@/components/cart-checkout/TotalPriceSummaryCard";

export default {
  name: "Cart",
  components: {
    TotalPriceSummaryCard,
    PhTrash,
  },
  mixins: [image],
  data() {
    return {
      title: "product(en)",
    };
  },
  computed: {
    cartItems() {
      return this.$store.state.cart.cartItems;
    },
    totalCartItems() {
      return this.$store.getters.totalCartItems;
    },
  },
  methods: {
    removeProduct(productId) {
      this.$store.dispatch("removeFromCart", { id: productId });
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

.cart {
  h3 {
    padding-bottom: 1em;
  }

  &__container {
    display: flex;
    flex-direction: column;

    @include mq(tablet) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  @include mq(tablet) {
    &__list {
      flex: 2;
    }

    &__summary {
      flex: 1;

      & > * {
        margin-top: 0 !important;
      }
    }
  }

  @include mq(desktop) {
    &__list {
      flex: 3;
    }
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

    border-top: 1px solid var(--clr-primary-heliotrope-gray);
    padding-bottom: 0.5rem;

    @include mq(tablet) {
      padding-block: 1rem;
    }

    @include mq(desktop) {
      grid-template-columns: 1fr 0.5rem 2fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1.5rem;
      grid-template-areas:
        "image ... name price quantity remove"
        "image ... brand price quantity remove";
    }
  }

  &__item:last-child {
    border-bottom: 1px solid var(--clr-primary-heliotrope-gray);
  }

  &__item--image {
    grid-area: image;
    width: 80%;
    align-self: center;

    @include mq(desktop) {
      width: 4rem;
      margin-left: 1rem;
    }
  }
  &__item--name {
    grid-area: name;
    align-self: center;
    color: var(--clr-primary-independence);
    font-size: var(--fs-16pt);
    line-height: 1.1;
    padding-top: 0.75rem;

    @include mq(desktop) {
      padding-top: 0;
    }
  }
  &__item--brand {
    grid-area: brand;
    align-self: flex-start;
    color: var(--clr-primary-heliotrope-gray);
  }
  &__item--quantity {
    grid-area: quantity;

    @include mq(desktop) {
      justify-self: flex-end;
      align-self: center;
    }
  }

  &__item--price {
    grid-area: price;
    justify-self: flex-end;
    color: var(--clr-primary-space-cadet);

    @include mq(desktop) {
      justify-self: flex-end;
      align-self: center;
    }
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

    @include mq(desktop) {
      padding-top: 0.5rem;
      align-self: center;
    }
  }
}
</style>
