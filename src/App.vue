<template>
  <div id="app">
    <!-- ++++++++++++++++ navbar component ++++++++++++++++ -->
    <!-- النافبار ثابت في كل الصفحات عشان كده حطيته في الصفحة الرئيسية  -->
    <navbar-comp />
    <!-- اهميتها هي اني لما اضغط علي لينك معين بيجيب محتوي الصفحة وبيحطه مكانه -->
    <router-view />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";

export default {
  name: "App",
  components: { NavbarComp },
};
</script>

<style>
/* ================================== Global Style for All Elements in Project ================================== */
* {
  padding: 0;
  margin: 0;
}
/* ================================== start landing ================================== */
.landing {
  background-color: var(--dark-color);
  min-height: calc(100vh - 72px);
}
/* ================================== main color ================================== */
:root {
  --dark-color: #19283f;
  --green-color: #33d1cc;
  --red-color: #ff3150;
  --yellow-color: #ffc400;
  --section-color: #eff7fa;
}
.main-btn {
  background-color: var(--red-color) !important;
  color: var(--yellow-color) !important;
  padding: 0.5rem 1rem;
}
.main-btn:hover {
  background-color: var(--green-color) !important;
  color: #fff !important;
  border-color: var(--green-color) !important;
}
</style>
