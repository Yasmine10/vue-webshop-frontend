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
        <h3 class="product-name">{{ product.name }}</h3>
        <small>{{ product.brand }}</small>
        <p class="price">
          &euro; {{ product.price }} <small>(incl. BTW)</small>
        </p>
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
          <button class="btn btn--cart" @click.prevent="buyProduct">
            <ph-shopping-cart class="icon" :size="28" /> In winkelmandje
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
      <h4 class="product__description-title">Beschrijving</h4>
      <p class="product__description-text">{{ product.description }}</p>
    </div>
    <div class="product__filters">
      <div class="category">
        <h5>Categorie</h5>
        <p>{{ product.category.name }}</p>
      </div>
      <div class="animal">
        <h5>Dier</h5>
        <p>{{ product.animal.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PhCircleWavyCheck,
  PhCheck,
  PhShoppingCart,
} from "phosphor-vue";
import { image } from "@/mixins/image";

export default {
  name: "ProductDetail",
  mixins: [image],
  components: {
    PhCircleWavyCheck,
    PhCheck,
    PhShoppingCart,
  },
  data() {
    return {
      quantityData: {
        quantity: [],
        selectedQuantity: "",
      },
    };
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
  computed: {
    product() {
      return this.$store.state.products.product;
    },
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
.product {
  .go-back-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--clr-primary-heliotrope-gray);
    font-size: var(--fs-16pt);
  }

  &__main-info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-block: 3rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    @media (min-width: 1000px) {
      gap: 6rem;
    }
  }

  &__slider {
    flex-basis: 40%;
  }

  &__content {
    .in-stock {
      display: flex;
      align-items: center;
      color: var(--clr-accent-ocean-green);
      font-size: var(--fs-16pt);
      padding-top: 0.25em;

      span {
        margin-left: 0.5em;
      }
    }

    @media (min-width: 768px) {
      align-self: center;
    }

    @media (min-width: 1200px) {
      h3 {
        font-size: var(--fs-30pt);
      }
    }
  }

  &__add-to-cart {
    display: flex;
    justify-content: space-between;
    margin-block: 2rem;

    .icon {
      margin-right: 0.75em;
    }

    @media (min-width: 400px) {
      margin-block: 3rem;
      justify-content: flex-start;
      gap: 1rem;
    }
  }

  &__advantages {
    display: flex;
    font-size: var(--fs-16pt);
    padding-bottom: 0.25em;

    .icon {
      color: var(--clr-accent-ocean-green);
      margin-right: 0.5em;
    }
  }

  &__description-title {
    position: relative;
    margin-bottom: 0.5em;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 2.5rem;
      height: 3px;
      background-color: var(--clr-primary-silver-pink);
    }
  }

  &__description-text {
    font-size: var(--fs-16pt);
  }

  &__filters {
    font-size: var(--fs-16pt);
    margin-top: 2em;

    .category,
    .animal {
      display: grid;
      grid-template-columns: 5rem auto;
      align-items: center;
      grid-gap: 1.5rem;
    }

    h5 {
      text-transform: uppercase;
    }
  }
}

.price {
  font-size: var(--fs-24pt);
  padding-top: 1em;

  small {
    font-size: var(--fs-16pt);
  }
}
</style>
