<template>
  <div class="container my-5">
    <!-- ========================================= about us ========================================= -->
    <div class="row">
      <!-- +++++++++++++++++++ left column : info +++++++++++++++++++ -->
      <div class="col-lg-4 col-md-12 col-sm-12">
        <h2 class="font-weight-light mb-4 text-capitalize fs-1">about</h2>
        <p class="para1 text-black-50 fs-6 my-4">
          This is a
          <span class="fw-bold text-black text-capitalize"
            >creative agency</span
          >
          template that is built to present your services and showcase your work
          in a professional way this is conrad a digital agency .
        </p>
        <p class="text-black-50 my-4">
          Conrad looks good on desktopt and on mobile.We've carefully
          constructed each section made sure that it look great on any device.
        </p>
        <!-- Add the style and icon you want using the String format -->
        <button type="button" class="btn btn-primary my-3">Read More</button>
      </div>
      <!-- ++++++++++++++++ middle column : image +++++++++++++++++ -->
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="../assets/imgs/work-01.jpg" class="img-fluid" />
        <h4 class="my-3 text-capitalize fw-bold">the awesome team</h4>
        <p class="text-black-50 fs-6">
          These guys are incredible!Conrad looks good on desktopt and on mobile
          and it was awesome! Very good service! Highly Conrad looks good and on
          mobile
        </p>
      </div>
      <!-- +++++++++++ right part +++++++++++ -->
      <div class="col-lg-4 col-md-6 col-sm-12">
        <img src="../assets/imgs/work-04.jpg" class="img-fluid" />
        <h4 class="my-3 text-capitalize fw-bold">the office</h4>
        <p class="text-black-50 fs-6">
          These guys are incredible!Conrad looks good on desktopt and on mobile
          and it was awesome! Very good service! Highly Conrad looks good and on
          mobile
        </p>
      </div>
    </div>
    <!-- ========================================= features ========================================= -->
    <div class="row text-center my-5">
      <!-- +++++++++++++++++++ box +++++++++++++++++++ -->
      <div class="col-lg-3 col-md-6 col-sm-12 my-sm-3">
        <div class="icon">
          <i class="fa fa-fax fa-2x"></i>
        </div>
        <h4 class="text-uppercase my-3">print desing</h4>
        <p class="para1 text-black-50 fs-6 my-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum .
        </p>
      </div>
      <!-- +++++++++++++++++++ box +++++++++++++++++++ -->
      <div class="col-lg-3 col-md-6 col-sm-12 my-sm-3">
        <div class="icon">
          <i class="fa fa-desktop fa-2x"></i>
        </div>
        <h4 class="text-uppercase my-3">web design</h4>
        <p class="para1 text-black-50 fs-6 my-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum .
        </p>
      </div>
      <!-- +++++++++++++++++++ box +++++++++++++++++++ -->
      <div class="col-lg-3 col-md-6 col-sm-12 my-sm-3">
        <div class="icon">
          <i class="fa fa-mobile fa-2x"></i>
        </div>
        <h4 class="text-uppercase my-3">app desing</h4>
        <p class="para1 text-black-50 fs-6 my-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum .
        </p>
      </div>
      <!-- +++++++++++++++++++ box +++++++++++++++++++ -->
      <div class="col-lg-3 col-md-6 col-sm-12 my-sm-3">
        <div class="icon">
          <i class="fa fa-home fa-2x"></i>
        </div>
        <h4 class="text-uppercase my-3">logo desing</h4>
        <p class="para1 text-black-50 fs-6 my-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum .
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronComp",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ========================================= features ========================================= */
/* ++++ icon ++++ */
.icon i {
  width: 100px;
  height: 100px;
  text-align: center;
  background-color: #fff;
  color: #f7600e;
  border-radius: 50%;
  border: 1px solid #ccc;
  /* box بتاع الايقون عشان الايقون تكون في منتصف ال height نفس قيمة ال line-height هخلي قيمة ال */
  line-height: 100px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.icon i:hover {
  background-color: #f7600e;
  color: #fff;
}
</style>
