import { configureStore } from "@reduxjs/toolkit";
import CardHolder from "../slices/CardHolder";
import Card from "../slices/Card";

const store = configureStore({
  reducer: {
    cardHolder: CardHolder,
    card: Card,
  },
});

export default store;
