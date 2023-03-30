import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/style/main.scss";
Vue.config.productionTip = false;
/*https://my-json-server.typicode.com/RaSa03/fakeServerForBankiShop/renaissance-paintings*/
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
