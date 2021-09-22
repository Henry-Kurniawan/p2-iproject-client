<template>
  <section class="h-100 mt-5">
    <div class="row mb-4">
      <div class="col-md-5 col-lg-4 col-xl-4">
        <div class="mb-3 mb-md-0">
          <div class="card">
            <img class="img w-100 h-100" :src="animeDetail.data.cover_image" />
            <div class="card rgba-black-slight"></div>

            <div class="card-body">
                <button @click.prevent="backToPreviousPage" type="button" class="btn btn-secondary btn-rounded">Back</button>
            </div>
            
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-8 col-xl-8">
        <div class="row">
          <div class="col-lg-7 col-xl-7">
            <h3>{{ animeDetail.data.titles.en }}</h3>
            <hr />
            <h4>TAGS</h4>
            <p class="mb-2 text-uppercase small">{{ animeGenre }}</p>

            <hr />
            <h4>DESCRIPTION</h4>
            <p v-if="animeDetail.data.descriptions.en" class="mb-lg-0">
              {{ animeDetail.data.descriptions.en }}
            </p>
            <p v-else class="mb-lg-0">{{ animeDetail.data.descriptions.it }}</p>
          </div>
          <div class="col-lg-5 col-xl-5">
            <h6 class="mb-3"><span>MORE INFO</span></h6>
            <div class="my-4">
              <h5><img :src="QRCode" alt="qrcode" /></h5>
            </div>
            <div v-if="animeDetail.data.sequel" class="my-4">
              <h5>Status: {{ animeStatus }}</h5>
            </div>

            <div v-if="animeDetail.data.prequel" class="my-4">
              <h5>Format: {{ animeFormat }}</h5>
            </div>
            <div class="my-4">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  :src="animeDetail.data.trailer_url"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-danger btn-md px-3 mb-lg-2 material-tooltip-main"
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
  </section>
</template>

<script>
export default {
  name: "AnimeDetail",
  methods: {
    backToPreviousPage() {
      this.$router.go(-1);
    },
  },
  computed: {
    animeDetail() {
      return this.$store.state.animeDetail;
    },

    animeGenre() {
      return this.$store.getters.formatGenre;
    },

    animeStatus() {
      return this.$store.getters.detailStatus;
    },

    animeFormat() {
      return this.$store.getters.detailFormat;
    },

    QRCode() {
      return this.$store.state.QRCode;
    },
  },
  created() {
    const payload = this.$route.params;
    const payloadQR = {
      path: this.$route.path,
    };
    this.$store.dispatch("actionFetchQRCode", payloadQR);
    this.$store.dispatch("fetchAnimeDetail", payload);
  },
};
</script>

<style>
</style>