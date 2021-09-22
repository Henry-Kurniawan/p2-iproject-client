<template>
  <div id="app">
    <Header></Header>
    <AdvancedSearch></AdvancedSearch>
      <div id="body" class="row" style="padding-inline-start: 3rem; padding-inline-end: 2rem;">
        <router-view />
      </div>
    <Footer></Footer>
    
  </div>
</template>

<script>
import AdvancedSearch from './components/AdvancedSearch.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    AdvancedSearch,
    Header,
    Footer
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
