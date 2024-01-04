import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import isUserReducer from "../features/user/isUserSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    isUser: isUserReducer
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
