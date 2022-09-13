import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  // "home page" router
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // "about page" router
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  // "Services page" router
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  // "Portfolio page" router
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
  // "Contact page" router
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
