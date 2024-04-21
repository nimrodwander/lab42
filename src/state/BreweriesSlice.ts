import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiBreweryItem, AppBreweriesList } from '../util/types';
import { RootState } from './store';
import { API_BASE_URL, ITEMS_PER_PAGE } from '../util/config.env';

export interface initialStateInterface {
  breweries: any;
  loading: boolean | undefined;
  error: string | undefined;
}

export const initialState: initialStateInterface = {
  breweries: {},
  loading: undefined,
  error: undefined,
};

export const getBreweries = createAsyncThunk<
  AppBreweriesList,
  { searchTerm: string; page: string; elementsPerPage?: number },
  { state: RootState }
>('Breweries/get', async ({ searchTerm, page }, thunkAPI) => {
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

export const BreweriesSlice = createSlice({
  name: 'bereweries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBreweries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBreweries.fulfilled, (state, action) => {
        state.loading = false;
        state.breweries = action.payload;
      })
      .addCase(getBreweries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const BreweriesActions = BreweriesSlice.actions;
export const BreweriesReducer = BreweriesSlice.reducer;
