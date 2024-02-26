import { createAction } from '@reduxjs/toolkit';

//the action used to envoke the normallization function
export const normallize = createAction<object>('normallize');

//action triggers opening\ closing a node
export const toggleNode = createAction<string>('toggle folder');
export const setVisibiltyByID = createAction<{
  visibility: boolean;
  IDs: string[];
}>('change children visibilty by ID');
