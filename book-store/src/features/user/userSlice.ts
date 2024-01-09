import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
    uid: string,
    email: string,
    displayName: string,
    img: string
}

const initialState: UserState = {
    uid: "",
    email: "",
    displayName: "",
    img:""
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
        },
        setNewUserImg : (state, action) => {
            state.img = action.payload
        }
    }
});


export const { setNewUserID, setNewUserEmail, setNewUserdisplayName, setNewUserImg } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;