import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { UserState } from './types';
export const getters: GetterTree<UserState, RootState> = {
    getUser(state): object {
        return state.users =  [
          {
            "id":1,
            "first_name": "Ali",
            "last_name": "Hamza",
            "email": "ali@gmail.com",
            "password": "password"
          },
          {
            "id":2,
            "first_name": "Asad",
            "last_name": "Mohsin",
            "email": "asad1@gmail.com",
            "password": "password12"
          },
          ]
      },
}