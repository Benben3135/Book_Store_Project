import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import isUserReducer from "../features/user/isUserSlice"
import isScrollReducer from "../features/layout/isScrollSlice"
import categorieReducer from "../features/categories/categorieSlice"


export const store = configureStore({
  reducer: {
    user: userReducer,
    isUser: isUserReducer,
    isScroll: isScrollReducer,
    categorie: categorieReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
