import React from 'react';
import { BreweriesActions } from '../../state/Breweries/BreweriesSlice';
import { FavoritesActions } from '../../state/Favorites/FavoritesSlice';
import { useDispatchApp, useSelectorApp } from '../../state/hooks';
import { RootState } from '../../state/store';
import { AppBreweryItem } from '../../util/types';
import { AppCard } from '../Dumb/Card';
import { IMAGE_URL } from '../../util/config';
import { useLocation, useNavigate } from 'react-router-dom';
import { BreweryProfile } from '../../Pages/BreweryProfile/BreweryProfile';

interface Props {
    selector: (state: RootState, id: string) => AppBreweryItem;
    id: string;
}

export const BreweryCard: React.FC<Props> = ({ selector, id }) => {
  const selectBrewery = useSelectorApp((state: RootState) => selector(state,id));
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatchApp();
    
    const onClickHandler = () => {
        console.log();
        navigate(`${id}`);
    };
    
    const onfavoriteHandler = (e: any) => {
        dispatch(FavoritesActions.toggle({ data: selectBrewery }));
    };

  return (
      <AppCard
          imageUrl={IMAGE_URL}
      onClick={onClickHandler}
      onFavorite={(e) => onfavoriteHandler(e)}
      data={selectBrewery}
          />
  );
};
