<template>
  <div class="checkout">
    <form class="checkout__form" @submit.prevent="addUserInfo">
      <div class="checkout__container">
        <section class="checkout__personal-info">
          <h4>Gegevens</h4>
          <div class="personal-info__content">
            <div class="form-group">
              <label>Voornaam</label>
              <input
                id="firstname"
                v-model="v$.personalInfo.firstname.$model"
                type="text"
                name="firstname"
                :class="{
                  'is-valid': v$.personalInfo.firstname.$errors.length > 0,
                }"
              />
              <div
                v-for="(error, index) of v$.personalInfo.firstname.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
            <div class="form-group">
              <label>Achternaam</label>
              <input
                id="lastname"
                v-model="personalInfo.lastname"
                type="text"
                name="lastname"
                :class="{
                  'is-valid': v$.personalInfo.lastname.$errors.length > 0,
                }"
              />
              <div
                v-for="(error, index) of v$.personalInfo.lastname.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
            <div class="form-group">
              <label>E-mail</label>
              <input
                id="email"
                v-model="personalInfo.email"
                type="email"
                name="email"
                :class="{
                  'is-valid': v$.personalInfo.email.$errors.length > 0,
                }"
              />
              <div
                v-for="(error, index) of v$.personalInfo.email.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
          </div>
        </section>
        <section class="checkout__address">
          <h4>Adres</h4>
          <div class="address__content">
            <div class="form-group">
              <label>Straat</label>
              <input
                id="street"
                v-model="address.street"
                type="text"
                name="street"
                :class="{ 'is-valid': v$.address.street.$errors.length > 0 }"
              />
              <div
                v-for="(error, index) of v$.address.street.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
            <div class="form-group">
              <label>Huisnummer</label>
              <input
                id="streetnumber"
                v-model="address.streetnumber"
                type="text"
                name="streetnumber"
                :class="{
                  'is-valid': v$.address.streetnumber.$errors.length > 0,
                }"
              />
              <div
                v-for="(error, index) of v$.address.streetnumber.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
            <div class="form-group">
              <label>Postcode</label>
              <input
                id="postalcode"
                v-model="address.postalcode"
                type="text"
                name="postalcode"
                :class="{
                  'is-valid': v$.address.postalcode.$errors.length > 0,
                }"
              />
              <div
                v-for="(error, index) of v$.address.postalcode.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
            <div class="form-group">
              <label>Plaats</label>
              <input
                id="city"
                v-model="address.city"
                type="text"
                name="city"
                :class="{ 'is-valid': v$.address.city.$errors.length > 0 }"
              />
              <div
                v-for="(error, index) of v$.address.city.$errors"
                :key="index"
                class="error-group"
              >
                <small class="invalid-feedback">{{ error.$message }}</small>
              </div>
            </div>
          </div>
        </section>
        <section class="checkout__delivery">
          <h4>Levering</h4>
          <div class="delivery__content">
            <div class="form-group">
              <input
                id="normal"
                v-model="delivery"
                type="radio"
                name="delivery"
                value="normal"
              />
              <label for="normal" class="delivery-label">
                <ph-truck
                  :size="64"
                  weight="thin"
                  class="delivery__item-icon"
                />
                <p class="delivery__item-title">Standaard verzending</p>
                <p class="delivery__item-time">3 - 5 werkdagen</p>
                <span class="delivery__item-price">€ 4.95</span>
              </label>
            </div>
            <div class="form-group">
              <input
                id="express"
                v-model="delivery"
                type="radio"
                name="delivery"
                value="express"
              />
              <label for="express" class="delivery-label">
                <ph-truck
                  :size="64"
                  weight="thin"
                  class="delivery__item-icon"
                />
                <p class="delivery__item-title">Express verzending</p>
                <p class="delivery__item-time">1 - 2 werkdagen</p>
                <span class="delivery__item-price">€ 8.95</span>
              </label>
            </div>
          </div>
        </section>
        <section class="checkout__payment">
          <h4>Betaling</h4>
          <div class="payment__content">
            <div class="form-group">
              <input
                id="bancontact"
                v-model="payment"
                type="radio"
                name="payment"
                value="bancontact"
              />
              <label for="bancontact" class="payment-label">
                <img
                  class="payment__item-image"
                  :src="bancontact"
                  alt="Bancontact"
                />
                <p class="payment__item-title">Bancontact</p>
                <p class="payment__item-price">FREE</p>
              </label>
            </div>
            <div class="form-group">
              <input
                id="paypal"
                v-model="payment"
                type="radio"
                name="payment"
                value="paypal"
              />
              <label for="paypal" class="payment-label">
                <img class="payment__item-image" :src="paypal" alt="Paypal" />
                <p class="payment__item-title">PayPal</p>
                <p class="payment__item-price">FREE</p>
              </label>
            </div>
          </div>
        </section>
      </div>
      <div class="checkout__summary">
        <TotalPriceSummaryCard
          name="checkout"
          :title="title"
          @checkout="addUserInfo"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { PhTruck } from "phosphor-vue";
import bancontact from "@/assets/images/bancontact.png";
import paypal from "@/assets/images/paypal.png";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import TotalPriceSummaryCard from "@/components/cart-checkout/TotalPriceSummaryCard";

export default {
  name: "CheckoutForm",
  components: {
    PhTruck,
    TotalPriceSummaryCard,
  },
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      bancontact: bancontact,
      paypal: paypal,
      personalInfo: {
        firstname: "",
        lastname: "",
        email: "",
      },
      address: {
        street: "",
        streetnumber: "",
        postalcode: "",
        city: "",
      },
      delivery: "",
      payment: "",
    };
  },
  validations() {
    return {
      personalInfo: {
        firstname: {
          required: helpers.withMessage("Voornaam is verplicht", required),
        },
        lastname: {
          required: helpers.withMessage("Achternaam is verplicht", required),
        },
        email: {
          required: helpers.withMessage("Email is verplicht", required),
          email: helpers.withMessage("Moet een geldig email adres zijn", email),
        },
      },
      address: {
        street: {
          required: helpers.withMessage("Straat is verplicht", required),
        },
        streetnumber: {
          required: helpers.withMessage("Huisnummer is verplicht", required),
        },
        postalcode: {
          required: helpers.withMessage("Postcode is verplicht", required),
        },
        city: {
          required: helpers.withMessage("Gemeente is verplicht", required),
        },
      },
    };
  },
  watch: {
    delivery(value) {
      this.$store.dispatch("updateDeliveryCosts", value);
    },
    payment(value) {
      this.$store.dispatch("updatePaymentMethod", value);
    },
  },
  created() {
    // set default values
    this.delivery = "normal";
    this.$store.dispatch("updateDeliveryCosts", "normal");
    this.payment = "bancontact";
    this.$store.dispatch("updatePaymentMethod", "bancontact");
  },
  methods: {
    async addUserInfo() {
      console.log("ready to checkout");

      window.scroll({
        top: 0,
        behavior: "smooth",
      });

      const isFormCorrect = await this.v$.$validate();
      console.log(isFormCorrect);
      if (!isFormCorrect) {
        return;
      }

      await this.$store.dispatch("saveUserInfo", {
        firstname: this.personalInfo.firstname,
        lastname: this.personalInfo.lastname,
        email: this.personalInfo.email,
        street: this.address.street,
        streetnumber: this.address.streetnumber,
        postalcode: this.address.postalcode,
        city: this.address.city,
      });

      await this.$store.dispatch("saveOrder", {
        user: this.$store.state.user.user,
        address: this.$store.state.user.address,
      });

      let orderItems = [];
      this.$store.state.cart.cartItems.map((item) => {
        orderItems.push({
          quantity: item.quantity,
          order: {
            id: this.$store.state.cart.orderId,
          },
          product: {
            id: item.product.id,
          },
        });
      });

      await this.$store.dispatch("saveOrderItems", orderItems);

      await this.$store.dispatch("isCheckoutSuccess", true);
      await this.$store.dispatch("resetCart");

      console.log("ok to checkout");
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../../assets/styles/global" as *;
@use "../../assets/styles/utils" as *;

.checkout {
  form {
    display: flex;
    flex-direction: column;
  }

  &__personal-info,
  &__address,
  &__delivery,
  &__payment {
    margin-bottom: 2rem;
  }

  h4 {
    margin-bottom: 1em;
  }

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  input[type="radio"]:checked + .payment-label,
  input[type="radio"]:checked + .delivery-label {
    outline: 2px solid var(--clr-primary-silver-pink);
  }

  .delivery-label,
  .payment-label {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 1rem;
    outline: 1px solid var(--clr-neutral-platinum);
    padding: 1rem;
  }

  .delivery-label {
    grid-template-rows: 1fr 2rem 2rem;
    grid-template-areas:
      "icon title"
      "icon time"
      "icon price";

    .delivery {
      &__item-icon {
        grid-area: icon;
        justify-self: center;
        align-self: center;
      }

      &__item-title {
        grid-area: title;
        font-weight: map.get($fontweights, "semi-bold");
        color: var(--clr-primary-space-cadet);
      }

      &__item-time {
        grid-area: time;
      }

      &__item-price {
        grid-area: price;
      }
    }
  }

  .payment-label {
    grid-template-rows: repeat(2, 2rem);
    grid-template-areas:
      "image title"
      "image price";
    column-gap: 2rem;

    .payment {
      &__item-image {
        grid-area: image;
        justify-self: center;
        align-self: center;
      }

      &__item-title {
        grid-area: title;
        align-self: flex-end;
        font-weight: map.get($fontweights, "semi-bold");
        color: var(--clr-primary-space-cadet);
      }

      &__item-price {
        grid-area: price;
      }
    }
  }
}

@include mq(tablet) {
  .checkout {
    form {
      flex-direction: row;
      flex-basis: 55%;
      gap: 2rem;
    }

    &__summary {
      flex-basis: 40%;
      flex-shrink: 0;
      & > * {
        margin-top: 0 !important;
      }
    }
  }
}

@include mq(desktop) {
  .checkout {
    &__container {
      flex: 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1.5fr;
      grid-template-areas:
        "info delivery"
        "address payment";
      grid-gap: 2rem;
      grid-auto-flow: row dense;
    }

    &__summary {
      flex: 1;
      margin-top: 0;
    }

    &__personal-info,
    &__address,
    &__delivery,
    &__payment {
      margin-bottom: 0 !important;
    }

    &__personal-info {
      grid-area: info;
    }

    &__address {
      grid-area: address;
    }
    &__delivery {
      grid-area: delivery;
    }

    &__payment {
      grid-area: payment;
    }
  }
}
</style>
