import { IProduct } from "@/types/IProduct";

export interface IState {
  products: IProduct[];
  favProducts: IProduct[];
  isProductsLoading: boolean;
  isProductsError: boolean;
}