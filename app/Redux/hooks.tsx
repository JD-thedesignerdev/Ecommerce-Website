import { useDispatch, useSelector, useStore } from 'react-redux';
import { AppStore, RootState, AppDispatch } from './Store';


// Use these type safe versions
export const useAppStore = useStore.withTypes<AppStore>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();