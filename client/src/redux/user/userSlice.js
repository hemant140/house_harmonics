import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    loading: false,
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInState: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            const data = action.payload;
            state.currentUser = data;
            state.error = null;
            state.loading = false;
        },
        signInError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});

export const { signInState, signInError, signInSuccess } = userSlice.actions;

export default userSlice.reducer;