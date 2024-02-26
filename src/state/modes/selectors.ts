import { RootState } from "../store";

export const selectCollapseMode = (state: RootState) =>
  state.modesReducer.collapseMode;
