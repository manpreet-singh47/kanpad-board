import { createSlice, current, original } from "@reduxjs/toolkit";

const card = createSlice({
  name: "card",
  initialState: [
    {
      work: "Project Management",
      des: "Keep tasks in order , deadlines on track , and team members aligned with trello",
      key: 0,
    },
  ],
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    removeCard: (state, action) => {
      return state.filter((item) => {
        return item.work !== action.payload.work;
      });
    },
  },
});

export const cardActions = card.actions;
export default card.reducer;
