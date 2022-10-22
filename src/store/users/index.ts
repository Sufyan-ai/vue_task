import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from './types';
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './action'

const state: UserState = {
    users: []
  }
  
  export const users: Module<UserState, RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }