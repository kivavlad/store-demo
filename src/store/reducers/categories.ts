import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {ICategory} from "../../types/i-category";

interface IState {
  list: ICategory[];
  waiting: boolean;
  error: boolean;
}

const initialState: IState = {
  list: [
    {title: 'all', value: ''},
  ],
  waiting: false,
  error: false,
} 

export const loadCategories = createAsyncThunk<string[], undefined>(
  'categories/loadCategories',
  async function() {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = await response.json();
    return data;
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCategories.pending, (state) => {
        state.list = [{title: 'all', value: ''}],
        state.error = false;
        state.waiting = true;
      })
      .addCase(loadCategories.fulfilled, (state, action: PayloadAction<string[]>) => {
        const newCategories = action.payload.map((item) => {
          return {title: item, value: item}
        })
        state.list = [...state.list, ...newCategories];
        state.error = false;
        state.waiting = false;
      })
      .addCase(loadCategories.rejected, (state) => {
        state.error = true;
        state.waiting = false;
      })
  },
})

export default categoriesSlice.reducer;