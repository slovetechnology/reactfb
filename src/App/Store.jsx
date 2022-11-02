import { configureStore } from "@reduxjs/toolkit";
import ToggleAction from "./ToggleAction";


export default configureStore({
    reducer: {
        toggleAction: ToggleAction,
    },
});