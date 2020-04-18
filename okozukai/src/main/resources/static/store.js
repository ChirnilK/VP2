import Vue from "./libs/vue.esm.browser.js";
import Vuex from "./libs/vuex.esm.browser.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    user: null,
    inouts: []
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    // appendBooking(state, book) {
    //   state.bookings.push(book);
    // },
    
    setUser(state, user) {
      state.user = user;
    },
    // setBookings(state, bookings) {
    //   state.bookings = bookings;
    // }
  }
});
