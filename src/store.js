"use strict";

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isOldBrowser: false,
  user: {},
  showMessenger: false,
  messengerOpts: {}
};

export const mutations = {
  setOldBrowser(state, isOld) {
    state.isOldBrowser = isOld;
  },
  setUser(state, user) {
    state.user = user;
  },
  showMessenger(state, val) {
    state.showMessenger = val;
  },
  setMessenger(state, val) {
    state.messengerOpts = val;
  }
};

export const actions = {
  setIsOldBrowser({ commit }, val) {
    commit("setOldBrowser", val);
  },
  showMessenger({ commit }) {
    commit("showMessenger", true);
  },
  hideMessenger({ commit }) {
    commit("showMessenger", false);
  },
  setMessenger({ commit }, val) {
    commit("setMessenger", val);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
