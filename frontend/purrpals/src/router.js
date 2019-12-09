import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import AdoptionRequest from "@/views/AdoptionRequest";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/kittens/:id/adoption-request",
      name: "adoption-request",
      component: AdoptionRequest,
      props: true
    }
  ]
});

export default router;
