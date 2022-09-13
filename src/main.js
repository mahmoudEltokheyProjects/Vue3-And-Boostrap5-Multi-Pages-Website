import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "Bootstrap5.css" library
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/all.min.css";
createApp(App).use(store).use(router).mount("#app");
// import "Bootstrap5.js" library
import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/all.min.js";
