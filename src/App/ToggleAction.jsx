import { createSlice } from "@reduxjs/toolkit";

export const togleSlice = createSlice({
    name: "toggledatas",
    initialState: {
        homeuser: false,
        homenotis: false,
        homechat: false,
        homeall: false,
        mode: false,
        regform: false,
        auth: true,
    },
    reducers: {
        toggleHomeuser: (state) => {
            state.homeuser = !state.homeuser;
            state.homenotis = false;
            state.homechat = false;
            state.homeall = false;
        },
        toggleHomenotis: (state) => {
            state.homenotis = !state.homenotis;
            state.homeuser = false;
            state.homechat = false;
            state.homeall = false;
        },
        toggleHomechat: (state) => {
            state.homechat = !state.homechat;
            state.homeuser = false;
            state.homenotis = false;
            state.homeall = false;
        },
        toggleHomeall: (state) => {
            state.homeall = !state.homeall;
            state.homeuser = false;
            state.homenotis = false;
            state.homechat = false;
        },
        toggleRegform: (state) => {
            state.regform = !state.regform;
        },
        authuser: (state, payload) => {
            state.auth = payload;
        },
        togAppmode: (state) => {
            state.mode = !state.mode;
        }
    }
});
export const {toggleHomeuser, toggleHomenotis, toggleHomechat, toggleHomeall, toggleRegform, authuser, togAppmode} = togleSlice.actions;
export default togleSlice.reducer;