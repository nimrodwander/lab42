import { Box, List, Typography } from '@mui/material';
import { AppLoading } from '../../UI/Dumb/Loading';
import { AppModal } from '../../UI/Dumb/Modal';
import { BrewriesSelector } from '../../state/Breweries/BreweriesSelectors';
import { useSelectorApp } from '../../state/hooks';
import { RootState } from '../../state/store';
import { IMAGE_URL } from '../../util/config';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { errorHandler } from '../../util/errors';
import React from 'react';

interface Props{
    onClose: () => void
}

export const BreweryModal: React.FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectBrewery = useSelectorApp((state: RootState) =>
    BrewriesSelector.selectBreweryByID(
      state,
      searchParams.get('breweryID') ?? errorHandler('undefined page')
    )
    );

    const loading = useSelectorApp(
    (state: RootState) => state.BreweriesReducer.loading
    );

  const mapData = () => {
    let current = selectBrewery as any;
    return Object.keys(selectBrewery).map((key) => {
      return <Typography variant="body1">{`${key} : ${current[key]}\n`}</Typography>;
    });
    };

    const title = (
      <>
        <AppLoading isLoading={loading}>
          <Typography variant="h6">{selectBrewery?.name}</Typography>
        </AppLoading>
      </>
    );
    

  return (
    <AppModal
      title={title}
      onClose={onClose}
    >
      <>
        <Box>
          <AppLoading isLoading={loading}>
            <List sx={{ maxHeight: 200, overflow: 'auto' }}>{mapData()}</List>
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
