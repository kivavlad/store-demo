import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
  activeModal: string;
}

const initialState: IState = {
  activeModal: '',
} 

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    open(state, action: PayloadAction<string>) {
      state.activeModal = action.payload;
    },

    close(state) {
      state.activeModal = '';
    }
  },
})

export const {open, close} = modalsSlice.actions;
export default modalsSlice.reducer;