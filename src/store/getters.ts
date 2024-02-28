import { GetterTree } from "vuex";
import { IState } from "@/types/store/IState";
import { IGetters } from "@/types/store/IGetters";

export const getters: GetterTree<IState, unknown> & IGetters = {
  favsAmount: (state) => {
    return state.favProducts.length;
  },

  isFavsEmpty: (state) => {
    return state.favProducts.length === 0;
  },
};
