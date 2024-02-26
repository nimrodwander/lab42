import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { fileSystemReducer } from './fileSystem/reducer';
import { modesReducer } from './modes/reducer';

const rootReducer = combineReducers({ fileSystemReducer, modesReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
