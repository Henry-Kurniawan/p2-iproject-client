<template>
  <!-- Bookmark -->
  <div id="bookmark-list" class="container" style="min-height: 100vh">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Your Bookmarked Animes</h1>
      </div>
    </div>

    <div class="row">
      <div v-for="bookmark in bookmarks" :key="bookmark.id" class="col-2">
        <div class="card h-25 w-100 border-dark mb-3">
          

          <div class="card-body">
            <button @click.prevent="findAnimeByName( bookmark.name )" type="button" class="btn btn-labeled btn-info">
              <span class="btn-label"><i class="bi bi-book"></i></span>Info
            </button>
          </div>

          <div class="card-body">
            <h6 class="card-title">{{ bookmark.name }}</h6>
          </div>

          <div
            @click="editBookmarkStatus(bookmark.id, true)"
            v-if="!bookmark.dueComplete"
            class="card-body"
          >
            <button type="button" class="btn btn-secondary btn-sm mr-1 mb-2">
              <i class="fas fa-book pr-2"></i>Unread
            </button>
          </div>

          <div
            @click="editBookmarkStatus(bookmark.id, false)"
            v-if="bookmark.dueComplete"
            class="card-body"
          >
            <button type="button" class="btn btn-success btn-sm mr-1 mb-2">
              <i class="far fa-check-circle pr-2"></i>Done
            </button>
          </div>

          <div class="card-body">
            <button
              @click="deleteBookmarkHandler(bookmark.id)"
              type="button"
              class="btn btn-danger btn-sm px-3 mb-2 material-tooltip-main"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete bookmark"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end div Bookmark -->
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "MyBookmark",
  computed: {
    bookmarks() {
      return this.$store.state.bookmarks;
    },
  },
  methods: {
    findAnimeByName(title) {
      const payload = {
        title,
      };
      this.$store
        .dispatch("fetchAnimeByName", payload)
        .then(({ data }) => {
          let animeId = data.data.documents[0].id;
          this.$router.push({
            name: "AnimeDetail",
            params: {
              id: animeId,
            },
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },

    deleteBookmarkHandler(bookmarkId) {
      const payload = {
        id: bookmarkId,
      };
      this.$store
        .dispatch("deleteBookmark", payload)
        .then(({ data }) => {
          Swal.fire({
            icon: "info",
            title: "Success",
            text: data.message,
          });

          this.$store.dispatch("fetchBookmark");

          this.$router.push({
            name: "MyBookmark",
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },

    editBookmarkStatus(bookmarkId, status) {
      const payload = {
        id: bookmarkId,
        status,
      };
      this.$store
        .dispatch("editBookmarkStatus", payload)
        .then(({ data }) => {
          Swal.fire({
            icon: "success",
            title: "OK",
            text: `Bookmark ${data.name} status changed!`,
          });

          this.$store.dispatch("fetchBookmark");

          this.$router.push({
            name: "MyBookmark",
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        });
    },
  },
  created() {
    this.$store.dispatch("fetchBookmark");
  },
};
</script>

<style>
</style>