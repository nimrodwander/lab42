import { useNavigate } from 'react-router-dom';
import { BrewriesSelector } from '../state/Favorites/FavoritesSelectors';
import { useSelectorApp } from '../state/hooks';
import { Box, List, Typography } from '@mui/material';
import { IMAGE_URL } from '../util/constants';
import { AppModal } from '../UI/Dumb/Modal';
import { RootState } from '../state/store';

export const BreweryProfile: React.FC<any> = () => {
  const navigate = useNavigate();
  
  const selectIsLoading = useSelectorApp((state: RootState) => state.BreweriesReducer.breweries);
  const selectBrewery = useSelectorApp((state: RootState) =>
    BrewriesSelector.selectBreweryByID(
      state,
      '385a2831-a7d5-4d07-bcff-d9d3312c571c'
    )
  );



  const onCloseHandler = () => {

  }

  const mapData = () => {
    if (selectBrewery) {
      return Object.keys(selectBrewery).map((key: string) => {
        //const value = selectBrewery[key];
        return (
          <Typography variant="h6" key={'hi'}>{`${'x'}: ${1}`}</Typography>
        );
      });
    } else {
      return <></>;
    }
  }

  return (
    <AppModal title={'hello'} onClose={onCloseHandler}>
      <>
        <Box>
          <List sx={{ maxHeight: 200, overflow: 'auto' }}>{mapData()}</List>
        </Box>
        <Box>
          <img
            src={IMAGE_URL}
            alt="Modal Image"
            style={{ maxHeight: '180px', borderRadius: '10px' }}
          />
        </Box>
      </>
    </AppModal>
  );
};
