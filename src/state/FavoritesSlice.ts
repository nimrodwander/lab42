import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppBreweriesList, AppBreweryItem } from '../util/types';

export interface initialStateInterface {
  breweries: AppBreweriesList;
}

export const initialState: initialStateInterface = {
  breweries: {},
};

export const FavoritesSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ card: AppBreweryItem }>) => {
      action.payload.card.isFavorite = true;
      state.breweries[action.payload.card.id] = action.payload.card;
    },
    remove: (state, action: PayloadAction<{ id: string }>) => {
      delete state.breweries[action.payload.id];
    },
  },
});

export const FavoritesActions = FavoritesSlice.actions;
export const FavoritesReducer = FavoritesSlice.reducer;
