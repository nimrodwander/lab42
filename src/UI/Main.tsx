import React, { useEffect } from 'react';
import data from '../data.json';
import { normallize } from '../state/fileSystem/actions';
import { useDispatchApp } from '../state/hooks';
import { RootDir } from './RootDir';

export const Main: React.FC = () => {
  const parsedData = JSON.parse(JSON.stringify(data));
  const dispatch = useDispatchApp();
  dispatch(normallize(parsedData));
  return <RootDir />;
};
