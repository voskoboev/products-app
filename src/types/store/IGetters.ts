import { IState } from "@/types/store/IState";

export interface IGetters {
  favsAmount: (state: IState) => number;
  isFavsEmpty: (state: IState) => boolean;
}
