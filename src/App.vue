<template>
  <div class="app">
    <Header class="header" />
    <Navbar class="navbar" />
    <main class="main-content">
      <router-view />
    </main>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
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
