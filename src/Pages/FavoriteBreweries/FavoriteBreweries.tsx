import { Box, Grid } from '@mui/material';
import { BreweryCard } from '../../UI/Smart/BreweryCard';
import { BrewriesSelector } from '../../state/Breweries/BreweriesSelectors';
import { FavoritesSelectors } from '../../state/Favorites/FavoritesSelectors';
import { useSelectorApp } from '../../state/hooks';

export const FavoriteBreweries: React.FC = () => {
  const selectIDs = useSelectorApp(FavoritesSelectors.selectAllFavoritesIDs);

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
      <Grid container spacing={15} padding={15}>
        {mapChildren()}
      </Grid>
    </Box>
  );
}
