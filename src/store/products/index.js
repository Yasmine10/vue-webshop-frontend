import axios from "axios";

const products = {
  state: {
    products: [],
    categories: [],
    brands: [],
    product: {},
  },
  mutations: {
    getAllProductsByAnimal(state, payload) {
      state.products = payload;
    },
    getAllCategoriesByAnimal(state, payload) {
      state.categories = payload;
    },
    getAllBrandsByAnimal(state, payload) {
      state.brands = [];
      payload.forEach((item) => state.brands.push(item.brand));
    },
    getProductById(state, payload) {
      state.product = payload;
    },
  },
  actions: {
    getAllProductsByAnimal({ commit }, payload) {
      axios
        .get(process.env.VUE_APP_API_URL + "product/animal=" + payload.name)
        .then((response) => {
          commit("getAllProductsByAnimal", response.data);
        })
        .catch((error) => console.log(error));
    },
    getAllCategoriesByAnimal({ commit }, payload) {
      axios
        .get(process.env.VUE_APP_API_URL + "category/animal=" + payload.name)
        .then((response) => {
          commit("getAllCategoriesByAnimal", response.data);
        })
        .catch((error) => console.log(error));
    },
    getAllBrandsByAnimal({ commit }, payload) {
      axios
        .get(
          process.env.VUE_APP_API_URL +
            "product/animal=" +
            payload.name +
            "/brands"
        )
        .then((response) => {
          commit("getAllBrandsByAnimal", response.data);
        })
        .catch((error) => console.log(error));
    },
    getProductById({ commit }, payload) {
      axios
        .get(process.env.VUE_APP_API_URL + "product/" + payload.id)
        .then((response) => {
          commit("getProductById", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  getters: {},
};

export default products;
