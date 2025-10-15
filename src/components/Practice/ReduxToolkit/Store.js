import { configureStore } from "@reduxjs/toolkit";

const Store=configureStore({
    reducer:
    {
       todo:TodoReducer
    }
});

export default Store;