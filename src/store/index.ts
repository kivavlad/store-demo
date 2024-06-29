import {configureStore} from "@reduxjs/toolkit";
import producsSlice from "./reducers/products";
import detailsSlice from "./reducers/details";
import categoriesSlice from "./reducers/categories";
import cartSlice from "./reducers/cart";
import modalsSlice from "./reducers/modals";

const store = configureStore({
  reducer: {
    products: producsSlice,
    details: detailsSlice,
    categories: categoriesSlice,
    cart: cartSlice,
    modals: modalsSlice,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;