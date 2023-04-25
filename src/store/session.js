// redux implementition for session of user in app
import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        isLogedIn: false, // after loginit will true
        isAuthenticated: false,
        verified: false, // if register then true
        error: null, // any error
        userSession: [], // previus session
        role: null, // role of user type
        authToken: null, // token
        refreshToken: null, //
        uuId: null, // set on first time when a persion visit
        csrfToken: null,
        ipv4: null, // ip of user when login
        userAgent: null, // browser
        sessionTime: null, // when login
        user : {}
    },
    reducers: {
        //  eact Time middlewarre  willalso run on It
        loginSuccess: (state, action) => {
            const {
                isLoginIn,
                isAuthenticated,
                error,
                role,
                token,
                time,
                user 
            } = action.payload;
            return {
                ...state,
                isLogedIn: isLoginIn,
                isAuthenticated: isAuthenticated,
                error: error,
                // appned new session in array
                // userSession: [...state.userSession, time],
                // set new session time also copy old session
                userSession: state.userSession.concat(time),
                role: role,
                authToken: token,
                sessionTime: time,
                user : user
            };
        },

        logoutSuccess: (state) => {
            return {
                ...state,
                isLogedIn: false,
                isAuthenticated: false,
                error: null,
                role: null,
                authToken: false,
                refreshToken: null,
                // remain same
                uuId: state.uuId,
                csrfToken: false,
                ipv4: false,
                userAgent: false,
                sessionTime: false,
                user : {}

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
