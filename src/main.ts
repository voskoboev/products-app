import "../node_modules/normalize.css/normalize.css";
import "@/assets/styles/main.scss";

import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import AppCard from "@/components/UI/AppCard.vue";
import AppButton from "@/components/UI/AppButton.vue";
import AppPagination from "@/components/UI/AppPagination.vue";

Vue.config.productionTip = false;

Vue.component("AppButton", AppButton);
Vue.component("AppCard", AppCard);
Vue.component("AppPagination", AppPagination);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
