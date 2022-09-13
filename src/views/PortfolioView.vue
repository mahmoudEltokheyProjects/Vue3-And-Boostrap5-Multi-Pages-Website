<template>
  <!-- //////////////////////// Start : Portfolio Section //////////////////////// -->
  <div class="portfolio">
    <div class="container">
      <!-- ++++++++++++++++++ main title ++++++++++++++++++ -->
      <div class="main-title text-center py-5 my-3">
        <img class="mb-4" src="../assets/imgs/title.png" />
        <h2 class="fs-1">We are Good at</h2>
        <p class="text-uppercase text-black-50 fs-6">
          some of thease stuff under
        </p>
        <span class="line-under"></span>
      </div>
      <!-- ++++++++++++++++ Features Blocks ++++++++++++++++ -->
      <div class="row">
        <!-- ////////////// Block1 ////////////// -->
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="feat">
            <!-- +++++++++++ icons +++++++++++ -->
            <div class="icon-holder position-relative">
              <!-- icon1 : number 1 -->
              <i
                class="fa-solid fa-1 position-absolute bottom-0 number-icon"
              ></i>
              <!-- icon2 : pencil -->
              <i
                class="fa-solid fa-pencil position-absolute bottom-0 icon fa-4x"
              ></i>
            </div>
            <!-- +++++++++++ header : h4 +++++++++++ -->
            <h4 class="my-3 text-uppercase">graphic design</h4>
            <!-- +++++++++ paragraph : p +++++++++++ -->
            <p class="text-black-50 lh-lg">
              Lorem ipsum laboriosam sit consectetur adipisicing elit. Nesciunt,
              laboriosam quos tempore sint eius
            </p>
          </div>
        </div>
        <!-- ////////////// Block2 ////////////// -->
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="feat">
            <!-- +++++++++++ icons +++++++++++ -->
            <div class="icon-holder position-relative">
              <!-- icon1 : number 1 -->
              <i
                class="fa-solid fa-2 position-absolute bottom-0 number-icon"
              ></i>
              <!-- icon2 : pencil -->
              <i
                class="fa-solid fa-tv position-absolute bottom-0 icon fa-4x"
              ></i>
            </div>
            <!-- +++++++++++ header : h4 +++++++++++ -->
            <h4 class="my-3 text-uppercase">graphic design</h4>
            <!-- ++++++++++ paragraph : p ++++++++++ -->
            <p class="text-black-50 lh-lg">
              Lorem ipsum laboriosam sit consectetur adipisicing elit. Nesciunt,
              laboriosam quos tempore sint eius
            </p>
          </div>
        </div>
        <!-- ////////////// Block3 ////////////// -->
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="feat">
            <!-- +++++++++++ icons +++++++++++ -->
            <div class="icon-holder position-relative">
              <!-- icon1 : number 1 -->
              <i
                class="fa-solid fa-3 position-absolute bottom-0 number-icon"
              ></i>
              <!-- icon2 : pencil -->
              <i
                class="fa-solid fa-plug position-absolute bottom-0 icon fa-4x"
              ></i>
            </div>
            <!-- +++++++++++ header : h4 +++++++++++ -->
            <h4 class="my-3 text-uppercase">graphic design</h4>
            <!-- ++++++++++ paragraph : p ++++++++++ -->
            <p class="text-black-50 lh-lg">
              Lorem ipsum laboriosam sit consectetur adipisicing elit. Nesciunt,
              laboriosam quos tempore sint eius
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- //////////////////////// End : Portfolio Section //////////////////////// -->
    <!-- ////////////////////////// Start : Blog Section ///////////////////////// -->
    <div class="blog py-5">
      <div class="container">
        <!-- ++++++++++++++++++ main title ++++++++++++++++++ -->
        <div class="main-title text-center py-5 my-3">
          <img class="mb-4" src="../assets/imgs/title.png" />
          <h2 class="fs-1 text-capitalize mt-3">read our blog</h2>
          <p class="text-uppercase text-black-50 fs-6">new stories</p>
          <span class="line-under"></span>
        </div>
        <!-- ++++++++++++++++++ blog content ++++++++++++++++++ -->
        <div class="row">
          <!-- ++++++++++ Card1 ++++++++++ -->
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div class="card">
              <img
                src="../assets/imgs/blog-1.jpg"
                class="card-img-top"
                alt="Image Not Found"
              />
              <div class="card-body">
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <h6 class="card-title text-capitalize">
                  some awesome blog title here
                </h6>
              </div>
            </div>
          </div>
          <!-- ++++++++++ Card2 ++++++++++ -->
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div class="card">
              <img
                src="../assets/imgs/blog-2.jpg"
                class="card-img-top"
                alt="Image Not Found"
              />
              <div class="card-body">
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <h6 class="card-title text-capitalize">
                  some awesome blog title here
                </h6>
              </div>
            </div>
          </div>
          <!-- ++++++++++ Card3 ++++++++++ -->
          <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div class="card">
              <img
                src="../assets/imgs/blog-3.jpg"
                class="card-img-top"
                alt="Image Not Found"
              />
              <div class="card-body">
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <h6 class="card-title text-capitalize">
                  some awesome blog title here
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="blogBtn d-flex justify-content-center">
          <!-- ++++++++++++++ Get Started button ++++++++++++++ -->
          <a class="btn main-btn rounded-pill text-uppercase px-4" href="#"
            >more stories</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- ///////////////////////**/ End : Blog page ////////**//////////////// -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "PortfolioView",
};
</script>

<style>
/* //////////////////////// Portfolio Section //////////////////////// */
/* ++++++++++++ main title : line under ++++++++++++ */
.line-under {
  display: block;
  width: 120px;
  height: 2px;
  background-color: var(--green-color);
  margin: 20px auto;
}
/* ++++++++++++++++ Features Blocks ++++++++++++++++ */
.portfolio .feat {
  text-align: center;
}
/* +++++++ feat : icon-holder +++++++ */
.portfolio .feat .icon-holder {
  height: 180px;
}
/* +++++++ feat : icon-holder : icon +++++++ */
.portfolio .feat .icon-holder i {
  /* to put icon in center */
  left: 50%;
  transform: translateX(-50%);
}
/* +++++++ feat : icon-holder : icon : number-icon +++++++ */
.portfolio .feat .icon-holder .number-icon {
  font-size: 12rem;
  color: var(--section-color);
}
/* +++++++ feat : icon-holder : icon : icon +++++++ */
.portfolio .feat .icon-holder .icon {
  color: var(--green-color);
}
/* +++++++ feat : icon-holder : h4 +++++++ */
.portfolio .feat h4 {
  color: var(--yellow-color);
}
</style>
