import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Auth/login";

Vue.use(VueRouter);

const routes = [
  {
    name: "Login",
    component: Login,
    path: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
