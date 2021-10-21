import axios from "axios";

const cart = {
  state: {
    cartItems: [],
    tax: 0.06,
    deliveryCosts: {},
    paymentMethod: "",
    checkoutSuccess: false,
  },
  mutations: {
    addToCart(state, payload) {
      // check if item already exists in cart-checkout
      let cartItem = state.cartItems.find(
        (item) => item.product.id === payload.product.id
      );
      // if item exists in cart-checkout, then just up the amount
      if (cartItem) {
        cartItem.quantity += payload.quantity;
      } else {
        // add the item to the cart-checkout if it doesn't exist yet
        state.cartItems.push(payload);
      }
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cartItems.indexOf(Number(payload.id));
      state.cartItems.splice(indexToDelete, 1);
    },
    resetCart(state) {
      state.cartItems = [];
      state.deliveryCosts = {};
      state.paymentMethod = "";
    },
    updateDeliveryCosts(state, payload) {
      if (payload === "normal") {
        state.deliveryCosts = { method: payload, price: 4.95 };
      } else {
        state.deliveryCosts = { method: payload, price: 8.95 };
      }
    },
    updatePaymentMethod(state, payload) {
      state.paymentMethod = payload;
    },
    isCheckoutSuccess(state, payload) {
      state.checkoutSuccess = payload;
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
    },
    resetCart({ commit }) {
      commit("resetCart");
    },
    updateDeliveryCosts({ commit }, payload) {
      commit("updateDeliveryCosts", payload);
    },
    updatePaymentMethod({ commit }, payload) {
      commit("updatePaymentMethod", payload);
    },
    isCheckoutSuccess({ commit }, payload) {
      commit("isCheckoutSuccess", payload);
    },
    async saveOrder({ state, getters, commit }, payload) {
      await axios.post(
        process.env.VUE_APP_API_URL + "order",
        {
          totalPrice: Number(getters.total),
          shippingPrice: state.deliveryCosts.price,
          shippingMethod: state.deliveryCosts.method,
          paymentMethod: state.paymentMethod,
          user: payload.user,
          address: payload.address,
        },
        { headers: { content: "application/json" } }
      );

      // let orderItems = this.cartItems.map((item) => {
      //   item.order = order.data;
      // });

      // await axios.post(process.env.VUE_APP_API_URL + "order-item", orderItems, { headers: { content: "application/json" },);
      commit();
    },
  },
  getters: {
    totalCartItems: (state) => {
      return state.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    subtotalCartItems: (state) => {
      return state.cartItems
        .reduce((total, item) => total + item.product.price * item.quantity, 0)
        .toFixed(2);
    },
    taxes: (state, getters) => {
      return (getters.subtotalCartItems * state.tax).toFixed(2);
    },
    total: (state, getters) => {
      return (
        Number(getters.subtotalCartItems) + state.deliveryCosts.price
      ).toFixed(2);
    },
  },
};

export default cart;
