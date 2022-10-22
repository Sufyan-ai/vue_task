import { MutationTree } from 'vuex';
import { ProductsMutations } from './mutation-types';
import { ProductState } from './types';

export const mutations: MutationTree<ProductState> = {
    [ProductsMutations.SET_PRODUCTS_INFO](state, payload: any) {
        state.products = payload
      },
}