import Vue from "vue";
import VueRouter from "vue-router";
import AnimeList from "../views/AnimeList.vue";
import AnimeDetail from "../views/AnimeDetail.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import MyBookmark from "../views/MyBookmark.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: AnimeList,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/animes/:id",
    name: "AnimeDetail",
    component: AnimeDetail,
  },
  {
    path: "/bookmarks",
    name: "MyBookmark",
    component: MyBookmark,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
