<template>
  <div class="product container padding-page">
    <a href="" class="go-back-link" @click.prevent="goBack"
      >Terug naar overzicht</a
    >
    <div class="product__main-info">
      <div class="product__slider">
        <img :src="getImagePath(product.imageUrl)" :alt="product.name" />
      </div>
      <div class="product__content">
        <h3 class="product-name h3">{{ product.name }}</h3>
        <small class="product-brand">{{ product.brand }}</small>
        <h3 class="price h3">
          &euro; {{ product.price }} <span>(incl. BTW)</span>
        </h3>
        <p class="in-stock">
          <ph-circle-wavy-check :size="20" weight="fill" />
          <span>Op voorraad</span>
        </p>
        <div class="product__add-to-cart">
          <select
            v-model="quantityData.selectedQuantity"
            class="select-quantity-product"
          >
            <option
              v-for="(number, index) in quantityData.quantity"
              :key="index"
              :value="number"
            >
              {{ number }}
            </option>
          </select>
          <button class="btn-primary btn--cart" @click.prevent="buyProduct">
            <ph-shopping-cart class="icon" :size="28" />
            <span>In winkelmandje</span>
          </button>
        </div>
        <div class="product__advantages">
          <ph-check class="icon" :size="20" weight="bold" />
          <p>Levertijd 1 tot 3 werkdagen</p>
        </div>
        <div class="product__advantages">
          <ph-check class="icon" :size="20" weight="bold" />
          <p>Gratis retourneren binnen 14 dagen!</p>
        </div>
      </div>
    </div>
    <div class="product__description">
      <h4 class="product__description-title h4">Beschrijving</h4>
      <p class="product__description-text">{{ product.description }}</p>
    </div>
    <div class="product__filters">
      <div class="category">
        <h5 class="h5">Categorie</h5>
        <p>{{ product.category.name }}</p>
      </div>
      <div class="animal">
        <h5 class="h5">Dier</h5>
        <p>{{ product.animal.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { PhCircleWavyCheck, PhCheck, PhShoppingCart } from "phosphor-vue";
import { image } from "@/mixins/image";

export default {
  name: "ProductDetail",
  components: {
    PhCircleWavyCheck,
    PhCheck,
    PhShoppingCart,
  },
  mixins: [image],
  data() {
    return {
      quantityData: {
        quantity: [],
        selectedQuantity: "",
      },
    };
  },
  computed: {
    product() {
      return this.$store.state.products.product;
    },
  },
  created() {
    this.$store.dispatch("getProductById", { id: this.$route.params.id });

    let quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.quantityData.quantity = Object.assign(
      {},
      this.quantityData.quantity,
      quantity
    );
    this.quantityData.selectedQuantity = this.quantityData.quantity[0];
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    buyProduct() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: this.quantityData.selectedQuantity,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../assets/styles/utils" as *;
@use "../assets/styles/global" as *;

.product {
  .go-back-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--clr-primary-heliotrope-gray);
    font-size: map.get($fontsizes-desktop, "body");

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &__main-info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-block: 3rem;

    @include mq(tablet) {
      flex-direction: row;
    }

    @include mq(desktop) {
      gap: 6rem;
    }
  }

  &__slider {
    flex-basis: 40%;
  }

  &__content {
    .product-name {
      color: var(--clr-primary-independence);
    }

    .product-brand {
      color: var(--clr-primary-heliotrope-gray);
    }

    .in-stock {
      display: flex;
      align-items: center;
      color: var(--clr-accent-pine-green);
      font-size: map.get($fontsizes-desktop, "body");
      padding-top: 0.25em;

      span {
        margin-left: 0.5em;
      }
    }

    @include mq(tablet) {
      align-self: center;
    }
  }

  &__add-to-cart {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block: 2rem;

    .btn--cart {
      display: flex;
      align-items: center;
    }

    .icon {
      margin-right: 0.75em;
    }

    @media (min-width: 400px) {
      margin-block: 3rem;
      flex-direction: row;
    }
  }

  &__advantages {
    display: flex;
    align-items: center;
    font-size: map.get($fontsizes-desktop, "body");
    padding-bottom: 0.25em;

    .icon {
      color: var(--clr-accent-pine-green);
      margin-right: 0.75em;
    }
  }

  &__description-title {
    margin-bottom: 0.5em;
  }

  &__filters {
    margin-top: 2em;

    .category,
    .animal {
      display: grid;
      grid-template-columns: 7rem auto;
      align-items: center;
      grid-gap: 1.5rem;
    }

    .h5 {
      font-size: map.get($fontsizes-desktop, "body");
    }
  }
}

.price {
  padding-top: 1em;
  padding-bottom: 0.25em;

  span {
    font-size: map.get($fontsizes-desktop, "body");
  }
}
</style>
