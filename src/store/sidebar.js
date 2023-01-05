import { createSlice } from "@reduxjs/toolkit";

export const sidebarInfo = createSlice({
    name: 'sidebarInfo',
    initialState: {
        dongal: false
    },
    reducers: {
        showSidebar: (state) => {
            state.dongal = true
        },
        closeSidebar: (state) => {
            state.dongal = false
        },
        toggelSidebar: (state) => {
            state.dongal = !state.dongal
        }
    }
});

export const {
    showSidebar,
    closeSidebar,
    toggelSidebar
} = sidebarInfo.actions

export default sidebarInfo.reducer