import Vue from "vue";
import Vuex from "vuex";
import appone from './modules/appone'
import apptwo from './modules/apptwo'

Vue.use(Vuex);

export default new Vuex.Store({
  state : {},
  getters:{},
  actions: {},
  mutations:{},
  modules : {
    appone,
    apptwo
  }
});
