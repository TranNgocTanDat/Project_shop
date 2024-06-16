import { TypedUseSelectorHook, useDispatch } from "react-redux";
import {root} from "./RootReducer";
import {configureStore} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


// Cấu hình store với reducer
export const store = configureStore({
    reducer: root,
});

// Định nghĩa kiểu cho RootState và AppDispatch
export type RootState = ReturnType<typeof root>;
export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;