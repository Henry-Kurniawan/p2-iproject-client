<template>
      <!-- Headers -->
    <div id="headers" class="row">
      <header class="p-2 bg-dark text-white fixed-top" style="height: 90px;">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-lg-start">
            <div class="col-3">

              <a href="/"
                class="d-flex justify-content-center align-items-center mb-2 mb-lg-0 text-white text-decoration-none text-end">
                <img height="70" src="@/assets/images/icon_anime.png" alt="" srcset="">
                <h5 style="font-size: 1.5rem; color: rgb(228, 170, 13);"> Heknime Planets</h5>
              </a>
            </div>
            <div class="col-3">
              <!-- <form class="col-lg-auto mb-3 mb-lg-0 me-lg-3">
                          <input class="form-control" type="text" placeholder="Search your favorite anime..." aria-label="Search">
                    </form> -->
              <!-- <div class="input-group">
                <div class="form-outline">
                  <input type="search" class="form-control" placeholder="Search your favorite anime..." />
                </div>
                <button type="button" class="btn btn-primary">
                  <i class="fas fa-search"></i>
                </button>
              </div> -->
            </div>

            <div class="col-1">

            </div>

            <div class="col-2">
              <button type="button" class="btn btn-labeled btn-warning">
                <span class="btn-label"><i class="bi bi-star-fill p-1" style="color: orangered;"></i></span>Your
                Favorites</button>
            </div>

            <div class="col-3">
              <div id="not-logged-in" class="text-end">
                <button type="button" class="btn btn-outline-light me-2">Login</button>
                <button type="button" class="btn btn-warning">Sign-up</button>

              </div>
              <!-- Logged in user -->
              <div id="logged-in-user" class="d-flex justify-content-end text-end">
                <div class="row">
                  <div class="col-4">
                    <div class="align-items-center">
                      <img src="https://source.unsplash.com/random/300x200" width="50px" height="50px" alt=""
                        class="rounded-circle" />
                    </div>
                  </div>
                  <div class="col-8">
                    <h6>emaillllllllllllllllllllllllaaaaaaaaaaaaaaaaaaaaaaaaa</h6>
                    <button type="button" class="btn btn-primary btn-sm">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                      Logout
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </header>
    </div>
    <!--End div Headers-->
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>

</style>