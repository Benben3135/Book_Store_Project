import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IsUserState{
    value: boolean;
}

const initialState:IsUserState = {
    value: false,
};

export const isUserSlice = createSlice({
    name: "isUser",
    initialState,
    reducers: {
        thereUser: (state) => {
            state.value = true
        }
    }
})

export const {thereUser} = isUserSlice.actions;

export const isUserSelector = (state: RootState) => state.isUser.value;

export default isUserSlice.reducer;