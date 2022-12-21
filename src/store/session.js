// redux implementition for session of user in app
import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: "session",
    initialState: {
        session: false,
        isLogedIn: false,
        isAuthenticated: false,
        verified: false,
        error: null,
        userSession: null,
        attributes: null,
        authToken: null,
        refreshToken: null,
        uuId: null,
        csrfToken: null,
        ipv4: null,
        userAgent: null,
    },
    reducers: {
        //  eact Time middlewarre  willalso run on It
        loginSuccess: (state, action) => {
            // const { userSession, attributes } = action.payload; 
            state.session = false;
            state.isLogedIn = false;
            state.isAuthenticated = false;
            state.verified = false;
            state.error = null;
            state.userSession = false;
            state.attributes = null;
            state.authToken = false;
            state.refreshToken = null;
            state.uuId = false;
            state.csrfToken = false;
            state.ipv4 = false;
            state.userAgent = false;

        },
        loginError: (state, action) => {
            // const { error } = action.payload;
            state.session = false;
            state.isLogedIn = false;
            state.isAuthenticated = false;
            state.verified = false;
            state.error = null;
            state.userSession = false;
            state.attributes = null;
            state.authToken = false;
            state.refreshToken = null;
            state.uuId = false;
            state.csrfToken = false;
            state.ipv4 = false;
            state.userAgent = false;

        },
        logoutSuccess: (state) => {
            state.session = false;
            state.isLogedIn = false;
            state.isAuthenticated = false;
            state.verified = false;
            state.error = null;
            state.userSession = false;
            state.attributes = null;
            state.authToken = false;
            state.refreshToken = null;
            state.uuId = false;
            state.csrfToken = false;
            state.ipv4 = false;
            state.userAgent = false;

        },
        userNotSignedIn: (state, action) => {
            const { authtoken, uuId, csrfToken, ipv4, userAgent, session } = action.payload;

            state.session = session;
            state.isLogedIn = false;
            state.isAuthenticated = false;
            state.verified = false;
            state.error = null;
            state.userSession = false;
            state.attributes = null;
            state.authToken = authtoken;
            state.refreshToken = null;
            state.uuId = uuId;
            state.csrfToken = csrfToken;
            state.ipv4 = ipv4;
            state.userAgent = userAgent;
        },
    },
});

// export const { loginSuccess, loginError, logoutSuccess, userNotSignedIn } = sessionSlice.actions;

export default sessionSlice.reducer;