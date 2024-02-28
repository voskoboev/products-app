import { MutationTree } from "vuex";
import { IState } from "@/types/store/IState";
import { IMutations } from "@/types/store/IMutations";
import {
  GET_PRODUCTS,
  TOGGLE_PRODUCTS_LOADING,
  TOGGLE_PRODUCTS_ERROR,
  ADD_PRODUCT_TO_FAVS,
  REMOVE_PRODUCT_FROM_FAVS,
} from "@/constants/mutations";

export const mutations: MutationTree<IState> & IMutations = {
  [GET_PRODUCTS]: (state, products) => {
    state.products = products;
  },

  [TOGGLE_PRODUCTS_LOADING]: (state, loadingStatus) => {
    state.isProductsLoading = loadingStatus;
  },

  [TOGGLE_PRODUCTS_ERROR]: (state, errorStatus) => {
    state.isProductsError = errorStatus;
  },

  [ADD_PRODUCT_TO_FAVS]: (state, productId) => {
    const selectedProduct = state.products.find(
      (product) => product.id === productId
    );

    const doubledProduct = state.favProducts.some(
      (product) => product.id === productId
    );

    if (selectedProduct && !doubledProduct) {
      state.favProducts.push(selectedProduct);
    }
  },

  [REMOVE_PRODUCT_FROM_FAVS]: (state, productId) => {
    const productToRemoveIndex = state.favProducts.findIndex(
      (product) => product.id === productId
    );

    if (productToRemoveIndex !== -1) {
      state.favProducts.splice(productToRemoveIndex, 1);
    }
  },
};
