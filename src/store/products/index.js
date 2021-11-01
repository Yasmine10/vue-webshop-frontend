import axios from "axios";

const products = {
  state: {
    products: [],
    categories: [],
    selectedCategories: [],
    brands: [],
    selectedBrands: [],
    product: {},
    pagination: {},
    sortOption: {},
  },
  mutations: {
    getAllProducts(state, payload) {
      state.products = payload;
    },
    getPagination(state, payload) {
      state.pagination = {
        pageNumber: payload.pageable.pageNumber,
        pageSize: payload.pageable.pageSize,
        totalItems: payload.totalElements,
        totalPages: payload.totalPages,
      };
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
    setSortOption(state, payload) {
      state.sortOption = payload.sortOption;
    },
    saveSelectedCategories(state, payload) {
      state.selectedCategories = payload;
    },
    saveSelectedBrands(state, payload) {
      state.selectedBrands = payload;
    },
    resetSelectedCategories(state) {
      state.selectedCategories = [];
    },
    resetSelectedBrands(state) {
      state.selectedBrands = [];
    },
  },
  actions: {
    getAllProductsByAnimal({ commit }, payload) {
      axios
        .get(`${process.env.VUE_APP_API_URL}product/animal=${payload.animal}`)
        .then((response) => {
          commit("getAllFilteredProducts", response.data);
        })
        .catch((error) => console.log(error));
    },
    getAllFilteredProducts({ commit }, payload) {
      let url = `${process.env.VUE_APP_API_URL}product/filter?animalName=${payload.animal}`;

      if (payload.pageNumber!== undefined && payload.pageNumber !== 0) {
        url += `&pageNumber=${payload.pageNumber}`;
      }

      if (payload.brands !== undefined && payload.brands.length > 0) {
        url += `&brands=${payload.brands}`;
      }
      if (payload.categories !== undefined && payload.categories.length > 0) {
        url += `&categories=${payload.categories}`;
      }
      // if (payload.order !== undefined) {
      //   url += `&orderby=${payload.order}`;
      // } else {
      //   url += `&orderby=p.price ASC`;
      // }


      console.log(url);

      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          commit("getAllProducts", response.data.content);
          commit("getPagination", response.data)
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
    setSortOption({ commit }, payload) {
      commit("setSortOption", payload);
    },
    saveSelectedCategories({ commit }, payload) {
      commit("saveSelectedCategories", payload);
    },
    saveSelectedBrands({ commit }, payload) {
      commit("saveSelectedBrands", payload);
    },
    resetSelectedCategories({ commit }) {
      commit("resetSelectedCategories");
    },
    resetSelectedBrands({ commit }) {
      commit("resetSelectedBrands");
    },
  },
  getters: {
    totalProducts: (state) => {
      return state.products.length;
    },
  },
};

export default products;
