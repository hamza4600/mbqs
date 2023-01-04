//  store for redux
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
// reducers
import sessionSlice from "store/session";
import loginModel from "store/loginModel";
import  userSlice  from "store/user";  // all user data 


const reducers = combineReducers({
    session: sessionSlice,
    loginModel: loginModel,
    user: userSlice,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),

});

export const persistor = persistStore(store);

