<template>
  <!-- new register -->
  <section class="bg-dark">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="@/assets/images/granblue_background3.jpg"
                  alt="Anime"
                  class="img-fluid"
                  style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                    height: 100vh;
                  "
                />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Registration form</h3>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="register-email"
                      >Email (username)</label
                    >
                    <input
                      v-model="register_email"
                      type="email"
                      id="register-email"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="register-password"
                      >Password</label
                    >
                    <input
                      v-model="register_password"
                      type="password"
                      id="register-password"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="register-address"
                      >Address</label
                    >
                    <input
                      v-model="register_address"
                      type="text"
                      id="register-address"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="register-phone"
                      >Phone Number</label
                    >
                    <input
                      v-model="register_phone"
                      type="text"
                      id="register-phone"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button
                      @click.prevent="clearForm"
                      type="button"
                      class="btn btn-light btn-lg"
                    >
                      Reset all
                    </button>
                    <button
                      @click.prevent="registerHandler"
                      type="button"
                      class="btn btn-warning btn-lg ms-2"
                    >
                      Submit form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end new register -->
</template>

<script>
import Swal from "sweetalert2"

export default {
  name: "Register",
  data() {
    return {
      register_email: "",
      register_password: "",
      register_phone: "",
      register_address: "",
    };
  },
  methods: {
    clearForm() {
      this.register_email = "";
      this.register_password = "";
      this.register_phone = "";
      this.register_address = "";
    },
    registerHandler() {
      const payload = {
        email: this.register_email,
        password: this.register_password,
        phoneNumber: this.register_phone,
        address: this.register_address,
      };
      this.$store
        .dispatch("actionRegisterHandler", payload)
        .then(({ data }) => {
          console.log(data);
          this.$store.commit("SET_LOGIN", data);
          this.$router.push({
            name: "Home",
          });

          this.register_email = "";
          this.register_password = "";
          this.register_phone = "";
          this.register_address = "";
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
};
</script>

<style>
</style>