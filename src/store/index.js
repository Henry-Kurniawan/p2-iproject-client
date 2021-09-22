import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swal from "sweetalert2"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    baseURL: 'http://localhost:4002',
    logged_email: "",
    animes:[],
    animeDetail: "",
    QRCode: "",
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

    SET_ANIMES(state, payload) {
      state.animes = payload
    },

    SET_ANIME_DETAIL(state, payload) {
      state.animeDetail = payload
    },

    SET_QR_CODE(state, payload) {
      state.QRCode = payload.qrcode
    }
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

    fetchAnime(context) {
      axios({
        url: `${this.state.baseURL}/animes`,
        method: "get",
      })
      .then(({data}) => {
        context.commit("SET_ANIMES", data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
    },

    fetchAnimeDetail(context, payload) {
      axios({
        url: `${this.state.baseURL}/animes/${payload.id}`,
        method:"get",
      })
        .then( ({data} ) => {
          context.commit("SET_ANIME_DETAIL", data)
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message 
          })
        })
    },

    actionFetchQRCode(context, payload) {
      const url = `${this.baseURL}${payload.path}`
      const params = {
        apikey: "18d3556dH2UDenCSyu7LZF7ECTLJ4jT6YpwPYLqi4ZDyWoNMKAyrBswF",
        data: url,
        width: 100,
        bg: "FFFFFF",
        dots: "000000"
      }

      axios({
        method: "get",
        url: "https://api.happi.dev/v1/qrcode",
        params
      })
      .then( ({data} ) => {
        context.commit("SET_QR_CODE", data)
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message 
        })
      })

    }
  },
  getters: {
    formatEmailName(state) {
      let result = state.logged_email.split("@")
      return result[0]
    },

    formatGenre(state) {
      let result = state.animeDetail.data.genres.join(", ")
      return result
    },

    detailStatus(state) {
      let status = ""
      let result = state.animeDetail.data.status

      switch (result) {
        case 0:
            status = "Finished"
          break;
        case 1:
            status  = "Ongoing"
          break;
        case 2:
            status = "Not yet released"
          break;
        case 3:
            status  = "Canceled"
          break;

        default:
          break;
      }

      return status
    },

    detailFormat(state) {
      let format = ""
      let result = state.animeDetail.data.format

      switch (result) {
        case 0:
          format = "TV"
          break;
        case 1:
          format  = "TV - short"
          break;
        case 2:
          format = "Movie"
          break;
        case 3:
          format  = "Special"
          break;
        case 4:
          format  = "OVA"
        break;
        case 5:
          format  = "ONA"
        break;
        case 6:
          format  = "MUSIC"
        break;


        default:
          break;
      }
      return format
    }
  },
  modules: {},
});
