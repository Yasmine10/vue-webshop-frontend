<template>
  <div class="home">
    <section class="hero">
      <div class="hero__header container">
        <h1 class="h1">Welkom!</h1>
        <img
          class="hero__image"
          src="../assets/images/home/home-banner2.png"
          alt="dogs in a row"
        />
      </div>
    </section>

    <section class="categories container padding-section">
      <div
        class="categories__card"
        @click.prevent="goToCategory(categories.dog)"
      >
        <img
          class="categories__card--icon"
          src="../assets/images/home/dog.png"
          alt="dog icon"
        />
        <p class="categories__card--title text-uppercase text-bold">Hond</p>
      </div>
      <div
        class="categories__card"
        @click.prevent="goToCategory(categories.cat)"
      >
        <img
          class="categories__card--icon"
          src="../assets/images/home/cat.png"
          alt="cat icon"
        />
        <p class="categories__card--title text-uppercase text-bold">Kat</p>
      </div>
      <div
        class="categories__card"
        @click.prevent="goToCategory(categories.rodent)"
      >
        <img
          class="categories__card--icon"
          src="../assets/images/home/rabbit.png"
          alt="rabbit icon"
        />
        <p class="categories__card--title text-uppercase text-bold">
          Knaagdier
        </p>
      </div>
      <div
        class="categories__card"
        @click.prevent="goToCategory(categories.bird)"
      >
        <img
          class="categories__card--icon"
          src="../assets/images/home/bird.png"
          alt="bird icon"
        />
        <p class="categories__card--title text-uppercase text-bold">Vogel</p>
      </div>
    </section>

    <section class="products-preview container">
      <div class="products-preview__card">
        <img
          class="products-preview__image"
          src="../assets/images/home/home-catfood.png"
          alt="catfood"
        />
      </div>
      <div class="products-preview__card">
        <img
          class="products-preview__image"
          src="../assets/images/home/pet-accessories-still-life-concept-with-pet-dry-food.png"
          alt=""
        />
      </div>
      <div class="products-preview__card">
        <img
          class="products-preview__image"
          src="../assets/images/home/pet-accessories-still-life-with-food-bowl-various-treats.png"
          alt=""
        />
      </div>
      <div class="products-preview__card">
        <img
          class="products-preview__image"
          src="../assets/images/home/home-catfood2.png"
          alt="catfood"
        />
      </div>
    </section>
    <section class="newsletter container">
      <div class="newsletter__content">
        <h2 class="h2">Blijf op de hoogte</h2>
        <p>
          Schrijf je in voor de <strong>Pet World nieuwsbrief</strong> en je
          bent als eerste op de hoogte van all onze aanbiedingen en acties.
        </p>
        <form class="newsletter__form" @click.prevent="subscribeToNewsletter">
          <div class="form-group">
            <input
              id="email"
              v-model="emailNewsletter"
              type="email"
              name="email"
              placeholder="Vul hier je emailadres in ..."
              :class="{ 'is-valid': v$.emailNewsletter.$errors.length > 0 }"
            />
            <div
              v-for="(error, index) of v$.emailNewsletter.$errors"
              :key="index"
              class="error-group"
            >
              <small class="invalid-feedback">{{ error.$message }}</small>
            </div>
          </div>
          <button type="submit" class="btn-secondary">Inschrijven</button>
        </form>
      </div>
      <div class="newsletter__image-wrapper">
        <img
          class="newsletter__image"
          src="../assets/images/home/adorable-jack-russell-retriever-puppy-portrait.png"
          alt="Jack Russel smiling"
        />
      </div>
    </section>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
  name: "Home",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      categories: {
        dog: "dog",
        cat: "cat",
        rodent: "rodent",
        bird: "bird",
      },
      emailNewsletter: "",
    };
  },
  validations() {
    return {
      emailNewsletter: {
        required: helpers.withMessage("Email is verplicht", required),
        email: helpers.withMessage("Moet een geldig email adres zijn", email),
      },
    };
  },
  created() {
    this.$store.dispatch("isCheckoutSuccess", false);
  },
  methods: {
    goToCategory(route) {
      this.$router.push(`/${route}`);
    },
    async subscribeToNewsletter() {
      const isFormCorrect = await this.v$.$validate();
      console.log(isFormCorrect);
      if (!isFormCorrect) {
        return;
      }
      
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../assets/styles/utils" as *;
@use "../assets/styles/global" as *;

.hero {
  background-color: var(--clr-accent-beau-blue);
  text-align: center;

  .h1 {
    padding-top: 4rem;
    padding-bottom: 2rem;

    @include mq(tablet) {
      font-size: 46pt;
    }

    @include mq(desktop) {
      font-size: 50pt;
    }
  }

  &__image {
    min-width: 100%;
    max-width: 100%;
    margin: 0 auto;

    @include mq(desktop) {
      min-width: 60%;
      max-width: 60%;
    }
  }
}

.categories {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  &__card {
    flex-basis: 45%;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;

    box-shadow: 0 0 20px var(--clr-neutral-platinum);

    &--icon {
      width: 60%;
    }

    &--title {
      text-transform: uppercase;
      font-weight: bold;
      color: var(--clr-primary-independence);
    }

    @include mq(tablet) {
      flex-basis: 20%;
    }

    @include mq(desktop) {
      &--icon {
        width: 40%;
      }
      &--title {
        font-size: map.get($fontsizes-desktop, "h4");
      }
    }
  }
}

.products-preview {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;

  &__card {
    min-width: 100%;
    max-width: 100%;
    flex-basis: 100%;
  }

  @include mq(tablet) {
    flex-direction: row;
    justify-content: space-between;

    &__card {
      flex-basis: calc(50% - 1rem);
      min-width: calc(50% - 1rem);
      max-width: calc(50% - 1rem);
    }

    &__image {
      min-width: 100%;
    }
  }
}

.newsletter {
  display: flex;
  flex-direction: column;

  margin-top: 3rem;
  margin-bottom: 5rem;
  padding: 2rem 1rem 0 1rem;

  background-color: #deddd8;
  color: var(--clr-primary-independence);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    input {
      margin-top: 1rem;
    }

    .btn-secondary {
      margin-top: 1.5rem;
    }
  }

  &__image {
    min-width: 100%;
  }

  @include mq(tablet) {
    flex-direction: row-reverse;
    justify-content: space-evenly;

    &__content {
      flex-basis: 65%;
      padding-bottom: 2rem;
      padding-inline: 2rem;
    }

    &__image {
      flex-basis: 35%;
      min-width: 100%;
      justify-self: flex-end;
      padding-bottom: 0;
      margin-bottom: 0;
      margin-top: 4.75rem;
    }
  }

  @include mq(desktop) {
    gap: 2rem;
    &__content {
      flex-basis: 60%;
      padding-bottom: 0;
      max-width: 40rem;
    }

    &__image {
      flex-basis: 30%;
      margin-top: 0;
      //min-width: 120%;
      justify-self: flex-start;
      align-self: flex-start;
    }
  }
}
</style>
