import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBreweries } from '../../state/Breweries/BreweriesSlice';
import { useDispatchApp } from '../../state/hooks';
import { AppSearch } from '../Dumb/SearchBox';

export const SearchBrewery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatchApp();
  const { pageID } = useParams();

  const onSearchHanlder = (e: any) => {
    dispatch(
      getBreweries({ searchTerm: searchTerm, page: pageID || '1' }) as any
    );
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
