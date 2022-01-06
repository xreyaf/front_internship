import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value += 1;
    },
    decremented(state) {
      state.value -= 1;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    }
  }
});

export const { incremented, amountAdded, decremented } = counterSlice.actions;
export default counterSlice.reducer;
