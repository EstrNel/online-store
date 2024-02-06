import { createSlice } from "@reduxjs/toolkit";

// Would like to store User details
// Store current logged in User

const userSlice = createSlice({
  name: "userDetail",
  initialState: {
    currentUser: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  },

  reducers: {

    //Store current login Username
    storeCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

// Export the action functions to be used in components
export const { storeCurrentUser } = userSlice.actions;

//Export the reducer function to be used in the store
export default userSlice.reducer;
