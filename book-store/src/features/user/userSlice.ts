import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
    uid: string,
    email: string,
    displayName: string
}

const initialState: UserState = {
    uid: "",
    email: "",
    displayName: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setNewUserID: (state, action) => {
            state.uid = action.payload
        },
        setNewUserEmail: (state, action) => {
            state.email = action.payload
        },
        setNewUserdisplayName: (state, action) => {
            state.displayName = action.payload
        }

    }
});


export const { setNewUserID, setNewUserEmail, setNewUserdisplayName } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;