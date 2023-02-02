import Vue from "vue";
import Router from "vue-router";
import AppLauncher from "../views/AppLauncher.vue";
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "AppLauncher",
    component: AppLauncher
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
