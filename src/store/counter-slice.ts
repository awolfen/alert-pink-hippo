import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { counter: 0, counterMax: 1, percentCorrect: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter(state, action: PayloadAction<number>) {
            state.counter = action.payload;
            state.percentCorrect = state.counter / state.counterMax;
        },
        setCounterMax(state, action: PayloadAction<number>) {
            state.counterMax = action.payload;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;