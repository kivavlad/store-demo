import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/i-product";

interface IState {
  list: IProduct[];
  param: {
    limit: number;
    category: string;
  };
  count: number;
  error: boolean;
  waiting: boolean;
}

interface IApiParams {
  limit: number;
  category?: string;
}

const initialState: IState = {
  list: [],
  param: {
    limit: 10,
    category: '',
  },
  count: 20, // Количетво продуктов, тк из бэка это поле не приходит
  error: false,
  waiting: false
}

// Получение списка продуктов
export const load = createAsyncThunk<IProduct[], IApiParams>(
  'products/load',
  async function(params) {
    const response = await fetch(`https://fakestoreapi.com/products/${params.category}?limit=${params.limit}`)
    const data = await response.json();
    return data;
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Установка новых параметров в limit
    setLimit(state, action: PayloadAction<number>) {
      state.param.limit = state.param.limit + action.payload;
    },

    // Установка новых параметров в category
    setCategory(state, action: PayloadAction<string>) {
      state.param.category = action.payload;
    },

  },
  extraReducers(builder) {
    builder
      // Получение списка продуктов 
      .addCase(load.pending, (state) => {
        state.error = false;
        state.waiting = true;
      })
      .addCase(load.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
        state.list = action.payload;
        state.error = false;
        state.waiting = false;
      })
      .addCase(load.rejected, (state) => {
        state.waiting = false;
        state.error = true;
      })
  },
})

export const {setLimit, setCategory} = productsSlice.actions;
export default productsSlice.reducer;

