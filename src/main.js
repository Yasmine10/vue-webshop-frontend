import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "@vuelidate/core";

createApp(App).use(store).use(router).use(Vuelidate).mount("#app");
