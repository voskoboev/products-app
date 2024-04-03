import { Commit } from "vuex";

export interface IActions {
  getProducts: (context: { commit: Commit }) => Promise<void>;
}
