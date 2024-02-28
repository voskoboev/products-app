import { ActionTree } from "vuex";
import axios from "axios";
import { IState } from "@/types/store/IState";
import { IActions } from "@/types/store/IActions";
import { PRODUCTS_API, PRODUCTS_LIMIT_TO_SHOW } from "@/constants/products";
import {
  GET_PRODUCTS,
  TOGGLE_PRODUCTS_LOADING,
  TOGGLE_PRODUCTS_ERROR,
} from "@/constants/mutations";

export const actions: ActionTree<IState, unknown> & IActions = {
  getProducts: async ({ commit }) => {
    try {
      const res = await axios.get(
        `${PRODUCTS_API}?limit=${PRODUCTS_LIMIT_TO_SHOW}`
      );

      commit(TOGGLE_PRODUCTS_LOADING, false);
      commit(GET_PRODUCTS, res.data);
    } catch (err) {
      commit(TOGGLE_PRODUCTS_LOADING, false);
      commit(TOGGLE_PRODUCTS_ERROR, true);
      console.error(`Products request error. ${err}`);
    }
  },
};
