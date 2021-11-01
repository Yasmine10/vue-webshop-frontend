<template>
  <div class="product__list">
    <p v-if="products.length === 0">Geen producten om weer te geven</p>
    <article v-else
      v-for="product in products"
      :key="product.id"
      class="product__item"
    >
      <img
        class="product__image"
        :src="getImagePath(product.imageUrl)"
        :alt="product.name"
        @click.prevent="viewProduct(product.id)"
      />
      <div class="product__info">
        <h5 class="product__name">{{ product.name }}</h5>
        <small>{{ product.brand }}</small>
      </div>
      <div class="product__buy">
        <h3 class="price">&euro; {{ product.price }}</h3>
        <button
          class="btn-primary btn--cart"
          @click.prevent="buyProduct(product)"
        >
          <PhShoppingCart :size="32" />
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import { PhShoppingCart } from "phosphor-vue";
import { image } from "@/mixins/image";

export default {
  name: "ProductsList",
  components: {
    PhShoppingCart,
  },
  mixins: [image],
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },
  watch: {
    products() {},
  },
  created() {
    this.$store.dispatch("getAllFilteredProducts", { animal: this.name });
  },
  methods: {
    viewProduct(productId) {
      this.$router.push("/" + this.name + "/product-id=" + productId);
    },
    buyProduct(product) {
      this.$store.dispatch("addToCart", { product: product, quantity: 1 });
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
    grid-template-rows: 1fr min-content;
    grid-gap: 1.5rem;
  }

  &__item {
    padding: 1.5em;
    box-shadow: 0 0 20px var(--clr-neutral-platinum);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 2fr 1fr;

    &:hover,
    &:focus {
      outline: 2px solid var(--clr-primary-space-cadet);
    }
  }

  &__image {
    padding-block: 1rem 1.5rem;
    cursor: pointer;
  }

  &__info {
    small {
      color: var(--clr-primary-heliotrope-gray);
    }
  }

  &__name {
    text-transform: inherit;
    padding-top: 0.5em;
  }

  &__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-size: 1.5rem;
    }

    .btn--cart {
      display: flex;
    }
  }
}
</style>
