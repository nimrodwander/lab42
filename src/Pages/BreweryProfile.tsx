import { useNavigate } from 'react-router-dom';
import { useSelectorApp } from '../state/hooks';
import { Box, List, Typography } from '@mui/material';
import { AppModal } from '../UI/Dumb/Modal';
import { RootState } from '../state/store';
import { IMAGE_URL } from '../util/config';
import { BrewriesSelector } from '../state/Breweries/BreweriesSelectors';

export const BreweryProfile: React.FC<any> = () => {
  
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
