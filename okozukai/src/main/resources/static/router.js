import Vue from "./libs/vue.esm.browser.js";
import VueRouter from "./libs/vue-router.esm.browser.js";
Vue.use(VueRouter);

import login from "./views/login.js";
import choice from "./views/choice.js";
import addAction from "./views/addAction.js";
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
      name: "choice",
      path: "/choice",
      component: choice,
    },
  
    {
      name: "myPage",
      path: "/mypage",
      component: myPage,
    },
  
    {
      name: "addAction",
      path: "/addAction",
      component: addAction,
    },
  ],
});
