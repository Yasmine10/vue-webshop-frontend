<template>
  <div class="footer-wrapper padding-page">
    <div class="container">
      <footer class="footer">
        <div class="footer__nav">
          <section class="footer__nav--products">
            <h5 class="footer__nav-title">Producten</h5>
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <router-link to="/dog" class="footer__nav-link">
                  Hond
                </router-link>
              </li>
              <li class="footer__nav-item">
                <router-link to="/cat" class="footer__nav-link">
                  Kat
                </router-link>
              </li>
              <li class="footer__nav-item">
                <router-link to="/rodent" class="footer__nav-link">
                  Knaagdier
                </router-link>
              </li>
              <li class="footer__nav-item">
                <router-link to="/bird" class="footer__nav-link">
                  Vogel
                </router-link>
              </li>
            </ul>
          </section>

          <section class="footer__nav--customer-service">
            <h5 class="footer__nav-title">Klantenservice</h5>
            <ul class="footer__nav-list">
              <li class="footer__nav-item">Betalen</li>
              <li class="footer__nav-item">Levertijd en verzendkosten</li>
              <li class="footer__nav-item">Retouren</li>
              <li class="footer__nav-item">Veelgestelde vragen</li>
            </ul>
          </section>

          <section class="footer__nav--company">
            <h5 class="footer__nav-title">Bedrijf</h5>
            <ul class="footer__nav-list">
              <li class="footer__nav-item">Over ons</li>
              <li class="footer__nav-item">Privacy verklaring</li>
              <li class="footer__nav-item">Algemene voorwaarden</li>
              <li class="footer__nav-item">Contact</li>
            </ul>
          </section>
        </div>
        <div class="social-links">
          <ul class="social-links__list">
            <li class="social-links__item">
              <a href="#" target="_blank">
                <ph-facebook-logo class="icon" :size="32" />
              </a>
            </li>
            <li class="social-links__item">
              <a href="#" target="_blank">
                <ph-twitter-logo class="icon" :size="32" />
              </a>
            </li>
            <li class="social-links__item">
              <a href="#" target="_blank">
                <ph-instagram-logo class="icon" :size="32" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { PhFacebookLogo, PhTwitterLogo, PhInstagramLogo } from "phosphor-vue";

export default {
  name: "Footer",
  components: {
    PhFacebookLogo,
    PhTwitterLogo,
    PhInstagramLogo,
  },
};
</script>

<style scoped lang="scss">
@use "../../assets/styles/utils" as *;

.footer-wrapper {
  background-color: var(--clr-primary-space-cadet);
  color: var(--clr-neutral-platinum);
}

.footer {
  display: flex;
  flex-direction: column;

  @include mq(desktop) {
    flex-direction: row;
  }
}

.footer__nav {
  flex-grow: 2;
  display: flex;
  flex-direction: column;

  &-title {
    color: var(--clr-primary-isabelline);
  }

  &-list {
    padding-bottom: 1.5rem;

    @include mq(desktop) {
      padding-bottom: 0;
    }
  }

  &-item {
    line-height: 1.8;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--clr-primary-silver-pink);
      text-decoration: underline;
    }
  }

  &-link {
    text-decoration: none;
    color: var(--clr-neutral-platinum);

    &:hover,
    &:focus {
      color: var(--clr-primary-silver-pink);
      text-decoration: underline;
    }
  }

  @include mq(tablet) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.social-links {
  flex-grow: 1;

  &__list {
    display: flex;
    justify-content: center;
    gap: 2rem;

    margin-top: 0;
    margin-bottom: 0;

    @include mq(desktop) {
      justify-content: flex-end;
    }
  }

  &__item a {
    color: var(--clr-primary-silver-pink);

    &:hover,
    &:focus {
      color: var(--clr-neutral-platinum);
    }
  }
}
</style>
