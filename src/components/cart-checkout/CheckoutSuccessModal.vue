<template>
  <div v-show="showModal" class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <div>
          <ph-shopping-bag class="icon" :size="128" />
          <h3 class="h3">Bedankt voor je bestelling!</h3>
          <p class="p">Je krijgt zo snel mogelijk een bestelbevestiging via email.</p>
          <a class="btn-secondary" @click.prevent="closeModal"
            >Terug naar de startpagina</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhShoppingBag } from "phosphor-vue";

export default {
  name: "CheckoutSuccessModal",
  components: {
    PhShoppingBag,
  },
  props: {
    showModal: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    closeModal() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped lang="scss">

@use "../../assets/styles/utils" as *;

.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 300ms ease;
  overflow: hidden;
  overflow-y: paged-y-controls;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10rem auto;
    margin-inline: 1.25rem;
    //max-width: content-box;

    @include mq(tablet) {
      margin: 10rem auto;
      width: 30rem;
    }

    @include mq(desktop) {
      margin: 15rem auto;
      width: 40rem;
    }
  }

  &__container {
    background-color: white;
    width: min-content;
    flex: 1;
    padding: 2rem;
    transition: all 300ms ease;
  }

  &__header {
    display: flex;
    justify-content: flex-end;
  }

  h3 {
    color: var(--clr-primary-independence);
    line-height: 1;
    padding-bottom: 0.5em;
  }

  .icon {
    color: var(--clr-primary-independence);
  }

  .btn-secondary {
    display: inline-block;
    margin-top: 2em;
    margin-bottom: 1em;
  }
}
</style>
