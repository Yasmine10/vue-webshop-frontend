<template>
  <div v-show="showModal" class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <div class="modal__header">
          <button class="btn--close" @click.prevent="closeModal"><ph-x class="icon" :size="32" /></button>
        </div>
        <div>
          <ph-shopping-bag class="icon" :size="128" />
          <h1>Bedankt voor je bestelling!</h1>
          <p>Je krijgt zo snel mogelijk een bestelbevestiging via email.</p>
          <a class="btn btn-primary" @click.prevent="closeModal">Terug naar de startpagina</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PhX, PhShoppingBag } from "phosphor-vue";

export default {
  name: "CheckoutSuccessModal",
  props: {
    showModal: {
      required: true,
      type: Boolean,
    },
  },
  components: {
    PhX,
    PhShoppingBag,
  },
  methods: {
    closeModal() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 7.9rem;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.1);
  transition: opacity 300ms ease;
  overflow: hidden;
  overflow-y: paged-y-controls;

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    max-width: 50%;
  }

  &__container {
    background-color: white;
    width: 5rem;
    flex: 1;
    margin: 5rem auto;
    padding: 2rem;
    transition: all 300ms ease;
  }
  
  &__header {
    display: flex;
    justify-content: flex-end;
  }
  
  .btn--close {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .icon {
    color: var(--clr-primary-independence);
  }
  
  .btn-primary {
    display: inline-block;
    margin-top: 2em;
    margin-bottom: 1em;
  }
}
</style>
