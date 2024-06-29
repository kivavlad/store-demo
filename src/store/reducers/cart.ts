import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/i-product";

interface IState {
  list: IProduct[];
  sum: number;
  amount: number;
}

const initialState: IState = {
  list: [],
  sum: 0,
  amount: 0,
} 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // Добавление продукта в корзину
    addInCart(state, action: PayloadAction<IProduct>) {
      let sum = 0;
      // Ищем товар в корзине, чтобы увеличить его количество
      let exist = false;
      const list = state.list.map(item => {
        let result = item;
        if (item.id === action.payload.id) {
          exist = true; // Запомним, что был найден в корзине
          result = {...item, amount: item.amount + 1};
        }
        sum += Number(result.price) * result.amount;
        return result;
      })

      if (!exist) {
        // Если довара нет, добавляем его в корзину
        list.push({...action.payload, amount: 1});
        sum += Number(action.payload.price);
      }
      state.list = list;
      state.sum = sum;
      state.amount = list.length;
    },

    // Удаление из корзины
    removeFromCart(state, action: PayloadAction<IProduct>) {
      let sum = 0;
      const list = state.list.filter(item => {
        if (item.id === action.payload.id) return false;
        sum += Number(item.price) * item.amount;
        return true;
      })
      state.list = list;
      state.sum = sum;
      state.amount = list.length;
    }

  },
})

export const {addInCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;