<template>
  <div id="app">
    <Header></Header>
    <AdvancedSearch></AdvancedSearch>
      <div id="body" class="row" style="padding-inline-start: 3rem; padding-inline-end: 2rem; min-height: 100vh">
        <!-- loading -->
        <div v-if="isLoading" class="d-flex justify-content-center align-item-center">
          <div class="spinner-border text-black" style="width: 10rem; height: 10rem;" role="status">
            <span class="visually-hidden">Loading..</span>
          </div>
        </div>
        <!-- content -->
        <router-view v-if="!isLoading"></router-view>
      </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import AdvancedSearch from './components/AdvancedSearch.vue'
import Header from './components/Header.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: "App",
  components: {
    AdvancedSearch,
    Header,
    HFooter
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  created() {
    if(localStorage.access_token) {
      this.$store.commit("SET_ALREADY_LOGIN")
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
