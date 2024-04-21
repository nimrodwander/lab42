import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getBreweries } from '../../state/Breweries/thunks';
import { useDispatchApp } from '../../state/hooks';
import { AppSearch } from '../Dumb/SearchBox';

export const SearchBrewery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatchApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageID } = useParams();

  const onSearchHanlder = (e: any) => {
    if (!searchTerm) {
      alert('Search input is empty');
      return;
    }
    dispatch(
      getBreweries({ searchTerm: searchTerm, page: pageID || '1' }) as any
    );
    setSearchParams({ search: searchTerm, pageID: '1' });
  };

  const onChangeHandler = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <AppSearch
      onChange={(e) => onChangeHandler(e)}
      onSearch={(e) => onSearchHanlder(e)}
      value={searchTerm}
    />
  );
};
