<template>
  <div class="login container padding-page">
    <div class="login-wrapper">
      <h3>Inloggen</h3>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="loginInfo.email"
            type="email"
            name="email"
            :class="{ 'is-valid': v$.loginInfo.email.$errors.length > 0 }"
          />
          <div
            v-for="(error, index) of v$.loginInfo.email.$errors"
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
            v-model="loginInfo.password"
            type="password"
            name="password"
            :class="{ 'is-valid': v$.loginInfo.password.$errors.length > 0 }"
          />
          <div
            v-for="(error, index) of v$.loginInfo.password.$errors"
            :key="index"
            class="error-group"
          >
            <small class="invalid-feedback">{{ error.$message }}</small>
          </div>
        </div>
        <button type="submit" class="btn-primary btn--login">Inloggen</button>
      </form>
    </div>
    <div class="register-wrapper">
      <h3>Account aanmaken</h3>
      <p>
        Heb je nog geen account? Registreer je dan hier en ontdek alle
        voordelen.
      </p>
      <div class="advantages">
        <ul role="list">
          <li class="advantages__item">
            <ph-check class="icon" :size="20" weight="bold" />
            <p>Sneller afrekenen</p>
          </li>
          <li class="advantages__item">
            <ph-check class="icon" :size="20" weight="bold" />
            <p>Bekijken van je geplaatste bestellingen</p>
          </li>
          <li class="advantages__item">
            <ph-check class="icon" :size="20" weight="bold" />
            <p>Retourneren binnen de 14 dagen!</p>
          </li>
        </ul>
      </div>
      <a class="btn-primary btn--register" @click="goToRegister">Registeren</a>
    </div>
  </div>
</template>

<script>
import { PhCheck } from "phosphor-vue";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
  name: "Login",
  components: {
    PhCheck,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      loginInfo: {
        email: {
          required: helpers.withMessage("Email is verplicht", required),
          email: helpers.withMessage("Moet een geldig email adres zijn", email),
        },
        password: {
          required: helpers.withMessage("Wachtwoord is verplicht", required),
        },
      },
    };
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
    async login() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }

      console.log("login gelukt!");
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

.padding-page {
  padding-top: 6rem;
}

.login {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @include mq(tablet) {
    grid-template-columns: 2fr 2fr;
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

.register-wrapper {
  padding-top: 2rem;

  @include mq(tablet) {
    padding-top: 0;
    padding-left: 3rem;
  }

  h3 {
    padding-bottom: 0.5em;
  }

  .advantages {
    &__item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .icon {
      color: var(--clr-accent-pine-green);
    }
  }
}

.btn--login,
.btn--register {
  margin-top: 1.5rem;
}
</style>
