<template>
  <div id="advanced-search" class="row" style="padding-block-start: 90px">
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card p-3 py-4">
            <h5>Find your favorite animes here</h5>
            <div class="row g-3 mt-2">
              <div class="col-md-1 pt-2">
                <label for="page-input">Page: </label>
              </div>

              <div class="col-md-2">
                <input
                  @change="filterAnimes"
                  v-model="filter_page"
                  id="page-input"
                  type="number"
                  class="form-control"
                  min="1"
                  :max="animes.data.last_page"
                />
              </div>

              <div class="col-md-5">
                <input
                  v-model="filter_name"
                  type="text"
                  class="form-control"
                  placeholder="Enter anime names you want to search"
                />
              </div>
              <div class="col-md-2">
                <button 
                @click.prevent="filterAnimes"
                class="btn btn-secondary btn-block">
                  Search Results
                </button>
              </div>

              <div class="col-md-1">
                <button
                  @click.prevent="resetFilter"
                  class="btn btn-secondary btn-block"
                >
                  Reset
                </button>
              </div>
            </div>
            <div class="mt-3">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
                class="advanced"
              >
                Advance Search With Filters <i class="fa fa-angle-down"></i>
              </a>
              <div class="collapse" id="collapseExample">
                <div class="card card-body justify-content-center">
                  <!-- filter 1 -->
                  <div class="row mb-2">
                    <div class="col-md-2">
                      <h5>Genre :</h5>
                    </div>
                    <div class="col-md-10">
                      <div class="row">
                        <div
                          v-for="(genre, i) in genres"
                          :key="genre.id"
                          class="col-3 mb-2"
                        >
                          <input
                            v-model="filter_genres"
                            class="form-check-input mx-2"
                            type="checkbox"
                            :value="genre.name"
                            :id="'checkbox' + i"
                          />
                          <label class="form-check-label" :for="'checkbox' + i">
                            {{ genre.name }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- filter 2 -->
                  <div class="row mb-2">
                    <div class="col-2">
                      <h5>Status :</h5>
                    </div>
                    <div class="col-4">
                      <select
                        v-model="filter_status"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected value="">Choose an option</option>
                        <option value="0">Finished</option>
                        <option value="1">Ongoing</option>
                        <option value="2">Not released</option>
                        <option value="3">Canceled</option>
                      </select>
                    </div>
                    <div class="col-6"></div>
                  </div>

                  <!-- filter 3 -->
                  <div class="row mb-2">
                    <div class="col-2">
                      <h5>Format :</h5>
                    </div>
                    <div class="col-4">
                      <select
                        v-model="filter_format"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected value="">Choose an option</option>
                        <option value="0">TV</option>
                        <option value="1">TV - short</option>
                        <option value="2">Movie</option>
                        <option value="3">Special</option>
                        <option value="4">OVA</option>
                        <option value="5">ONA</option>
                        <option value="6">Music</option>
                      </select>
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvancedSearch",
  data() {
    return {
      filter_page: "",
      filter_name: "",
      filter_genres: [],
      filter_status: "",
      filter_format: "",
    };
  },

  methods: {
    filterAnimes() {
      const payload_filter = {
        title: this.filter_name,
        status: this.filter_status,
        formats: this.filter_format,
        genres: this.filter_genres,
        page: this.filter_page,
      };

      this.$store.dispatch("fetchAnimes", payload_filter);
      this.$router.push({
        name: "Home",
      });
    },
    resetFilter() {
      this.filter_page = "";
      this.filter_name = "";
      this.filter_genres = [];
      this.filter_status = "";
      this.filter_format = "";

      this.$store.dispatch("fetchAnimes");
      this.$router.push({
        name: "Home",
      });
    },
  },

  computed: {
    genres() {
      return this.$store.state.animeGenres;
    },

    animes() {
      return this.$store.state.animes;
    }
  },
  created() {
    this.$store.dispatch("fetchGenres");
    this.$store.dispatch("fetchAnimes");
  },
};
</script>

<style>
</style>