import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CategorieState{
    value: string;
}

const initialState:CategorieState = {
    value: "",
};

export const categorieSlice = createSlice({
    name: "categorie",
    initialState,
    reducers: {
        setActiveCategorie: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setActiveCategorie} = categorieSlice.actions;

export const categorieSelector = (state: RootState) => state.categorie.value;

export default categorieSlice.reducer;