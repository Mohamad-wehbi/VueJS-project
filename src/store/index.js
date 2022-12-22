import Vue from "vue";
import Vuex from "vuex";
import UserModule from "./module/UserModule";
import ProdectModule from "./module/ProdectModule";

Vue.use(Vuex);

export default new Vuex.Store({
  
  modules: {
   a: UserModule,
   b: ProdectModule,
  },
});
