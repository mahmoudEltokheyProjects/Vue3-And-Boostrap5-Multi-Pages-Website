<template>
  <!-- ========================== Navbar ========================= -->
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <!-- ++++++++++++++++++++ Logo ++++++++++++++++++++ -->
      <router-link class="navbar-brand" to="/">
        <img src="../assets/imgs/logo.png" alt="Image Not Found" />
      </router-link>
      <!-- ++++++++++++++++++++ menubar button ++++++++++++++++++++ -->
      <button
        class="navbar-toggler"
        type="button"
        :class="visible ? null : 'collapsed'"
        data-bs-toggle="collapse"
        data-bs-target="#navContent"
        aria-controls="navContent"
        :aria-expanded="visible ? 'true' : 'false'"
        @click="visible = !visible"
        aria-label="Toggle navigation"
      >
        <!-- ------ menubar icon ---- -->
        <i class="fab fa-solid fa-bars"></i>
      </button>
      <!-- ++++++++++++++++++++ navbar Links ++++++++++++++++++++ -->
      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link p-2 p-lg-3"
              active-link="active"
              to="/"
              @click="visible = !visible"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link p-2 p-lg-3"
              to="/about"
              @click="visible = !visible"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link p-2 p-lg-3"
              to="/services"
              @click="visible = !visible"
              >Services</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link p-2 p-lg-3"
              to="/portfolio"
              @click="visible = !visible"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link p-2 p-lg-3"
              to="/contact"
              @click="visible = !visible"
              >Contact</router-link
            >
          </li>
        </ul>
        <!-- ++++++++++++++++ search icon  ++++++++++++++++ -->
        <!-- display icon in large screen only -->
        <div class="search ps-3 pe-3 d-none d-lg-block">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <!-- ++++++++++++++++ login button ++++++++++++++++ -->
        <a class="btn rounded-pill main-btn" href="#">Login</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavbarComp",
};
</script>

<style>
body {
  font-family: "Roboto" sans-serif;
  height: 1000px;
}
/* ================================== Global Style for All Elements in Project ================================== */
* {
  padding: 0;
  margin: 0;
}
/* ================================== start Navbar ================================== */
.navbar {
  background-color: var(--dark-color);
}
/* ++++++++++++++++++++ navbar links ++++++++++++++++++++ */
.navbar .navbar-nav .nav-link {
  color: #fff;
}
/* +++++++++++++ navbar links : active links +++++++++++ */
.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: var(--green-color);
}
/* ++++++++ search icon ++++++++ */
.navbar .search {
  border-left: 1px solid var(--green-color);
}
.navbar .search i {
  color: var(--green-color);
}
/* ++++++++ menubar icon ++++++++ */
.navbar .navbar-toggler {
  color: #fff;
  font-size: 25px;
  border-color: #fff;
}
/* ++++++++ menubar icon : hide box-shadow ++++++++ */
.navbar .navbar-toggler:focus {
  box-shadow: none;
}
/* ++++++++ menubar icon : make menubar-border is green when aria-expanded="true" ++++++++ */
.navbar .navbar-toggler:focus[aria-expanded="true"] {
  border-color: var(--green-color);
}
/* ================================== end Navbar ================================== */
</style>
