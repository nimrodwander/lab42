import { createSlice } from '@reduxjs/toolkit';
import { getBreweries } from './thunks';

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

export const BreweriesSlice = createSlice({
  name: 'breweries',
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
