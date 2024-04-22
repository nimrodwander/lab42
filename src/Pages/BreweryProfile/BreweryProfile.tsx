import { Box, List, Typography } from '@mui/material';
import { AppLoading } from '../../UI/Dumb/Loading';
import { AppModal } from '../../UI/Dumb/Modal';
import { BrewriesSelector } from '../../state/Breweries/BreweriesSelectors';
import { useSelectorApp } from '../../state/hooks';
import { RootState } from '../../state/store';
import { IMAGE_URL } from '../../util/config';
import { useNavigate, useParams } from 'react-router-dom';
import { errorHandler } from '../../util/errors';

export const BreweryProfile: React.FC = () => {
  const { pageID } = useParams();
  const navigate = useNavigate();
  
  const selectBrewery = useSelectorApp((state: RootState) =>
    BrewriesSelector.selectBreweryByID(
      state,
      pageID ?? errorHandler('undefined page')
    ));

  const loading = useSelectorApp(
    (state: RootState) => state.BreweriesReducer.loading
  );

  const onCloseHandler = () => {
    navigate(-1);
  };

  const mapData = () => {
    let current = selectBrewery as any;
    return Object.keys(selectBrewery).map(key => {
      return <Typography variant="h6">
        {`${key} : ${current[key]}`}
      </Typography>
    }
  )
  };

  return (
    <AppModal title={selectBrewery.name} onClose={onCloseHandler}>
      <>
        <Box>
          <AppLoading isLoading={loading}>
            <List sx={{ maxHeight: 200, overflow: 'auto' }}>
              {mapData()}
            </List>
          </AppLoading>
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
