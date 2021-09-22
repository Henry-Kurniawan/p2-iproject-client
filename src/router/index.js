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

router.beforeEach((to, from, next) => {
  let access_token = localStorage.getItem('access_token')
  let destination = to.name

  switch (destination) {
    case "MyBookmark":
        access_token ? next() : next('/login')
      break;
    case "Login":
        access_token ? next('/') : next()
      break;
    case "Register":
        access_token ? next('/') : next()
      break;

    default:
        next()
      break;
  }
})

export default router;
