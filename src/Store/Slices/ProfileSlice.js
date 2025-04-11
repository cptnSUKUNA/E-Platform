
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        profile: [],
        isLoading: false,
        isError: false,
        error: "",
    };

    const profileSlice = createSlice({
        name: "profile",
        initialState,
        reducers:{
            setprofile: (state, action) => {
                state.profile = action.payload
            },
            removeprofile: (state) => {
                state.profile = []
            }
        }
    });

    export const {setprofile,removeprofile} = profileSlice.actions
    export default profileSlice.reducer