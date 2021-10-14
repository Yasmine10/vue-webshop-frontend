import axios from "axios";

const products = {
  state: {
    products: [],
    categories: [],
  },
  mutations: {
    getAllProductsByAnimal(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getAllProductsByAnimal({ commit }, payload) {
      axios
        .get(process.env.VUE_APP_API_URL + "product/animal=" + payload.name)
        .then((response) => {
          console.log(response.data);
          commit("getAllProductsByAnimal", response.data);
        });
    },
  },
  getters: {},
};

export default products;
