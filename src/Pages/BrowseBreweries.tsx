import { Box, Paper } from '@mui/material';
import * as React from 'react';
import { AppPagination } from '../UI/Dumb/Pagination';
import { BreweriesGrid } from '../UI/Smart/BreweriesGrid';
import { SearchBrewery } from '../UI/Smart/SearchBrewery';
import { selectAllBreweries } from '../state/selectors';
import { Route, Routes } from 'react-router-dom';
import { BreweryProfile } from './BreweryProfile';
import { BreweriesPagination } from '../UI/Smart/Pagination';

export const BrowseBreweries: React.FC = () => {
  return (
    <Box>
      <SearchBrewery />
      <BreweriesGrid selector={selectAllBreweries} />
      <BreweriesPagination/>
      </Box>
  );
};

