import { createReducer } from '@reduxjs/toolkit';
import { CollapseModes } from '../../util/Types';
import { changeCollapseMode } from './actions';

interface InitialState {
  collapseMode: CollapseModes;
}

const initialState: InitialState = {
  collapseMode: CollapseModes.PRESERVE,
};

//handles the 2 modes from task 2
export const modesReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCollapseMode, (state, action: any) => {
    state.collapseMode = action.payload;
  });
});
