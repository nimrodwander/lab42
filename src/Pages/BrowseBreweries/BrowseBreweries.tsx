import { Box, Grid } from '@mui/material';
import { AppLoading } from '../../UI/Dumb/Loading';
import { BreweryCard } from '../../UI/Smart/BreweryCard';
import { BrewriesSelector } from '../../state/Breweries/BreweriesSelectors';
import { useSelectorApp } from '../../state/hooks';
import { BreweriesPagination } from './Pagination';
import { SearchBrewery } from './SearchBrewery';

export const BrowseBreweries: React.FC = () => {
  const selectIDs = useSelectorApp(BrewriesSelector.selectAllBreweriesIDs);
  const isLoading = useSelectorApp((state) => state.BreweriesReducer.loading);

  const mapChildren = () => {
    return selectIDs.map((id: string) => {
      return (
        <Grid item xs={3}>
          <BreweryCard id={id} selector={BrewriesSelector.selectBreweryByID} />
        </Grid>
      );
    });
  };

  return (
    <Box>
      <SearchBrewery />
      <AppLoading isLoading={isLoading}>
        <Grid container spacing={15} padding={15}>
          {mapChildren()}
        </Grid>
      </AppLoading>
      <BreweriesPagination />
    </Box>
  );
};
