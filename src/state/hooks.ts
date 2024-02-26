import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

//dispatch action hook
export const useDispatchApp = () => useDispatch<AppDispatch>();

//select data from store hook
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector;
