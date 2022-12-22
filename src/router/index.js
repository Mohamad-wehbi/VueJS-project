import Vue from "vue";
import VueRouter from "vue-router";
import UsersView from "../views/UsersView.vue";
import ProdectView from "../views/ProdectView.vue";
import ContactView from "../views/ContactView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UsersView",
    component: UsersView,
  },
  {
    path: "/prodect",
    name: "prodect",
    component: ProdectView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
