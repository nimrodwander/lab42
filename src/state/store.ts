import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BreweriesReducer } from './Breweries/BreweriesSlice';
import { FavoritesReducer } from './Favorites/FavoritesSlice';

const rootReducer = combineReducers({ BreweriesReducer, FavoritesReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
