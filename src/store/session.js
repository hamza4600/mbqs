// redux implementition for session of user in app
import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        isLogedIn: false, // after loginit will true
        isAuthenticated: false,
        verified: false, // if register then true
        error: null, // any error
        userSession: null, // previus session
        role: null, // role of user type
        authToken: null, // token
        refreshToken: null, //
        uuId: null, // set on first time when a persion visit
        csrfToken: null,
        ipv4: null, // ip of user when login
        userAgent: null, // browser
        sessionTime: null, // when login
    },
    reducers: {
        //  eact Time middlewarre  willalso run on It
        loginSuccess: (state, action) => {
            const {
                isLoginIn,
                isAuthenticated,
                error,
                userSession,
                role,
                token,
                time,
            } = action.payload;
            return {
                ...state,
                isLogedIn: isLoginIn,
                isAuthenticated: isAuthenticated,
                error: error,
                userSession: userSession,
                role: role,
                authToken: token,
                sessionTime: time,
            };
        },

        logoutSuccess: (state) => {
            return {
                ...state,
                isLogedIn: false,
                isAuthenticated: false,
                error: null,
                userSession: false,
                role: null,
                authToken: false,
                refreshToken: null,
                uuId: false, // remain same
                csrfToken: false,
                ipv4: false,
                userAgent: false,
            };
        },
        addUid: (state, action) => {
            const { uuId, userAgent } = action.payload;
            return {
                ...state,
                uuId: uuId,
                userAgent: userAgent,
            };
        },
        registerUser: (state, action) => {
            const { verified, userAgent, ip } = action.payload;
            return {
                ...state,
                verified: verified,
                userAgent: userAgent,
                ipv4: ip,
            };
        },
    },
});

export const { loginSuccess, logoutSuccess, registerUser, addUid } =
    sessionSlice.actions;

export default sessionSlice.reducer;
