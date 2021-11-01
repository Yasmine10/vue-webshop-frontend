<template>
  <div class="register container padding-page">
    <div class="register-wrapper">
      <h3>Account aanmaken</h3>
      <form action="">
        <div class="form-group">
          <label for="firstname">Voornaam</label>
          <input id="firstname" type="text" name="firstname" />
        </div>
        <div class="form-group">
          <label for="lastname">Achternaam</label>
          <input id="lastname" type="text" name="lastname" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Wachtwoord</label>
          <input id="password" type="password" name="password" />
        </div>
        <div class="form-group">
          <label for="confirm-password">Bevestig wachtwoord</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
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
export default {
  name: "Register",
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
@use "../assets/styles/utils" as *;

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
