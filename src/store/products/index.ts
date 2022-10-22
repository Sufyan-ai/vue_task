import { Module } from "vuex";
import { RootState } from "../types";
import { ProductState } from './types';
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

const state: ProductState = {
    products: []
  }
  
  export const products: Module<ProductState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }