import axios from "axios";
import CryptoJS from "crypto-js";

const user = {
  state: {
    user: {},
    address: {},
  },
  mutations: {
    saveUser(state, payload) {
      state.user = payload.user;
    },
    saveAddress(state, payload) {
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
      commit("saveUser", { user: user.data });
      commit("saveAddress", { address: address.data });
    },
    registerUser({ commit }, payload) {

      console.log(payload);

      // encrypt password
      let cipherPassword = CryptoJS.AES.encrypt(
        JSON.stringify(payload.password),
        "secret key 123"
      ).toString();

      console.log(cipherPassword);

      // send post request to api
      axios
        .post(process.env.VUE_APP_API_URL + "user", {
          firstName: payload.firstname,
          lastName: payload.lastname,
          email: payload.email,
          password: cipherPassword,
        })
        .then((response) => {
          commit("saveUser", response);
        });
    },
  },
  getters: {},
};

export default user;
