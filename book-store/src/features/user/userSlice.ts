import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState{
    value: string;
}

const initialState: UserState = {
    value: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setNewUser: (state, action) => {
            state.value = action.payload
        }
    }
});

export const {setNewUser} = userSlice.actions;

export const userSelector = (state: RootState) => state.user.value;

export default userSlice.reducer;