import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../util/config';
import { ApiBreweryItem, AppBreweriesList } from '../../util/types';
import { RootState } from '../store';

export const getBreweries = createAsyncThunk<
  AppBreweriesList,
  { searchTerm: string; page: string; elementsPerPage?: number },
  { state: RootState }
  >('Breweries/get', async ({ searchTerm, page }, thunkAPI) => {
  if (!searchTerm) {
    console.error('missing search term');
  }
  searchTerm = searchTerm.split(' ').join('&');
  const response = await fetch(
    `${API_BASE_URL}/v1/breweries/search?query=${searchTerm}&page=${page}&per_page=${ITEMS_PER_PAGE}`
  );
  const data: ApiBreweryItem[] = await response.json();
  let res: AppBreweriesList = {};
  data.forEach((item: ApiBreweryItem) => {
    res[item.id] = { ...item, isFavorite: false };
  });
  return res;
});
