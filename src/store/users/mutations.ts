import { MutationTree } from 'vuex';
import { UserMutations } from './mutations-types';
import { UserState } from './types';

export const mutations: MutationTree<UserState> = {
    [UserMutations.SET_USER_INFO](state, payload: any) {
        state.users = payload
      },
}