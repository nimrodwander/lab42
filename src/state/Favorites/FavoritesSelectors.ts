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

  export const selectAllFavoritesID = (state: RootState) => {
    return Object.keys(state.BreweriesReducer.breweries);
  };
}

export namespace BrewriesSelector {
  //combines both temporary data from the api and data from favorites
  //such that if a brewery was fetched from the api a brewery with the same id exists
  //in the favorites store it will select it from that source rather than the api
  //this functionallity removes duplications
  export const selectBreweryByID = (
    state: RootState,
    id: string
  ): AppBreweryItem => {
    if (state.FavoritesReducer.breweries.hasOwnProperty(id)) {
      return FavoritesSelectors.selectFavoriteBreweryByID(state, id);
    } else {
      return state.BreweriesReducer.breweries[id];
    }
  };

  //leverages the select selectBreweryByID capabillity by iterating over all breweries fetched from the api
  export const selectAllBreweries = (state: RootState): AppBreweriesList => {
    let res: AppBreweriesList = {};
    Object.keys(state.BreweriesReducer.breweries).forEach((id: string) => {
      res[id] = selectBreweryByID(state, id);
    });

    return res;
  };

  export const selectAllBreweriesIDs = (state: RootState) => {
    return Object.keys(state.BreweriesReducer.breweries);
  };
}
