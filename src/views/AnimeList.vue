<template>
  <!-- anime list -->
  <div id="anime-list" class="container">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Our anime list</h1>
        <p>please check our animes here</p>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col-4 pt-5 text-black">
        <div class="card h-100 w-75">
          <img
            src="https://picsum.photos/200"
            class="card-img-top"
            alt="https://picsum.photos/200"
          />

          <div class="card-body">
            <h5 class="card-title fst-italic">
               name 
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text">
               description 
            </p>
          </div>
          <div class="card-body text-center">
            <button type="button" class="btn btn-info btn-sm mr-1 mb-2">
              <i class="fas fa-info-circle pr-2"></i>Details
            </button>
            <button
              type="button"
              class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main"
              data-toggle="tooltip"
              data-placement="top"
              title="Add to wishlist"
            >
              <i class="far fa-heart"></i>
            </button>
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
};
</script>

<style>
</style>