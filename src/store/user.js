import { createSlice } from "@reduxjs/toolkit";
// Togic show and Hide the slider
export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        isPresent: false,
        role: "",
        roleID: "",
        isAuth: false,
        details: {}, // user details from server
        token: "",
        expire: "",
    },
    reducers: {
        // more actions here  update on Login and Logout
        updateUser: (state, action) => {
            state.name = action.payload.name;
            state.role = action.payload.role;
            state.roleID = action.payload.roleID;
            state.isPresent = action.payload.isPresent;
            state.isAuth = action.payload.isAuth;
            state.details = action.payload.details;
            state.token = action.payload.token;
            state.expire = action.payload.expire;
        }

    },
});

// Action creators are generated for each case reducer function
export const { AddName } = userSlice.actions;

export default userSlice.reducer;
