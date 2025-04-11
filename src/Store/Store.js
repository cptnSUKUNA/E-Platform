import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import MyCoursesSlice from "./Slices/MyCoursesSlice";
import profileSlice from "./Slices/ProfileSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
        myCourses: MyCoursesSlice,
        profile: profileSlice

    }
})