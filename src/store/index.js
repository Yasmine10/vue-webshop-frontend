import { createStore } from "vuex";
import products from "./products/index";
import cart from "./cart/index";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart
  },
});
