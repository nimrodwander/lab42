//reusable Selectors

import { AppBreweriesList, AppBreweryItem } from '../../util/types';
import { RootState } from '../store';

export namespace FavoritesSelectors {
  export const selectFavoriteBreweryByID = (
    state: RootState,
    id: string
  ): AppBreweryItem => {
    return state.FavoritesReducer.breweries[id];
  };

  export const selectAllFavorites = (state: RootState): AppBreweriesList => {
    return state.FavoritesReducer.breweries;
  };

  export const selectAllFavoritesIDs = (state: RootState) => {
    return Object.keys(state.FavoritesReducer.breweries);
  };
}
