import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { title: "Total Budget", budget: "$85,125.00" },
  { title: "Monthly Budget", budget: "$85,125.00" },
  { title: "Weekly Budget", budget: "$85,125.00" },
  { title: "Todays Budger", budget: "$85,125.00" },
];

export const budgetSlice = createSlice({
  //зроблено так тому що в майбутньому ці дані будуть змінюватись, тут можна буде їх обновити
  name: "budget",
  initialState,
  reducers: {
    updateBudget: (state, action) => {
      //обновлення бюджету
    },
  },
});

export const { updateBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
