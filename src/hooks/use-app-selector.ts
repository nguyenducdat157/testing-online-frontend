import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/store/reducers";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
