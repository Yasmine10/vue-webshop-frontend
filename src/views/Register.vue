<template>
  <div class="register container padding-page">
    <div class="register-wrapper">
      <h3>Account aanmaken</h3>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="firstname">Voornaam</label>
          <input
            id="firstname"
            v-model="registerInfo.firstname"
            type="text"
            name="firstname"
            :class="{
              'is-valid': v$.registerInfo.firstname.$errors.length > 0,
            }"
          />
          <div
            v-for="(error, index) of v$.registerInfo.firstname.$errors"
            :key="index"
            class="error-group"
          >
            <small class="invalid-feedback">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <label for="lastname">Achternaam</label>
          <input
            id="lastname"
            v-model="registerInfo.lastname"
            type="text"
            name="lastname"
            :class="{ 'is-valid': v$.registerInfo.lastname.$errors.length > 0 }"
          />
          <div
            v-for="(error, index) of v$.registerInfo.lastname.$errors"
            :key="index"
            class="error-group"
          >
            <small class="invalid-feedback">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="registerInfo.email"
            type="email"
            name="email"
            :class="{ 'is-valid': v$.registerInfo.email.$errors.length > 0 }"
          />
          <div
            v-for="(error, index) of v$.registerInfo.email.$errors"
            :key="index"
            class="error-group"
          >
            <small class="invalid-feedback">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <label for="password">Wachtwoord</label>
          <input
            id="password"
            v-model="registerInfo.password"
            type="password"
            name="password"
            :class="{ 'is-valid': v$.registerInfo.password.$errors.length > 0 }"
          />
          <div
            v-for="(error, index) of v$.registerInfo.password.$errors"
            :key="index"
            class="error-group"
          >
            <small class="invalid-feedback">{{ error.$message }}</small>
          </div>
        </div>
        <div class="form-group">
          <label for="confirm-password">Bevestig wachtwoord</label>
          <input
            id="confirm-password"
            v-model="registerInfo.confirmPassword"
            type="password"
            name="confirm-password"
            :class="{
              'is-valid': v$.registerInfo.confirmPassword.$errors.length > 0,
            }"
          />
          <div
            v-for="(error, index) of v$.registerInfo.confirmPassword.$errors"
            :key="index"
            class="error-group"
          >
            <small class="invalid-feedback">{{ error.$message }}</small>
          </div>
        </div>
        <button type="submit" class="btn-primary btn--register">
          Registreren
        </button>
      </form>
    </div>
    <div class="login-wrapper">
      <h3>Inloggen</h3>
      <p>Heb je al een account? Log dan hier in.</p>
      <a class="btn-primary btn--login" @click="goToLogin">Inloggen</a>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

export default {
  name: "Register",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      registerInfo: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations() {
    return {
      registerInfo: {
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
        password: {
          required: helpers.withMessage("Wachtwoord is verplicht", required),
          min: helpers.withMessage(
            "Wachtwoord moet uit minstens 8 karakters bestaan",
            minLength(8)
          ),
        },
        confirmPassword: {
          required: helpers.withMessage(
            "Bevestig wachtwoord is verplicht",
            required
          ),
          sameAsPassword: helpers.withMessage(
            "Moet hetzelfde zijn als bovenstaand wachtwoord",
            sameAs(this.registerInfo.password)
          ),
        },
      },
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login").then(() => {
      
      });
    },
    async register() {
      
      console.log(this.registerInfo.password);
      console.log(this.registerInfo.confirmPassword);
      
      // validation
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }

      // send to vuex store
      this.$store.dispatch("registerUser", this.registerInfo);

      console.log("register is gelukt!");
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

.padding-page {
  padding-top: 6rem;
}

.register {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;

  @include mq(tablet) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  &-wrapper {
    border-bottom: 1px solid var(--clr-primary-heliotrope-gray);
    padding-bottom: 2rem;

    @include mq(tablet) {
      border-bottom: none;
      border-right: 1px solid var(--clr-primary-heliotrope-gray);
      padding-bottom: 0;
      padding-right: 3rem;
    }
  }
}

.login-wrapper {
  padding-top: 2rem;

  @include mq(tablet) {
    padding-top: 0;
    padding-left: 3rem;
  }

  h3 {
    padding-bottom: 0.5em;
  }
}

.btn--login,
.btn--register {
  margin-top: 2.5rem;
}
</style>
