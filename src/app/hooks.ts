// Create pre-defined versions of React Redux hooks that already know the right types for our state and dispatch
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
// useSelector is a fn - we're aliasing it by adding types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

