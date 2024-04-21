import { Box, Grid } from "@mui/material";
import { SearchBrewery } from "../UI/Smart/SearchBrewery";
import { BreweriesPagination } from "../UI/Smart/Pagination";
import { BrewriesSelector } from "../state/Favorites/FavoritesSelectors";
import { useSelectorApp } from "../state/hooks";
import { BreweryCard } from "../UI/Smart/BreweryCard";


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
      {isLoading === false ? (
        <Grid container spacing={15} padding={15}>
          {mapChildren()}
        </Grid>) : <></>}
      <BreweriesPagination />
    </Box>
  );
};
