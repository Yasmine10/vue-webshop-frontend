<template>
  <div class="login container padding-page">
    <div class="login-wrapper">
      <h3>Inloggen</h3>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Wachtwoord</label>
          <input id="password" type="password" name="password" />
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

export default {
  name: "Login",
  components: {
    PhCheck,
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

.login {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

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
