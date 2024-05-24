import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ViewHome from "../views/ViewHome.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: ViewHome,
  },
  {
    path: "/favs",
    component: () => import("../views/ViewFavProducts.vue"),
  },
  {
    path: "/products/:id",
    name: "product-details",
    component: () => import("../views/ViewProductDetails.vue"),
  },
  {
    path: "*",
    component: () => import("../views/ViewNotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
