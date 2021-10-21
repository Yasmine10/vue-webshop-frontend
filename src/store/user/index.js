import axios from "axios";

const user = {
  state: {
    user: {},
    address: {},
  },
  mutations: {
    saveUserInfo(state, payload) {
      state.user = payload.user;
      state.address = payload.address;
    },
  },
  actions: {
    async saveUserInfo({ commit }, payload) {
      const user = await axios.post(process.env.VUE_APP_API_URL + "user", {
        firstName: payload.firstname,
        lastName: payload.lastname,
        email: payload.email,
      });
      const address = await axios.post(
        process.env.VUE_APP_API_URL + "address",
        {
          street: payload.street,
          streetNumber: payload.streetnumber,
          postalCode: payload.postalcode,
          city: payload.city,
          user: user.data,
        }
      );
      commit("saveUserInfo", { user: user.data, address: address.data });
    },
  },
  getters: {},
};

export default user;
