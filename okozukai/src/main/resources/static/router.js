import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import login from "./views/login.js";
import income from "./views/income.js";
import outcome from "./views/outcome.js";
import history from "./views/history.js";
import myPage from "./views/myPage.js";

export const router = new VueRouter({
  mode: "history",

  routes: [
    {
      name: "login",
      path: "/",
      component: login,
    },

    {
      name: "income",
      path: "/income",
      component: income,
    },

    {
      name: "outcome",
      path: "/outcome",
      component: outcome,
    },
  
    {
      name: "myPage",
      path: "/mypage",
      component: myPage,
    },
  
    {
      name: "history",
      path: "/history",
      component: history
    }
  ]
});
