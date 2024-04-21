import { Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { getBreweries } from '../../state/Breweries/thunks';
import { useDispatchApp } from '../../state/hooks';
import { SEARCH_PARAMS } from '../../util/constants';
import { useState } from 'react';

export const BreweriesPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatchApp();

  const onChnageHandler = (event: any, page: any) => {
    setPage(page);
    
    //if (searchTerm) {
      searchParams.set(SEARCH_PARAMS.SEARCH_TERM, page);
      setSearchParams(searchParams);
      const searchTerm = searchParams.get(SEARCH_PARAMS.SEARCH_TERM)!;
      const pageID = searchParams.get(SEARCH_PARAMS.PAGE_ID) || '1';
      dispatch(
        getBreweries({
          searchTerm: searchTerm,
          page: pageID,
        }) as any
      );
    //}
  };

  return (
    <Pagination
      count={10}
      page={page}
      onChange={onChnageHandler}
      shape="rounded"
    />
  );
};
