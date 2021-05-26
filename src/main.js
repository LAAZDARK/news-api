import Vue from "vue";
import "./plugins/vuex";
import "./plugins/vue-router";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element";
import "./plugins/moments";
// import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
