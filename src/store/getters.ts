import { IState } from "@/types/store/IState";
import { GetterTree } from "vuex";
import { IGetters } from "@/types/store/IGetters";

export const getters: GetterTree<IState, unknown> & IGetters = {
  favsAmount: (state: IState) => {
    return state.favProducts.length;
  },

  isFavsEmpty: (state) => {
    return state.favProducts.length === 0;
  },
};
