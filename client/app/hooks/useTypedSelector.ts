import { TypeRootState } from '@/store/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
