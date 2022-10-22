import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserState } from './types';
import { UserMutations } from './mutations-types';
import { users } from ".";


export const actions: ActionTree<UserState, RootState> = {
    async getUsersData({commit, getters}, payload): Promise<void> {
        try {
          const data = getters['getUser']
          data.push(payload)
          commit(UserMutations.SET_USER_INFO, data)
          return data
        } catch (error : any) {
          return error.response.data;
        }
      },
      async login({commit, getters}, payload): Promise<void> {
        try {
          const data = getters['getUser']
          const longer = data.filter(users);
          // let featured_data = filter(data, (o:object)=>o['featured']>=1);
          data.push(payload)
        } catch (error : any) {
          return error.response.data;
        }
      },
      
   async createAccount({commit,getters},payload):Promise<void> {
    try {
      debugger
      const data = getters['getUser']
      data.push(payload)
      commit(UserMutations.SET_USER_INFO, data)
      return data
    } catch (error : any) {
      return error.response.data;
    }
   },

}