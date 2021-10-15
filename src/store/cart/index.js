const cart = {
  state: {
    cartItems: [],
    tax: 0.06,
  },
  mutations: {
    addToCart(state, payload) {
      // check if item already exists in cart
      let cartItem = state.cartItems.find(
        (item) => item.product.id === payload.product.id
      );
      // if item exists in cart, then just up the amount
      if (cartItem) {
        cartItem.quantity += payload.quantity;
      } else {
        // add the item to the cart if it doesn't exist yet
        state.cartItems.push(payload);
      }
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cartItems.indexOf(Number(payload.id));
      state.cartItems.splice(indexToDelete, 1);
    },
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
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
    // total: (state) => {
    //
    // }
  },
};

export default cart;
