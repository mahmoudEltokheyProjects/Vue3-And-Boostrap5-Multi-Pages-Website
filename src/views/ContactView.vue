<template>
  <!-- //////////////////////// Start : our work page //////////////////////// -->
  <div class="our-work">
    <div class="container">
      <!-- header -->
      <div class="main-title text-center my-0 py-5">
        <img
          class="mb-4"
          src="../assets/imgs/title.png"
          alt="Image Not Found"
        />
        <h2 class="fs-1 text-capitalize">we make this</h2>
        <p class="text-uppercase text-black-50 fs-6">
          some of thease stuff under
        </p>
        <span class="line-under"></span>
        <!-- ++++++++++++++++ Tabs filter +++++++++++++++ -->
        <ul class="list-unstyled d-flex justify-content-center my-5">
          <li class="active rounded-pill">All</li>
          <li>Design</li>
          <li>Code</li>
          <li>Photo</li>
          <li>App</li>
        </ul>
        <!-- ++++++++++++++++ Work Blocks +++++++++++++++ -->
        <div class="row">
          <!-- +++++++++ Block1 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-01.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block2 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-02.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block3 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-03.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block4 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-04.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block5 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-05.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block6 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-06.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block7 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-07.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
          <!-- +++++++++ Block8 +++++++++ -->
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="work-block mb-3 bg-white" data-work="Application">
              <img src="../assets/imgs/work-08.jpg" alt="" class="img-fluid" />
              <h4>awesome work</h4>
              <span>/Design</span>
            </div>
          </div>
        </div>
        <!-- ++++++++++++++++ "I want more" button ++++++++++++++++ -->
        <div class="d-flex justify-content-center align-item-center mt-5">
          <a class="btn rounded-pill main-btn text-uppercase px-5" href="#"
            >I want more</a
          >
        </div>
      </div>
    </div>
  </div>
  <!-- ////////////////////////// End : our work section //////////////////////// -->
  <!-- ////////////////////////// start : pricing section //////////////////////// -->
  <div class="pricing">
    <div class="container">
      <!-- price header -->
      <div class="price-header text-center text-uppercase my-5">
        <h3 class="priceH3 text-uppercase fs-1">pricing plans</h3>
      </div>
      <div class="row">
        <!-- price body : component -->
        <price-comp />
      </div>
    </div>
  </div>
  <!-- ////////////////////////// end : pricing section //////////////////////// -->
  <!-- //////////////////////// start : subscribe section /////////////////////// -->
  <div class="subscribe py-3 text-center text-md-start">
    <div class="container">
      <form class="row align-items-center">
        <!-- +++++++++ subscribe paragraph +++++++++ -->
        <div class="col-lg-3 col-md-6 col-sm-12 my-3">
          <div class="subscribePara text-capitalize fs-6 fw-bold mt-4">
            <p>subscribe to our newsletter</p>
          </div>
        </div>
        <!-- +++++++++ subscribe inputField +++++++++ -->
        <div class="col-lg-7 col-md-6 col-sm-12 my-3">
          <input
            type="text"
            placeholder="Enter Email Address"
            class="w-100 py-2 text-light bg-transparent"
          />
        </div>
        <!-- +++++++++ subscribe button +++++++++ -->
        <div class="col-lg-2 col-md-12 col-sm-12 my-3">
          <!-- ++++++++++++++ Get Started button ++++++++++++++ -->
          <input
            type="submit"
            value="subscribe"
            class="btn rounded-pill text-uppercase px-5"
            href="#"
          />
        </div>
      </form>
    </div>
  </div>
  <!-- ///////////////////////// End : subscribe section //////////////////////// -->
  <!-- ////////////////////////// start : footer section //////////////////////// -->
  <div class="footer py-5 text-white-50">
    <div class="container">
      <div class="row">
        <!-- +++++++++++++++ Column 1 +++++++++++++++ -->
        <div class="col-lg-4 col-md-6">
          <div class="info my-3">
            <img
              src="../assets/imgs/logo.png"
              class="mb-4"
              alt="Image Not Found"
            />
            <p class="mb-5">
              Lorem ipsum dolor sit amet adipisicing elit. Quo quisquam
              doloremque velit ex quas, dolorem eaque debitis esse!
            </p>
            <div class="copyright text-capitalize">
              created by <span>graphberry</span>
              <div class="text-capitalize">
                &copy; 2022 - <span>bondi inc</span>
              </div>
            </div>
          </div>
        </div>
        <!-- +++++++++++++++ Column 2 +++++++++++++++ -->
        <div class="col-lg-2 col-md-6">
          <div class="links my-3">
            <h5 class="text-light">Links</h5>
            <ul class="list-unstyled text-capitalize lh-lg">
              <li>home</li>
              <li>our services</li>
              <li>portfolio</li>
              <li>testimonials</li>
              <li>support</li>
              <li>terms and condition</li>
            </ul>
          </div>
        </div>
        <!-- +++++++++++++++ Column 3 +++++++++++++++ -->
        <div class="col-lg-2 col-md-6">
          <div class="aboutUs text-capitalize lh-lg my-3">
            <h5 class="text-light">about us</h5>
            <ul class="list-unstyled text-capitalize lh-lg-">
              <li>sign in</li>
              <li>register</li>
              <li>about us</li>
              <li>blog</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <!-- +++++++++++++++ Column 4 +++++++++++++++ -->
        <div class="col-lg-4 col-md-6 col-xs-12">
          <div class="contactUs text-capitalize my-3">
            <h5 class="text-light">contact us</h5>
            <p class="lh-lg mt-3 mb-5">
              Lorem ipsum dolor sit amet adipisicing elit. Quo quisquam
              doloremque velit ex quas
            </p>
            <!-- +++++++++ contactUs button +++++++++ -->
            <a class="col-lg-2 col-md-12 col-sm-12 w-100">
              <input
                type="submit"
                value="mahmoudtokhey@gmail.com"
                class="main-btn rounded-pill px-5 border-0"
                href="#"
              />
            </a>
            <!-- +++++++++ contactUs social icons +++++++++ -->
            <ul class="d-flex list-unstyled mt-5 gap-5">
              <li>
                <a
                  href="https://facebook.com"
                  class="d-block text-light text text-decoration-none"
                >
                  <i
                    class="fa-brands fa-facebook myFacebookIcon fa-lg rounded-circle p-2 text-bg-primary text-light"
                  ></i
                ></a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  class="d-block text-light text-decoration-none"
                >
                  <i
                    class="fa-brands fa-twitter myTwitterIcon fa-lg rounded-circle p-2 text-bg-info text-light"
                  ></i
                ></a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  class="d-block text-light text-decoration-none"
                >
                  <i
                    class="fa-brands fa-linkedin myLinkedinIcon fa-lg rounded-circle p-2 text-bg-primary text-light"
                  ></i
                ></a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  class="d-block text-light text-decoration-none"
                >
                  <i
                    class="fa-brands fa-youtube myYoutubeIcon fa-lg rounded-circle p-2 text-bg-danger text-light"
                  ></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ////////////////////////// end : footer section //////////////////////// -->
</template>

<script>
// @ is an alias to /src
import PriceComp from "../components/PriceComp.vue";
export default {
  name: "ContactView",
  components: { PriceComp },
};
</script>
<style>
/* //////////////////////// Start : our work page //////////////////////// */
.our-work {
  background-color: var(--section-color);
}
/* ++++++++++++++++++++++ Tabs filter ++++++++++++++++++++++ */
/* -------------- active tab -------------- */
.our-work ul .active {
  background-color: var(--red-color);
  color: var(--yellow-color);
}
/* --------- Tabs filter : <li></li> ------ */
.our-work ul li {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
/* --------- Tabs filter : <li></li> : when hover on tabs that "not active" ------ */
.our-work ul li:not(.active):hover {
  color: var(--red-color);
}
/* ++++++++++++++++ Work Blocks +++++++++++++++ */
.our-work .work-block {
  position: relative;
  padding: 5px;
  overflow: hidden;
  cursor: pointer;
}
/* +++++++++ Work Blocks : before +++++++++ */
.our-work .work-block::before {
  content: attr(data-work); /* "Application" will put before block */
  position: absolute;
  background-color: rgba(51, 209, 204, 0.5);
  /* 10px ==> padding-left=5px , padding-right=5px */
  width: calc(100% - 10px);
  /* 10px ==> padding-top=5px , padding-bottom=5px */
  height: calc(100% - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-size: 1.5rem;
  transition: 0.5s all ease-in-out;
  transform: translateX(calc(-100% - 5px));
}
/* +++++++++ Work Blocks ::before : hover +++++++++ */
.our-work .work-block:hover::before {
  transform: translateX(0);
}
/* ////////////////////////// start : pricing section //////////////////////// */
.pricing {
  background-color: #ececec;
  padding: 10px;
}
/* //////////////////////// start : subscribe section /////////////////////// */
.subscribe {
  background-color: var(--yellow-color);
}
.subscribe .main-btn {
  background-color: var(--dark-color) !important;
}
/* +++++++++ subscribe inputField +++++++++ */
.subscribe input[type="text"] {
  border: none;
  border-bottom: 1px solid #fff;
}
/* ------------- input placeholder ------- */
.subscribe input[type="text"]::placeholder {
  color: #fff;
}
.subscribe input[type="text"]:focus {
  outline: none;
}
/* ------------- subscribe button ------- */
.subscribe input[type="submit"] {
  background-color: var(--dark-color);
  color: var(--yellow-color);
  transition: 0.2s ease-in-out;
}
.subscribe input[type="submit"]:hover {
  background-color: var(--green-color);
  color: var(--section-color);
  border-color: var(--green-color);
}
/* ////////////////////////// start : footer section //////////////////////// */
.footer {
  background-color: var(--dark-color);
}
/* --------------- copyright ----------- */
/* give color to "grapberry" */
.footer .copyright > span {
  color: var(--green-color);
}
.footer .copyright > div span {
  color: var(--yellow-color);
}
/* +++++++++ contactUs social icons +++++++++ */
.footer .contactUs ul li a i {
  width: 35px;
  height: 35px;
  /* put icons in the middle of circle */
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;
}
</style>
