import { IState } from "@/types/store/IState";
import { IProduct } from "@/types/IProduct";
import {
  GET_PRODUCTS,
  TOGGLE_PRODUCTS_LOADING,
  TOGGLE_PRODUCTS_ERROR,
  ADD_PRODUCT_TO_FAVS,
  REMOVE_PRODUCT_FROM_FAVS,
} from "@/constants/mutations";

export interface IMutations {
  [GET_PRODUCTS](state: IState, products: IProduct[]): void;
  [TOGGLE_PRODUCTS_LOADING](state: IState, loadingStatus: boolean): void;
  [TOGGLE_PRODUCTS_ERROR](state: IState, errorStatus: boolean): void;
  [ADD_PRODUCT_TO_FAVS](state: IState, productId: number): void;
  [REMOVE_PRODUCT_FROM_FAVS](state: IState, productId: number): void;
}
