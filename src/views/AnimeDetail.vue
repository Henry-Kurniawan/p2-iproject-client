<template>
  <section class="h-100 mt-5">
    <div class="row mb-4">
      <div class="col-md-5 col-lg-4 col-xl-4">
        <div class="mb-3 mb-md-0">
          <div class="card">
            <img class="img w-100 h-100" :src="animeDetail.data.cover_image" />
            <div class="card rgba-black-slight"></div>

            <div class="card-body">
              <button
                @click.prevent="backToPreviousPage"
                type="button"
                class="btn btn-secondary btn-rounded"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-7 col-lg-8 col-xl-8">
        <div class="row">
          <div class="col-lg-7 col-xl-7">
            <h3>{{ animeDetail.data.titles.en }}</h3>
            <hr />
            
            <h4>DESCRIPTION</h4>
            <p v-if="animeDetail.data.descriptions.en" v-html="animeDetail.data.descriptions.en"  class="text-start mb-lg-0">
              
            </p>
            <p v-else v-html="animeDetail.data.descriptions.it" class="text-start mb-lg-0">{{ animeDetail.data.descriptions.it }}</p>

            <h4>TAGS</h4>
            <ul class="nav nav-pills rowtext-uppercase small">
              <div v-for="(animeGenre, i) in animeGenres" :key="i" class="col-3">
                <li><a style="font-size:13px" class="text-decoration-none text-muted" >{{animeGenre}}</a></li>
              </div>
            </ul>

            <hr />
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

              <div class="ratio ratio-16x9">
                <iframe
                  :src="animeDetail.data.trailer_url"
                  title="Trailer Video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
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

    animeGenres() {
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