import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
    name: "Stock image",
    initialState: {
        loggedin: false,
        userData: null,
    },
    reducers: {
        login: (state, action) => {
            state.loggedin = true
            state.userData = action.payload
        },
        logout: (state) => {
            state.loggedin = false
            state.userData = null
        },
    }
})

export const { login, logout } = imageSlice.actions
export default imageSlice.reducer
