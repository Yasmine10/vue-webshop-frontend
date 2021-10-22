<template>
  <div class="checkout">
    <form class="checkout__form" @submit.prevent="addUserInfo">
      <div class="checkout__container">
        <section class="checkout__personal-info">
          <h3>Gegevens</h3>
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
          <h3>Adres</h3>
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
          <h3>Levering</h3>
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
                <ph-truck :size="64" weight="thin" />
                <div class="">
                  <h4>Standaard verzending</h4>
                  <p>3 - 5 werkdagen</p>
                  <span>€ 4.95</span>
                </div>
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
                <ph-truck :size="64" weight="thin" />
                <div class="">
                  <h4>Express verzending</h4>
                  <p>1 - 2 werkdagen</p>
                  <span>€ 8.95</span>
                </div>
              </label>
            </div>
          </div>
        </section>
        <section class="checkout__payment">
          <h3>Betaling</h3>
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
                <img class="" :src="bancontact" alt="Bancontact" />
                <div>
                  <h4>Bancontact</h4>
                  <p>FREE</p>
                </div>
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
                <img class="" :src="paypal" alt="Paypal" />
                <div>
                  <h4>PayPal</h4>
                  <p>FREE</p>
                </div>
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
      await this.$store.dispatch("isCheckoutSuccess", true);
      await this.$store.dispatch("resetCart");

      console.log("ok to checkout");
    },
  },
};
</script>

<style scoped lang="scss">
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

  .form-group {
    display: flex;
    flex-direction: column;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    outline: 1px solid var(--clr-neutral-light-gray);
    padding: 1rem;
  }

  .payment-label img {
    width: 25%;
  }
}

@media (min-width: 768px) {
  .checkout {
    form {
      flex-direction: row;
      gap: 2rem;
    }

    &__summary {
      margin-top: 0;
    }
  }
}

@media (min-width: 950px) {
  .checkout {
    &__container {
      flex: 2;
    }

    &__summary {
      flex: 1;
      margin-top: 0;
    }
  }
}

@media (min-width: 1200px) {
  .checkout {
    &__container {
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
      //margin-left: 2rem;
    }

    &__payment {
      grid-area: payment;
      //margin-left: 2rem;
    }
  }
}
</style>
