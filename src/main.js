import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import tooltipDirective from "@/directives/tooltip.directive";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import 'materialize-css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.directive('tooltip', tooltipDirective);
Vue.directive("filter", {
  bind: function(el, binding) {
    let inputHandler = function(e) {
      var ch = String.fromCharCode(e.which)
      var re = new RegExp(binding.value)
      if (!ch.match(re)) {
        e.preventDefault()
      }
    }
    el.addEventListener("keypress", inputHandler)
  },
  inputHandler: null,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
