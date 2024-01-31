import { createSlice, current } from "@reduxjs/toolkit";

const cardHolder = createSlice({
  name: "cardHolder",
  initialState: [{ id: 0 }],
  reducers: {
    addCardHolder: (state, action) => {
      state.push({ id: state.length + 1 - 1 });
    },
    removeCardHolder: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload,
        console.log(state)
      );
    },
  },
});

export const cardHolderActions = cardHolder.actions;

export default cardHolder.reducer;
