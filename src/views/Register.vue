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
                        src="/assets/images/granblue_background3.jpg"
                        alt="Anime"
                        class="img-fluid"
                        style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem; height: 100vh;"
                      />
                    </div>
                    <div class="col-xl-6">
                      <div class="card-body p-md-5 text-black">
                        <h3 class="mb-5 text-uppercase">Registration form</h3>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="register-email">Email (username)</label>
                          <input type="email" id="register-email" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="register-password">Password</label>
                          <input type="password" id="register-password" class="form-control form-control-lg" />
                        </div>

                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <label class="form-label" for="register-fistname">First name</label>
                              <input type="text" id="register-fistname" class="form-control form-control-lg" />
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <label class="form-label" for="register-lastname">Last name</label>
                              <input type="text" id="register-lastname" class="form-control form-control-lg" />
                            </div>
                          </div>
                        </div>

        
                        <div class="form-outline mb-4">
                          <label class="form-label" for="register-address">Address</label>
                          <input type="text" id="register-address" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="register-phone">Phone Number</label>
                          <input type="text" id="register-phone" class="form-control form-control-lg" />
                        </div>    
        
                        <div class="d-flex justify-content-end pt-3">
                          <button type="button" class="btn btn-light btn-lg">Reset all</button>
                          <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
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
export default {
    name: "Register"
}
</script>

<style>

</style>