// redux implementition for session of user in app
import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        isLogedIn: false, 
        isAuthenticated: false,
        verified: false, 
        error: null, 
        userSession: [],
        role: null,
        authToken: null,
        refreshToken: null,
        uuId: null,
        csrfToken: null,
        ipv4: null, 
        userAgent: null, 
        sessionTime: null, 
        timeinMilli: null, 
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
                timeinMilli,
                user
            } = action.payload;
            return {
                ...state,
                isLogedIn: isLoginIn,
                isAuthenticated: isAuthenticated,
                error: error,
                userSession: [time],
                role: role,
                authToken: token,
                sessionTime: time,
                timeinMilli : timeinMilli, 
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
                timeinMilli: false,
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
