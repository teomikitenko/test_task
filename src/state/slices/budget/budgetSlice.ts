import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {title: 'Total Budget', budget: '$85,125.00', value: 'down'},
  {title: 'Monthly Budget', budget: '$85,125.00', value: 'defaultDown'},
  {title: 'Weekly Budget', budget: '$85,125.00', value: 'up'},
  {title: 'Todays Budger', budget: '$85,125.00', value: 'up'},
];

export const budgetSlice = createSlice({
  //зроблено так тому що в майбутньому ці дані будуть змінюватись, тут можна буде їх обновити
  name: 'budget',
  initialState,
  reducers: {
    updateBudget: () => {
      //обновлення бюджету
    },
  },
});

export const {updateBudget} = budgetSlice.actions;
export default budgetSlice.reducer;
