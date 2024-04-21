import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppBreweriesList, AppBreweryItem } from '../../util/types';

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
    toggle: (state, action: PayloadAction<{ data: AppBreweryItem }>) => {
      const data = { ...action.payload.data };

      if (state.breweries.hasOwnProperty(data.id)) {
        let newState = { ...state.breweries };
        delete newState[data.id];
        state.breweries = newState;
      }
      else {
        data.isFavorite = true;
        state.breweries = {
          ...state.breweries,
          [data.id]: data,
        };
      }
    }
  }
});

export const FavoritesActions = FavoritesSlice.actions;
export const FavoritesReducer = FavoritesSlice.reducer;
