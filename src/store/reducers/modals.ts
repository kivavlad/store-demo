import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
  name: string | null;
}

const initialState: IState = {
  name: null,
} 

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    open(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },

    close(state) {
      state.name = null;
    }
  },
})

export const {open, close} = modalsSlice.actions;
export default modalsSlice.reducer;