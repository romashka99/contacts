import { RootState } from 'core/store/reducers';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
