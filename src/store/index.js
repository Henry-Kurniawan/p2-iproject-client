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
    isLoading: false,

    prev_filter_name: "",
    prev_filter_genres: [],
    prev_filter_status: "",
    prev_filter_format: "",

    animes:[],
    animeGenres: [],
    bookmarks: [],
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

    SET_LOADING(state, payload) {
      state.isLoading = payload.status
    },

    SET_PREV_FILTER(state, payload) {
      state.prev_filter_name= payload.name
      state.prev_filter_min_price= payload.min_price
      state.prev_filter_max_price= payload.max_price
      state.prev_filter_CategoryId= payload.CategoryId
    },

    SET_ANIME_DETAIL(state, payload) {
      state.animeDetail = payload
    },

    SET_ANIME_GENRES(state, payload) {
      state.animeGenres = payload
    },

    SET_USER_BOOKMARKS(state, payload) {
      state.bookmarks = payload
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

    actionLoginGoogleSuccess(context, payload) {
      const data = {
        idToken: payload.idToken
      }
      return axios({
        url: `${this.state.baseURL}/users/loginGoogle`,
        method: "post",
        data
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

    fetchAnimeByName(context, payload) {
      return axios({
        url: `${this.state.baseURL}/animes`,
        method: "get",
        params: {
          title:payload.title
        }
      })
    },

    fetchAnimes(context, payload) {
      let params = {}
      if(payload) {
        params = {
          page: payload.page,
          per_page: payload.per_page,
          genres: payload.genres,
          formats: payload.formats,
          status: payload.status,
          title: payload.title
        }
      }

      context.commit("SET_LOADING", {status: true})

      axios({
        url: `${this.state.baseURL}/animes`,
        method: "get",
        params
      })
      .then(({data}) => {
        context.commit("SET_ANIMES", data)
        context.commit("SET_PREV_FILTER", params)
        if(payload) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: `${data.data.count} anime found! total page: ${data.data.last_page}`,
          });
        }

        context.commit("SET_LOADING", {status: false})

      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message 
        })
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

    fetchGenres(context) {
      axios({
        url: `${this.state.baseURL}/animes/genres`,
        method:"get",
      })
        .then( ({data} ) => {
          context.commit("SET_ANIME_GENRES", data)
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message 
          })
        })
    },

    fetchBookmark(context) {
      axios({
        url: `${this.state.baseURL}/users/bookmarks`,
        method: "get",
        headers: {access_token: localStorage.access_token}
      })
        .then( ({data} ) => {
          context.commit("SET_USER_BOOKMARKS", data)
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message 
          })
        })
    },

    deleteBookmark(context, payload) {
      return axios({
        url: `${this.state.baseURL}/users/bookmarks/${payload.id}`,
        method: "delete",
        headers: {
          access_token: localStorage.access_token,
          Accept: "application/json"
        }
      })   
    },

    editBookmarkStatus(context, payload) {
      return axios({
        url: `${this.state.baseURL}/users/bookmarks/${payload.id}`,
        method: "put",
        headers: {
          access_token: localStorage.access_token,
          Accept: "application/json"
        },
        params: {
          status: payload.status
        }
      })   
    },

    actionAddBookmark(context, payload) {

      return axios({
        url: `${this.state.baseURL}/users/bookmarks`,
        method:"post",
        params: {
          title: payload.animeTitle
        },
        headers: {
          access_token: localStorage.access_token,
          Accept: "application/json"
        },
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
