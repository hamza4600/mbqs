//  store for redux
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// reducers
import sessionSlice from "store/session";
import loginModel from "store/loginModel";
import userSlice from "store/user";  // all user data 
import sidebarInfo from "store/sidebar";


const reducers = combineReducers({
    session: sessionSlice,
    loginModel: loginModel,
    user: userSlice,
    sidebar: sidebarInfo
});

const persistConfig = {
    key: "root",    
    storage,    
    blacklist: [],  
    stateReconciler: autoMergeLevel2, // it is used to merge the state of the reducers
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

