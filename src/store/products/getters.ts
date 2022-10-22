import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { ProductState } from './types';
export const getters: GetterTree<ProductState, RootState> = {
    getProdcts(state): object {
        return state.products = [
          {
            "id":1,
            "category": "SVU",
            "color": "Blue",
            "maker": "Honda",
            "registration": "ANB-15",
            "model": 2014
          },
          {
              "id":2,
              "category": "Sedan",
              "color": "Red",
              "maker": "Honda",
              "registration": "ANB-15",
              "model": 2014
            },
            {
              "id":3,
              "category": "Truck",
              "color": "Blue",
              "maker": "Toyota",
              "registration": "AEE-11",
              "model": 2014
            },
            {
              "id":4,
              "category": "Sedan",
              "color": "Yellow",
              "maker": "W-Motors",
              "registration": "HJK-443",
              "model": 2018
            }
          
          
          
          
          
        ]
      },
}