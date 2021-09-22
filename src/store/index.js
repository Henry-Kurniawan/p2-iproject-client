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
    actionLoginHandler(context, login_payload) {
      return axios({
        url: `${this.state.baseURL}/users/login`,
        method: "post",
        data: login_payload
      })
    },
  },
  modules: {},
});
