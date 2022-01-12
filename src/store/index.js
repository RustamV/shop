import { configureStore } from "@reduxjs/toolkit";
import product from "./slices/product";
import localStorageMW from "./middleware/localStorage";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        product
    },
    middleware: [thunk, localStorageMW]
});

export default store;
