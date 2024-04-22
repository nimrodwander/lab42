import { Pagination } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BrewriesSelector } from '../../state/Breweries/BreweriesSelectors';
import { getBreweries } from '../../state/Breweries/thunks';
import { useDispatchApp, useSelectorApp } from '../../state/hooks';
import { ITEMS_PER_PAGE } from '../../util/config';
import { SEARCH_PARAMS } from '../../util/constants';

export const BreweriesPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatchApp();
  const selectSize = useSelectorApp(BrewriesSelector.selectSize);

  const onChnageHandler = (event: any, page: any) => {
    setPage(page);

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
  };

  return (
    <>
      {selectSize > ITEMS_PER_PAGE && (
        <Pagination
          count={10}
          page={page}
          onChange={onChnageHandler}
          shape="rounded"
        />
      )}
    </>
  );
};
