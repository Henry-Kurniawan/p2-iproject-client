<template>
  <!-- anime list -->
  <div id="anime-list" class="container">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Our anime list</h1>
        <p>please check our animes here</p>
      </div>
    </div>

    <div class="row g-4">
      <div v-for="anime in animes.data.documents" :key="anime.id" class="col-3 pt-5 text-black">
        <div class="card h-50 w-100">
          <router-link
            :to="{
              name: 'AnimeDetail',
              params: {
                id: anime.id,
              },
            }"
          >
          <img
            :src="anime.cover_image"
            class="card-img-top"
            alt="https://picsum.photos/200"
          />
          </router-link>

          <div class="card-body text-center">
            <router-link
            :to="{
              name: 'AnimeDetail',
              params: {
                id: anime.id,
              },
            }"
          >
              <button type="button" class="btn btn-info btn-sm mr-1 mb-2">
                <i class="fas fa-info-circle pr-2"></i>Details
              </button>
            </router-link>
            <button
              type="button"
              class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main"
              data-toggle="tooltip"
              data-placement="top"
              title="Add to bookmark"
            >
              <i class="far fa-heart"></i>
            </button>
          </div>

          <div class="card-body">
            <h5 class="card-title fst-italic">
               {{anime.titles.en}} 
            </h5>
          </div>

          <div class="card-body">
            <p v-if="anime.descriptions.en" class="card-text">
               {{anime.descriptions.en}} 
            </p>
            <p v-else class="card-text">
               {{anime.descriptions.it}} 
            </p>
          </div>
        
        </div>
      </div>

    </div>
  </div>
  <!-- end div anime list -->
</template>

<script>
export default {
  name: "AnimeList",
  computed: {
    animes() {
      return this.$store.state.animes
    },
  },
};
</script>

<style>
</style>