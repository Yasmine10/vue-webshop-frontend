<template>
  <div class="home padding-page">
    <div class="image-container">
      <div class="home__header container">
        <h1>Welkom!</h1>
        <img class="home-image" src="../assets/images/home-banner2.png" alt="dogs in a row" />
      </div>
    </div>
    <div class="container">
      <h3>Home page in opbouw</h3>
      <div class="promo">
        <div>
          <img src="../assets/images/home-catfood.jpg" alt="catfood" />
        </div>
        <div>
          <img src="../assets/images/home-catfood2.jpg" alt="catfood" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created() {
    this.$store.dispatch("isCheckoutSuccess", false);
  },
};
</script>

<style scoped lang="scss">
.image-container {
  background-color: hsl(207, 56%, 89%);
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-family: var(--ff-accent);
    font-size: 42pt;
    color: var(--clr-primary-independence);
    padding-top: 2rem;
  }
}

.home {
  &__header {
  
  }
  
  h3 {
    text-align: center;
    padding-bottom: 1em;
  }
}

.home-image {
  max-width: 60%;
  margin: 0 auto;
}

.promo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
