// represents the logic and data for one SLICE of the Redux state
// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// ? create slice - define redux logic
// ? PayloadAction - type that represents the contents of a given action object

// represents the shape of the state inside of our slice, managed by the reducer
interface CounterState {
  value: number;
}

// initial state for the slice
const initialState: CounterState = { value: 0 };

// slice that contains the reducer logic
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // * redux toolkit's immer library applies mutable code, immutably
      state.value++;
    }
    // decrement
    // reset
  }
})

// action creators - a fn that makes and returns an action obj
// createSlice automatically makes one of those for us

// countetSlice has a reducerFn and an action creator for each of the fns in the reducers field

export const { incremented } = counterSlice.actions;

export default counterSlice.reducer;