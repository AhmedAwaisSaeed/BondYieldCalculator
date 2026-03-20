import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/** Typed dispatch hook — prefer over plain `useDispatch`. */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/** Typed selector hook — prefer over plain `useSelector`. */
export const useAppSelector = useSelector.withTypes<RootState>();
