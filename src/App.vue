<template>
  <div class="app">
    <Navbar class="navbar" />
    <main class="main-content">
      <router-view />
    </main>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">

@use './assets/styles/main';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  .main-content {
    flex-grow: 1;
  }
  
  .footer {
    flex-shrink: 0;
  }
}

</style>
