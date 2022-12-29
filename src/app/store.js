import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import cartSlice from "./feature/cart/cartSlice";
import filterSlice from "./feature/filter/filterSlice";
import logger from "redux-logger"
import productSlice from "./product/productSlice";

const store = configureStore({
    reducer : {
        cart:cartSlice,
        filter: filterSlice,
        products: productSlice,
    },
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

export default store;