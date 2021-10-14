const cart = {
  state: {
    cartItems: [],
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
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
    },
  },
  getters: {},
};

export default cart;
