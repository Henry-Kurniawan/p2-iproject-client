import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    baseURL: 'http://localhost:4002',
    logged_email: ""
  },
  mutations: {
    SET_LOGIN(state, data) {
      localStorage.setItem("access_token", data.access_token)
      localStorage.setItem("id", data.id)
      localStorage.setItem("trelloListId", data.trelloListId)
      localStorage.setItem("email", data.email)
      state.isLoggedIn = true
      state.logged_email = localStorage.getItem('email')
    },

    SET_ALREADY_LOGIN(state) {
      state.isLoggedIn = true
      state.logged_email = localStorage.getItem('email')
    },

    SET_LOGOUT(state) {
      localStorage.clear()
      state.isLoggedIn = false
    },
  },
  actions: {
    actionLoginHandler(context, payload) {
      const {email, password} = payload
      const login_payload = {
        email,
        password
      }
      return axios({
        url: `${this.state.baseURL}/users/login`,
        method: "post",
        data: login_payload
      })
    },

    actionRegisterHandler(context, payload) {
      const {email, password, phoneNumber, address} = payload
      const register_payload = {
        email,
        password,
        phoneNumber,
        address
      }

      return axios({
        url: `${this.state.baseURL}/users/register`,
        method: "post",
        data: register_payload
      })
    },
  },
  getters: {
    formatEmailName(state) {
      let result = state.logged_email.split("@")
      return result[0]
    }
  },
  modules: {},
});
