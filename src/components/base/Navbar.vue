<template>
  <div class="nav-wrapper">
    <nav class="nav container">
      <div class="nav__toggle">
        <button v-if="!isToggled" class="nav__toggle-icon" @click="toggleMenu">
          <PhList :size="32" />
        </button>
        <button v-else class="nav__toggle-icon" @click="toggleMenu">
          <PhX :size="32" />
        </button>
      </div>
      <ul class="nav__list" :class="{ 'nav__list--show': isToggled }">
        <router-link class="nav__item" to="/home" active-class="active"
          >Home</router-link
        >
        <router-link class="nav__item" to="/dog" active-class="active"
          >Hond</router-link
        >
        <router-link class="nav__item" to="/cat" active-class="active"
          >Kat</router-link
        >
        <router-link class="nav__item" to="/rodent" active-class="active"
          >Knaagdier</router-link
        >
        <router-link class="nav__item" to="/bird" active-class="active"
          >Vogel</router-link
        >
      </ul>
    </nav>
  </div>
</template>

<script>
import { PhList, PhX } from "phosphor-vue";

export default {
  name: "Navbar",
  components: {
    PhList,
    PhX,
  },
  data() {
    return {
      isToggled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isToggled = !this.isToggled;
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:map";
@use "../../assets/styles/global" as *;
@use "../../assets/styles/utils" as *;

.nav-wrapper {
  background-color: var(--clr-primary-silver-pink);
  width: 100%;
}

.nav {
  padding-block: 0.5rem;

  &__toggle {
    @include mq(tablet) {
      display: none;
    }
  }

  &__toggle-icon {
    all: unset;
    display: flex;
    color: var(--clr-neutral-white);
    cursor: pointer;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    visibility: hidden;
    height: 0;
    margin: 0;

    @include mq(tablet) {
      flex-direction: row;
      gap: 3.5em;
      visibility: visible;
      height: initial;
      margin: inherit;
    }
  }

  &__list--show {
    visibility: visible;
    height: initial;
    margin: inherit;
    padding-block: 1rem;
  }

  &__item {
    text-decoration: none;
    color: var(--clr-neutral-white);
    font-weight: map.get($fontweights, "bold");

    &:hover,
    &:focus,
    .active {
      color: var(--clr-primary-space-cadet);
      font-weight: map.get($fontweights, "bold");
    }
  }
}
</style>
