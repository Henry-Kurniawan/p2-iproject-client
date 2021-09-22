<template>
   <div id="advanced-search" class="row" style="padding-block-start: 90px;">
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="card p-3 py-4">
              <h5>Find your favorite animes here</h5>
              <div class="row g-3 mt-2">
                <div class="col-md-9"> <input type="text" class="form-control"
                    placeholder="Enter anime names you want to search"> </div>
                <div class="col-md-3"> <button class="btn btn-secondary btn-block">Search Results</button> </div>
              </div>
              <div class="mt-3"> <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                  aria-controls="collapseExample" class="advanced"> Advance Search With Filters <i
                    class="fa fa-angle-down"></i> </a>
                <div class="collapse " id="collapseExample">
                  <div class="card card-body justify-content-center">
                    <!-- filter 1 -->
                    <div class="row mb-2">
                      <div class="col-md-1"> 
                        <h5>Genre :</h5>
                      </div>
                      <div class="col-md-11">
                        <div class="row">
                          <div class="col-sm-2 mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                          <div class="col-sm-2 mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                          <div class="col-sm-2 mb-2 ">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                          <div class="col-sm-2 mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                          <div class="col-sm-2 mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                          <div class="col-sm-2 mb-2 ">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                          <div class="col-sm-2  mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                              Default checkbox
                            </label>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <!-- filter 2 -->
                    <div class="row mb-2">
                      <div class="col-md-1"> 
                        <h5>Status :</h5>
                      </div>
                      <div class="col-md-4"> 
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="col-md-7"> 

                      </div>
                    </div>

                    <!-- filter 3 -->
                    <div class="row mb-2">
                      <div class="col-md-1"> 
                        <h5>Format : </h5>
                      </div>
                      <div class="col-md-4"> 
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">DVD</option>
                          <option value="2">MOVIE</option>
                          <option value="3">ONGOING</option>
                        </select>
                      </div>
                      <div class="col-md-7"> 

                      </div>
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
    name:"AdvancedSearch"
}
</script>

<style>

</style>