import { useSearchParams } from 'react-router-dom';
import { AppLoading } from '../../UI/Dumb/Loading';
import { SearchParamsDisplay } from '../../UI/Dumb/SearchParamsDisplay';
import { useSelectorApp } from '../../state/hooks';
import { RootState } from '../../state/store';
import { SEARCH_PARAMS } from '../../util/constants';
import { BreweryModal } from './BreweryModal';

export const BreweryProfile: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const loading = useSelectorApp(
    (state: RootState) => state.BreweriesReducer.loading
  );

  const onCloseHandler = () => {
    searchParams.delete('breweryID');
    setSearchParams(searchParams);
  };

  return (
    <AppLoading isLoading={loading}>
      <SearchParamsDisplay params={SEARCH_PARAMS.BREWERY_ID}>
        <BreweryModal onClose={onCloseHandler} />
      </SearchParamsDisplay>
    </AppLoading>
  );
};
