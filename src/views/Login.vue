<template>
  <!-- new login -->
        <section class="bg-dark">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10">
                <div class="card" style="border-radius: 1rem;">
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="@/assets/images/granblue_background1.jpg"
                        alt="login form"
                        class="img-fluid" style="border-radius: 1rem 0 0 1rem;"
                      />
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center">
                      <div class="card-body p-4 p-lg-5 text-black">
        
                        <form @submit.prevent="loginHandler">
        
                          <div class="d-flex align-items-center mb-3 pb-1">
                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                            <span class="h1 fw-bold mb-0">Login</span>
                          </div>
        
                          <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>
        
                          <div class="form-outline mb-4">
                            <label class="form-label" for="login-email">Email address</label>
                            <input 
                            v-model="login_email"
                            type="email" id="login-email" class="form-control form-control-lg" />
                          </div>
        
                          <div class="form-outline mb-4">
                            <label class="form-label" for="login-password">Password</label>
                            <input 
                            v-model="login_password"
                            type="password" id="login-password" class="form-control form-control-lg" />
                          </div>
        
                          <div class="pt-1 mb-4">
                            <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                          </div>
        
                          <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? 
                            <router-link :to="{name: 'Register'}"> Register here</router-link></p>

                        </form>
        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- end div new login -->
</template>

<script>
import Swal from "sweetalert2"
export default {
    name: "login",
    data() {
      return {
        login_email: "",
        login_password: ""
      }
    },
    methods: {
      loginHandler() {
        const payload = {
          email: this.login_email,
          password: this.login_password
        }
        this.$store.dispatch("actionLoginHandler", payload)
        .then(({data}) => {
          this.$store.commit("SET_LOGIN", data)
          this.$router.push({
            name: "Home",
          });
          this.login_email = "";
          this.login_password = "";
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
        })
      }
    }
}
</script>

<style>

</style>