import { ActionTree } from "vuex";
import { RootState } from "../types";
import { ProductState } from './types';
import { ProductsMutations } from './mutation-types';


export const actions: ActionTree<ProductState, RootState> = {
    async getProdctsData({commit, getters}, payload): Promise<void> {
        try {
          debugger
          const data = getters['getProdcts']
          data.push(payload)
          commit(ProductsMutations.SET_PRODUCTS_INFO, data)
          return data
        } catch (error : any) {
          return error.response.data;
        }
      },

   async addProduct({commit,getters},payload):Promise<void> {
    try {
      debugger
      const data = getters['getProdcts']
      data.push(payload)
      commit(ProductsMutations.SET_PRODUCTS_INFO, data)
      return data
    } catch (error : any) {
      return error.response.data;
    }
   },
   async deleteProduct({commit,getters},payload):Promise<void> {
    try {
      debugger
      const data = getters['getProdcts']
      data.splice(payload, 1)
      commit(ProductsMutations.SET_PRODUCTS_INFO, data)
      return data
    } catch (error : any) {
      return error.response.data;
    }
   },
   async updateProduct({commit,getters},payload):Promise<void> {
    try {
      debugger
      const data = getters['getProdcts']
       Object.assign(data[payload.index], payload)
      commit(ProductsMutations.SET_PRODUCTS_INFO, data)
      return data
    } catch (error : any) {
      return error.response.data;
    }
   }
}