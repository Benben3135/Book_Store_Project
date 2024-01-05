import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IsScrollState{
    value: boolean;
}

const initialState: IsScrollState = {
    value: false,
};

export const isScrollSlice = createSlice({
    name: "isScroll",
    initialState,
    reducers: {
        scroll: (state) => {
            state.value = true;
        },
        noScroll: (state) => {
            state.value = false;
        }
    }
});

export const {scroll} = isScrollSlice.actions;
export const {noScroll} = isScrollSlice.actions;


export const isScrollSelector = (state: RootState) => state.isScroll.value;

export default isScrollSlice.reducer;