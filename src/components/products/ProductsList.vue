<template>
  <div class="product__list">
    <article
      class="product__item"
      v-for="product in products"
      :key="product.id"
    >
      <img
        class="product__image"
        :src="getImagePath(product.imageUrl)"
        :alt="product.name"
        @click.prevent="viewProduct(product.id)"
      />
      <div class="product__info">
        <h3>{{ product.name }}</h3>
        <small>{{ product.brand }}</small>
      </div>
      <div class="product__buy">
        <p>&euro; {{ product.price }}</p>
        <button class="btn btn--cart" @click.prevent="buyProduct(product.id)">
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
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  mixins: [image],
  components: {
    PhShoppingCart,
  },
  created() {
    this.$store.dispatch("getAllProductsByAnimal", { name: this.name });
  },
  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },
  methods: {
    viewProduct(productId) {
      this.$router.push("/" + this.name + "/product-id=" + productId);
    },
    buyProduct(productId) {
      console.log(productId);
    },
  },
};
</script>

<style scoped lang="scss">
.product {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    grid-gap: 1.5rem;
  }

  &__item {
    padding: 1.5em;
    box-shadow: 0 0 20px var(--clr-neutral-light-gray);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5fr 2fr 1fr;

    &:hover,
    &:focus {
      outline: 2px solid var(--clr-primary-space-cadet);
    }
  }

  &__image {
    cursor: pointer;
  }

  &__info {
    //background-color: aqua;
    h3 {
      font-family: var(--ff-accent);
      font-size: var(--fs-20pt);
      color: var(--clr-primary-independence);
      line-height: 1.2;
      padding-top: 1em;
    }

    small {
      color: var(--clr-primary-heliotrope-gray);
    }
  }

  &__buy {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: var(--fs-30pt);
      font-weight: var(--fw-semi-bold);
      line-height: 1;
      color: var(--clr-primary-space-cadet);
    }
  }
}
</style>
