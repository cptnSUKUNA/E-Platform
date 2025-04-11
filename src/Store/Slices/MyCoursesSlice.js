

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    myCourses: [],
    isLoading: false,
    isError: false,
    error: "",
  };

  const MyCoursesSlice = createSlice({
    name: "MyCourses",
    initialState,
    reducers: {
      setcourses: (state, action) => {
        state.myCourses = action.payload;
      },
      removecourses: (state) => {
        state.myCourses = [];
      },
    }
  });

  export const { setcourses, removecourses } = MyCoursesSlice.actions;
  export default MyCoursesSlice.reducer