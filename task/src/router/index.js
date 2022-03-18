import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login";
import Cat from "../components/cat.vue";
import Makeup from "../components/makeup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },

  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Cat",

    path: "/cat",
    component: Cat,
  },
  {
    name: "Makeup",

    path: "/makeup",
    component: Makeup,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
