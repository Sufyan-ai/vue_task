import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { users } from './users/index';
import { products } from './products/index';

Vue.use(Vuex)
Vue.use(Vuex)
export const storeState: StoreOptions<RootState> = {
  modules: {
  users,
  products
  },

} 

export const store = new Vuex.Store<RootState>(storeState)
export default store

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
