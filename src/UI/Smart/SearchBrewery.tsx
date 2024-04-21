import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatchApp } from '../../state/hooks';
import { SearchBox } from '../Dumb/SearchBox';
import { getBreweries } from '../../state/BreweriesSlice';

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
    <SearchBox
      onChange={(e) => onChangeHandler(e)}
      onSearch={(e) => onSearchHanlder(e)}
      value={searchTerm}
    />
  );
};
