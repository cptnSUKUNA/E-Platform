import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const authmodel= {
    token: "",
    id: "",
    refreshToken: "",
    email: ""
}
const initialState = {
    authmodel: Cookies.get("Auth") ? JSON.parse(Cookies.get("Auth")) : authmodel
}


const AuthSlice =  createSlice({
    name: "auth",
    initialState,
    reducers:{
        login : (state,action) => {
            state.authmodel = action.payload
        },
        logout : (state) => {
            state.authmodel = null
        }

    }
});
export const {login} = AuthSlice.actions
export const {logout} = AuthSlice.actions
export default AuthSlice.reducer;
