import {configureStore} from "@reduxjs/toolkit";
import producsSlice from "./reducers/products";
import detailsSlice from "./reducers/details";
import categoriesSlice from "./reducers/categories";

const store = configureStore({
  reducer: {
    products: producsSlice,
    details: detailsSlice,
    categories: categoriesSlice,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;