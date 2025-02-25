import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getBreweries } from './thunks';

export interface initialStateInterface {
  breweries: any;
  size: number;
  loading: boolean | undefined;
  error: string | undefined;
}

export const initialState: initialStateInterface = {
  breweries: {},
  size: 0,
  loading: undefined,
  error: undefined,
};

export const BreweriesSlice = createSlice({
  name: 'breweries',
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<{ data: number }>) => {
      state.size = action.payload.data;
    }
  },
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
