import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/i-product";

interface IState {
  result: IProduct;
  error: boolean;
  waiting: boolean;
}

const initialState: IState = {
  result: {
    id: 0,
    title: '',
    category: '',
    description: '',
    price: '',
    image: '',
    amount: 0,
  },
  error: false,
  waiting: false
}

export const loadDetails = createAsyncThunk<IProduct, string | undefined>(
  'details/loadDetails',
  async function(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data;
  }
)

const productsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadDetails.pending, (state) => {
        state.result = {
          id: 0,
          title: '',
          category: '',
          description: '',
          price: '',
          image: '',
          amount: 0,
        },
        state.error = false;
        state.waiting = true;
      })
      .addCase(loadDetails.fulfilled, (state, action: PayloadAction<IProduct>) => {
        state.result = action.payload;
        state.error = false;
        state.waiting = false;
      })
      .addCase(loadDetails.rejected, (state) => {
        state.waiting = false;
        state.error = true;
      })
  },
})

export default productsSlice.reducer;

