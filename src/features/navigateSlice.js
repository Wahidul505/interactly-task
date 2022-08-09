import { createSlice } from "@reduxjs/toolkit";

const navigateSlice = createSlice({
    name: 'navigate',
    initialState: {
        welcome: true,
        coaching: false,
        signUp: false,
        form: false
    },
    reducers: {
        setWelcome: (state) => {
            state.welcome = true;
            state.coaching = false;
            state.signUp = false;
            state.form = false;
        },

        setCoaching: (state) => {
            state.welcome = false;
            state.coaching = true;
            state.signUp = false;
            state.form = false;
        },

        setSignUp: (state) => {
            state.welcome = false;
            state.coaching = false;
            state.signUp = true;
            state.form = false;
        },

        setForm: (state, action) => {
            state.welcome = false;
            state.coaching = action.payload.coaching;
            state.signUp = action.payload.signUp;
            state.form = true;
        },

    }
});

export const { setWelcome, setCoaching, setSignUp, setForm } = navigateSlice.actions;
export default navigateSlice.reducer;