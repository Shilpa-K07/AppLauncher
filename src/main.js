import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import AppLauncher from "./views/AppLauncher.vue";
import "@mdi/font/css/materialdesignicons.css";

Vue.component("app-launcher", AppLauncher);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export { AppLauncher };
