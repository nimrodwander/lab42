import { createAction, createReducer } from '@reduxjs/toolkit';
import { CollapseModes } from '../../util/Types';

//alternates between first and second collapsing mode
export const changeCollapseMode =
  createAction<CollapseModes>('changeCollapseMode');
