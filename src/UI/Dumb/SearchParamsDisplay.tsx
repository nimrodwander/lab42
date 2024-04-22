import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAMS } from '../../util/constants';

export interface Props {
  params: SEARCH_PARAMS;
  children: JSX.Element;
  fallback?: JSX.Element;
}

export const SearchParamsDisplay: React.FC<Props> = ({
  params,
  children,
  fallback,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return <>{searchParams.has(params) ? <>{ children }</> : fallback}</>;
};
